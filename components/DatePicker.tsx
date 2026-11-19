import { styles } from '@/styles'
import React, { Dispatch, useState } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import DateTimePicker from "@react-native-community/datetimepicker";

interface Props {
  date: Date,
  setDate: Dispatch<React.SetStateAction<Date>>
  display? : boolean
}

export default ({ date, setDate, display }: Props) => {
  const [show, setShow] = useState(false)

  return (
    <>
      <TouchableOpacity style = {[styles.buttonOutline]} onPress={() => setShow(true)}>
        <Text style={[styles.buttonTextOutline, styles.p]}>
          { 
            !display ?
            date.toDateString() :
            "--/--/----"
          }
        </Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShow(false)
            if (selectedDate) {
              setDate(selectedDate)
            }
          }}
        />
      )}
    </>
  )
}
