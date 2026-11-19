import { useApis } from "@/api";
import { Pagination, PatientMini } from "@/types";
import { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import { useRefreshDashboardCounter } from "@/contexts/RefetchDashboard";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function usePatientList(mode?:string) {
    const { api } = useApis();
    const [searchValue, setSearchValue] = useState("");
    const [patients, setPatients] = useState<PatientMini[]>([]);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState<Pagination>();
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(1)
    const debouncedSearch = useDebounce(searchValue, 500); 
    const{value, increase} = useRefreshDashboardCounter()
    const router = useRouter();
    const {load} = useLocalSearchParams();
    useEffect(()=>{
        if(load){
            router.push({
                pathname : "/Patients/Patient",
                params : {
                    id : load
                }
            })
        }
       
    }, [load]) 

    const getPatients = () => {
        setLoading(true);
        const URL =
        debouncedSearch.length > 0
            ? `/api/patients?search=${debouncedSearch}&page=${page}`
            : `/api/patients?page=${page}`;

        api()
        .get(URL)
        .then((response) => response.data)
        .then((data) => {
            if (data.success) {
                setError("");
                setPagination(data.pagination);

                if (debouncedSearch.length > 0 && page === 1) {
                    setPatients(data.results);
                } else if (debouncedSearch.length > 0 && page > 1) {
                    setPatients((prev) => [
                    ...prev,
                    ...data.results.filter(
                        (newPatient: PatientMini) =>
                        !prev.some((existing) => existing.id === newPatient.id)
                    ),
                    ]);
                } else {
                    setPatients((prev) => [
                    ...prev,
                    ...data.results.filter(
                        (newPatient: PatientMini) =>
                        !prev.some((existing) => existing.id === newPatient.id)
                    ),
                    ]);
                }
            }
        })
        .catch((error) => {
            const message = isAxiosError(error)
            ? error.response?.data?.error || error.message || "Something went wrong."
            : "Something went wrong.";
            setError(String(message));
        })
        .finally(() => setLoading(false));
    };

    const onSuccess = () => {
        setPage(1);
        setOpen(false);
        setPatients([]);
        increase()
    };

    const increasePage = () => setPage((prev) => prev + 1);

    const reset = () => {
        setSearchValue("");
        setPage(1);
        setPatients([]);
    };
    
    useEffect(() => {
      getPatients()
    }, [page, debouncedSearch, value]);


  return {
    open,
    error,
    loading,
    patients,
    pagination,
    searchValue,
    setSearchValue,
    increasePage,
    onSuccess,
    setOpen,
    reset,
  };
}
