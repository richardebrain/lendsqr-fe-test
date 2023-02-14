import React from 'react'
import './customDropdown.styles.scss'
type CustomDropdownProps = {
    label: string
    options: { value: string, label: string }[],
    handleChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
    name?: string
    value?: string
}
const CustomDropdown = ({ label, options, handleChange ,name,value}: CustomDropdownProps) => {

    return (
        <div className='input_container'>
            {
                <label className='label'>{label}</label>
            }
            <div className='select_container'>
                <select
                    className='select'
                    onChange={handleChange}
                    value={value}
                    name={name}
                >
                    <option value="">Select</option>

                    {
                        options.map((option) => (
                            <option value={option.value} key={option.label}>{option.label}</option>
                        )
                        )
                    }
                </select>

            </div>
        </div>
    )
}

export default CustomDropdown