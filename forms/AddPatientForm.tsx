import Alert from '@/components/Alert'
import DropdownComponent from '@/components/Dropdown'
import { DIABETICS } from '@/constants'
import { HeartPlus, Send } from 'lucide-react-native'
import React from 'react'
import { ActivityIndicator,  ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../styles'
import useAddPatient from '@/hooks/useAddPatient'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

interface props{
    onSuccessCallback : ()=>void
}

export default function AddPatientForm({onSuccessCallback}:props){
    const {
        status,
        errors,
        loading,
        formData, 
        updateDiabeticTypes,
        handleSubmit,
        handleChange,
    } = useAddPatient(onSuccessCallback)
    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            enableOnAndroid={true}
        > 
            <ScrollView>
                <View style={[styles.flexColumn, { gap: 15, marginBottom: 15 }]}>
                    <View style={[styles.w100, styles.flexColumn, { gap: 5 }]}>
                        <Text style={[styles.h6]}>Diabetes Type</Text>
                        <DropdownComponent
                        data={DIABETICS}
                        value={formData.diabetic_type}
                        onChangeValue={updateDiabeticTypes}
                        Icon={HeartPlus}
                        error = {errors.diabetic_type.length !== 0}
                        />
                    </View>     

                    <View style={[styles.w100, styles.flexColumn, { gap: 5 }]}>
                        <Text style={[styles.h6]}>Full name</Text>
                        <TextInput
                        value={formData.fullname}
                        autoComplete="off"
                        style={[styles.defaultInput, errors.fullname.length !== 0 && styles.inputError]}
                        onChangeText={(e)=> handleChange("fullname", e)}
                        />
                        {errors.fullname.length > 0 && (
                        <Text style={[styles.p, styles.fontSemiBold, styles.text_danger]}>
                            {errors.fullname}
                        </Text>
                        )}
                    </View> 

                    <View style={[styles.w100, styles.flexColumn, { gap: 5 }]}>
                        <Text style={[styles.h6]}>Age</Text>
                        <TextInput
                        value={formData.age}
                        keyboardType="number-pad"
                        autoComplete="off"
                        style={[styles.defaultInput, errors.age.length !== 0 && styles.inputError]}
                        onChangeText={(e)=> handleChange("age", e)}
                        />
                        {errors.age.length > 0 && (
                        <Text style={[styles.p, styles.fontSemiBold, styles.text_danger]}>
                            {errors.age}
                        </Text>
                        )}
                    </View> 
                    
                    <View style={[styles.w100, styles.flexColumn, { gap: 5 }]}>
                        <Text style={[styles.h6]}>Mobile Number</Text>
                        <TextInput
                        keyboardType="number-pad"
                        value={formData.phone}
                        autoComplete="off"
                        style={[styles.defaultInput, errors.phone.length !== 0 && styles.inputError]}
                        onChangeText={(e)=> handleChange("phone", e)}
                        />
                        {errors.phone.length > 0 && (
                        <Text style={[styles.p, styles.fontSemiBold, styles.text_danger]}>
                            {errors.phone}
                        </Text>
                        )}
                    </View> 

                    <View style={[styles.w100, styles.flexColumn, { gap: 5 }]}>
                        <Text style={[styles.h6]}>Email</Text>
                        <TextInput
                        keyboardType={"email-address"}
                        value={formData.email}
                        autoComplete="off"
                        style={[styles.defaultInput, errors.email.length !== 0 && styles.inputError]}
                        onChangeText={(e)=> handleChange("email", e)}
                        />
                        {errors.email.length > 0 && (
                        <Text style={[styles.p, styles.fontSemiBold, styles.text_danger]}>
                            {errors.email}
                        </Text>
                        )}
                    </View> 
                    <View style = {[styles.flexRow, styles.justifyBetween]}>
                        <View style={[styles.w35, styles.flexColumn, { gap: 5 }]}>
                            <Text style={[styles.h6]}>HbA1c</Text>
                            <TextInput
                            keyboardType="number-pad"
                            value={formData.hba1c}
                            autoComplete="off"
                            style={[styles.defaultInput, errors.blood_sugar.length !== 0 && styles.inputError]}
                            onChangeText={(e)=> handleChange("hba1c", e)}
                            />
                            {errors.hba1c.length > 0 && (
                            <Text style={[styles.p, styles.fontSemiBold, styles.text_danger]}>
                                {errors.hba1c}
                            </Text>
                            )}
                        </View>
                        <View style={[styles.w35, styles.flexColumn, { gap: 5 }]}>
                            <Text style={[styles.h6]}>Sugar (mg/dL)</Text>
                            <TextInput
                            keyboardType="number-pad"
                            value={formData.blood_sugar}
                            autoComplete="off"
                            style={[styles.defaultInput, errors.blood_sugar.length !== 0 && styles.inputError]}
                            onChangeText={(e)=> handleChange("blood_sugar", e)}
                            />
                            {errors.blood_sugar.length > 0 && (
                            <Text style={[styles.p, styles.fontSemiBold, styles.text_danger]}>
                                {errors.blood_sugar}
                            </Text>
                            )}
                        </View>  
                    </View>

                    <View style={[styles.w100, styles.flexColumn, { gap: 5 }]}>
                        <Text style={[styles.h6]}>Pregnancy Status</Text>
                        <View style={[styles.flexRow, { gap: 20 }]}>
                        {["Yes", "No"].map((option) => (
                            <TouchableOpacity
                            key={option}
                            style={[
                                styles.flexRow,
                                { alignItems: "center", gap: 8 }
                            ]}
                            onPress={() => handleChange("pregnancy_status", option)}
                            >
                            <View
                                style={styles.radio}
                            >
                                {formData.pregnancy_status === option && (
                                <View
                                    style={styles.selectedRadio}
                                />
                                )}
                            </View>
                            <Text style={[styles.p]}>{option}</Text>
                            </TouchableOpacity>
                        ))}
                        </View>

                        {errors.pregnancy_status?.length > 0 && (
                        <Text style={[styles.p, styles.fontSemiBold, styles.text_danger]}>
                            {errors.pregnancy_status}
                        </Text>
                        )}
                    </View>
                    {
                        status.status.length > 0 &&
                        <Alert variant='success' message={status.status} /> 
                    }
                    {
                        status.error.length > 0 &&
                        <Alert variant={"danger"} message={status.error}/>
                    }

                    <TouchableOpacity onPress={handleSubmit} style={[styles.button, loading ? styles.bg_success_30 : styles.bg_success]} disabled={loading}>
                        <View style={[styles.w100, styles.centerItems, styles.flexRow, { gap: 10 }]}>
                        {loading ? (
                            <ActivityIndicator color={styles.bg_success.backgroundColor} size={15}/>
                        ) : (
                            <Send color={"white"} size={15}/>
                        )}
                        <Text style={[styles.h6, styles.text_white]}>Submit</Text>
                        </View> 
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAwareScrollView>
    )
}