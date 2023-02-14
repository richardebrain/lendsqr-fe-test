import React, { useState } from 'react'
import './datePicker.styles.scss'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { IconCalendar } from '@/components/icons/icon';

type Props = {
  label?: string
  placeholder?: string
  name?: string
  value?: Date
  handleDate?: (date: Date) => void
}

const CustomDatePicker = ({ label, placeholder, handleDate, name, value }: Props) => {

  return (
    <div className='input_container'>

      {
        label && <label className='label'>{label}</label>
      }
      <div className='date_container'>

        <DatePicker
          selected={value}
          onChange={(date: Date) => handleDate && handleDate(date)}
          placeholderText={placeholder}
          dateFormat='MM/dd/yyyy '
          className='date_picker'
          name={name}
        />
        <IconCalendar className='icon' />
      </div>

    </div>

  )
}

export default CustomDatePicker