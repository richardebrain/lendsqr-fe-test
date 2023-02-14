import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import CustomDropdown from '../forms/CustomDropdown/CustomDropdown'
import CustomInput from '../forms/customInput/CustomInput'
import CustomDatePicker from '../forms/datePicker/datePicker'
import DatePicker from '../forms/datePicker/datePicker'
import './filterUser.styles.scss'
import { useAppContext } from '@/context/MainContext'
import { useUserContext } from '@/context/userContext'
import { formattedDate } from '@/hooks/dateHook'

type Props = {
  handleFilter: () => void
}


const FilterUser = ({ handleFilter }: Props) => {
  const { handleDateChange, handleChanges, filterForm, handleResets, users } = useUserContext()

  const handleDate = (date: Date | null) => {
    handleDateChange(date)
  }
  const handleChange = (e: any) => {
    handleChanges(e)
  }
  const handleReset = () => {
    handleResets()

  }
  const returnOrg = () => { 
    const orgs = users.map((user) => {
      return user.orgName
    })
    const uniqueOrgs = [...new Set(orgs)]
    const orgOptions = uniqueOrgs.map((org) => {
      return { label: org, value: org }
    })
    return orgOptions
  }
const statusOptions = [
  {
    label:'Activated',
    value:'isActivated'
  },
  {
    label:'BlackListed',
    value:'isBlackListed'
  },
  {
    label:'Activated Pending',
    value:'isActivatedPending'
  },
  {
    label:'BlackListed Pending',
    value:'isBlackListedPending'
  }
]
  return (
    <form className='filter_container' >
      <div className="content">
        <CustomDropdown
          label={'Organisation'}
          options={returnOrg()}
          handleChange={handleChange}
          name='organisation'
          value={filterForm.organisation}
        />

      </div>
      <div className="content">
        <CustomInput
          label='Username'
          placeholder={'User'}
          name='username'
          handleChange={handleChange}
          value={filterForm.username}
        />

      </div>
      <div className="content">
        <CustomInput
          label='Email'
          placeholder={'Email'}
          name='email'
          handleChange={handleChange}
          value={filterForm.email}
        />

      </div>
      <div className="content">
        <CustomDatePicker
          label='Date'
          placeholder={'Date'}
          name='date'
          handleDate={handleDate}
          value={filterForm.date!}

        />
      </div>
      <div className="content">
        <CustomInput
          label='Phone Number'
          placeholder={'Phone Number'}
          name='phoneNumber'
          handleChange={handleChange}
          value={filterForm.phoneNumber}

        />

      </div>
      <div className="content">
        <CustomDropdown
          label={'Status'}
          options={statusOptions}
          name='status'
          handleChange={handleChange}
          value={filterForm.status}
        />

      </div>
      <div className="content btns">
        <CustomButton reset={true} type='reset' handleClick={handleReset}> Reset</CustomButton>
        <CustomButton filter={true} type='button' handleClick={handleFilter}> Filter</CustomButton>

      </div>

    </form>
  )
}

export default FilterUser