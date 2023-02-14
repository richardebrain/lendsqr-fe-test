import React from 'react'
import './customSearch.styles.scss'
type searchProps = {
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
    label?: string
}
const CustomSearch = ({ Icon, label }: searchProps) => {
    return (
        <div className='container'>
            <input type="text" className='input' placeholder='search for anything'/>
            {Icon && <div className='icon'>
                <Icon />
            </div>}
        </div>
    )
}
export default CustomSearch