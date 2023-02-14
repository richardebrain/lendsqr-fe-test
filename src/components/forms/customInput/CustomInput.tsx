import React from 'react'
import './customInput.styles.scss'

type InputProps = {
    Icon?: React.FC<React.SVGProps<SVGSVGElement>>
    label: string
    placeholder: string
    name?: string
    value?: string
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void


}
const CustomInput = ({ Icon, label, placeholder, name, value, handleChange }: InputProps) => {
    return (
        <div className='input_container'>
            {
                label && <label className='label'>{label}</label>
            }
            <input
                type="text"
                className='input_'
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={handleChange}

            />
            {Icon && <div className='icon'>
                <Icon />
            </div>}
        </div>
    )
}

export default CustomInput