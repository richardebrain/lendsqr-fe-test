import { formatNumbers } from '@/hooks/phoneNumber'
import { AlluserProps } from '@/utils/types'
import './generalDetails.styles.scss'

type Props = {
  userDetails?: AlluserProps |null
}
const GeneralDetails = ({ userDetails }: Props) => {
  const currency = userDetails?.profile.currency
  return (
    <div className='general_details_container'>
      {/* personal information */}
      <div className="general_details details_personal">
        <h4>Personal Information</h4>
        <div className="details_personal_info">
          <div className="info_item">
            <span className='item_title'>full name</span>
            <span className='item_data'>{userDetails?.profile.firstName} {userDetails?.profile.lastName}</span>
          </div>
          <div className="info_item">
            <span className='item_title'>phone number</span>
            <span className='item_data'>{formatNumbers(userDetails?.profile.phoneNumber!)}</span>
          </div>

          <div className="info_item">
            <span className='item_title title_email'>email</span>
            <span className='item_data'>{userDetails?.email}</span>
          </div>
          <div className="info_item">
            <span className='item_title'>bvn</span>
            <span className='item_data'>{userDetails?.profile.bvn}</span>
          </div>
          <div className="info_item">
            <span className='item_title'>gender</span>
            <span className='item_data'>{userDetails?.profile.gender}</span>
          </div>
          <div className="info_item">
            <span className='item_title'>marital status</span>
            <span className='item_data'>Single</span>
          </div>
          <div className="info_item">
            <span className='item_title'>children</span>
            <span className='item_data'>None</span>
          </div>
          <div className="info_item">
            <span className='item_title'>type of residence</span>
            <span className='item_data'>Parent's Apartment</span>
          </div>
        </div>
      </div>
      {/* Education and employment */}

      <div className="general_details details_edu_emp">
        <h4>Education And Employment</h4>
        <div className="details_personal_info">
          <div className="info_item">
            <span className='item_title'>level of education</span>
            <span className='item_data'>{userDetails?.education.level}</span>
          </div>
          <div className="info_item">
            <span className='item_title'>employment status</span>
            <span className='item_data'>{userDetails?.education.employmentStatus}</span>
          </div>

          <div className="info_item">
            <span className='item_title '>sector of employment</span>
            <span className='item_data'>{userDetails?.education.sector}</span>
          </div>
          <div className="info_item">
            <span className='item_title'>duration of employment</span>
            <span className='item_data'>{userDetails?.education.duration}</span>
          </div>
          <div className="info_item">
            <span className='item_title'>office email</span>
            <span className='item_data'>{userDetails?.education.officeEmail}</span>
          </div>
          <div className="info_item">
            <span className='item_title'>monthly income</span>
            <span className='item_data'>{currency} {userDetails?.education.monthlyIncome[0]} - {currency} {userDetails?.education.monthlyIncome[0]}</span>
          </div>
          <div className="info_item">
            <span className='item_title'>loan repayment</span>
            <span className='item_data'>{currency} {userDetails?.education.loanRepayment}</span>
          </div>
          <div className="info_item">
            <span className='item_title'>type of residence</span>
            <span className='item_data'>Parent's APartment</span>
          </div>
        </div>

      </div>
      {/* socials */}
      <div className="general_details details_social">
        <h4>Socials</h4>
        <div className="details_personal_info">
          <div className="info_item">
            <span className='item_title'>twitter</span>
            <span className='item_data'>{userDetails?.socials?.twitter}</span>
          </div>
          <div className="info_item">
            <span className='item_title'>facebook</span>
            <span className='item_data'>{userDetails?.socials?.facebook}</span>
          </div>

          <div className="info_item">
            <span className='item_title '>instagram</span>
            <span className='item_data'>{userDetails?.socials?.instagram}</span>
          </div>
        </div>

      </div>
      {/* guarantor */}
      <div className="general_details details_guarantor">
        <h4>Guarantor</h4>
        <div className="details_personal_info">
          <div className="info_item">
            <span className='item_title'>full name</span>
            <span className='item_data'>{userDetails?.guarantor?.firstName} {userDetails?.guarantor?.lastName}</span>
          </div>
          <div className="info_item">
            <span className='item_title'>phone number</span>
            <span className='item_data'>{formatNumbers(userDetails?.guarantor.phoneNumber!)}</span>
          </div>

          <div className="info_item">
            <span className='item_title '> address</span>
            <span className='item_data'>{userDetails?.guarantor.address}</span>
          </div>
          <div className="info_item">
            <span className='item_title '>relationship</span>
            <span className='item_data'>{userDetails?.guarantor.gender === userDetails?.profile.gender ? 'Family' : 'Spouse'} </span>
          </div>
        </div>

      </div>
      {/* others */}
      <div className="general_details details_other">
        <div className="details_personal_info">
          <div className="info_item">
            <span className='item_title'>full name</span>
            <span className='item_data'>{userDetails?.guarantor?.firstName} {userDetails?.guarantor?.lastName}</span>
          </div>
          <div className="info_item">
            <span className='item_title'>phone number</span>
            <span className='item_data'>{formatNumbers(userDetails?.guarantor.phoneNumber!)}</span>
          </div>

          <div className="info_item">
            <span className='item_title '> address</span>
            <span className='item_data'>{userDetails?.guarantor.address}</span>
          </div>
          <div className="info_item">
            <span className='item_title '>relationship</span>
            <span className='item_data'>{userDetails?.guarantor.gender === userDetails?.profile.gender ? 'Family' : 'Spouse'} </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneralDetails