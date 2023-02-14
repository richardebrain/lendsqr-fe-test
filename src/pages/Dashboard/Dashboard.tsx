import FilterUser from '@/components/FilterUser/FilterUser'
import { IconColon } from '@/components/icons/icon'
import Paginate from '@/components/paginate/Paginate'
import TableDashboard from '@/components/TableDashboard/TableDashboard'
import UsersCard from '@/components/usersCard/usersCard'
import { useUserContext } from '@/context/userContext'
import { filteredDate, filteredDate2, formattedDate, } from '@/hooks/dateHook'

import { tableHeader, usersCard } from '@/utils/constant'
import { AlluserProps } from '@/utils/types'
import { useEffect, useState } from 'react'
import './dashboard.styles.scss'

const Dashboard = () => {
  const [perPage] = useState(9)
  const { users, getUsers, loading, filterForm } = useUserContext()
  const [currentPage, setCurrentPage] = useState(1)
  const totalPage = Math.ceil(users.length / perPage);
  const [filterResult, setFilterResult] = useState<AlluserProps[]>([])

  const sortByDate = users.sort((a, b) => (
    new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  ))
  const indexOfLastUser = currentPage * perPage;
  const indexOfFirstUser = indexOfLastUser - perPage;
  const currentUsers = sortByDate.slice(indexOfFirstUser, indexOfLastUser);
  const [showFilter, setShowFilter] = useState(true)

  const handleFilter = () => {

    const findUser = users.find(({ userName, email, profile: { phoneNumber }, createdAt, orgName, status }) => (
      userName.toLowerCase().includes(filterForm.username.toLowerCase()) && phoneNumber.includes(filterForm.phoneNumber) && email.toLowerCase().includes(filterForm.email.toLowerCase()) && orgName.toLowerCase().includes(filterForm.organisation.toLowerCase()) && filteredDate2(createdAt).includes(filteredDate(filterForm.date)) && Object.keys(status).includes(filterForm.status)

    ))
    if (findUser) {
      setFilterResult([findUser])
    }

  }


  useEffect(() => {
    getUsers()
  }, [])

  if (loading && users.length === 0) {
    return <h1>Loading...</h1>
  }

  console.log(filterForm.status, 'filterForm.status')
  console.log(filterResult, 'filterResult')
  return (
    <div className='dashboard'>
      <h1 className='container_heading'>
        Users
      </h1>
      {/* card */}
      <div className='card_container'>
        {
          usersCard.map(card => (
            <UsersCard card={card} key={card.title} />
          ))


        }
      </div>
      {/* table */}
      <div className='card_table_container' style={{
        overflowX: 'auto'
      }}>
        {
          showFilter && <FilterUser handleFilter={handleFilter} />
        }
        <table className='card_table'>
          <thead className='table_head'>
            <tr className='head_row'>
              {
                tableHeader.map(header => (
                  <th key={header.title} className={`${header.title == 'UserName' || header.title == 'Organisation' ? 'same' : header.title == 'Email' ? 'email' : ''}`}>
                    <div className='th_child'>

                      {header.title.toUpperCase()} {<header.Icon className='icon' />}
                    </div>
                  </th>
                ))
              }

            </tr>
          </thead>
          <tbody className='table_body'>
            {
              currentUsers.map((user) => (
                <TableDashboard user={user} key={user.id} />
              ))
            }
          </tbody>
        </table>

      </div>
      {/* pagination */}
      <Paginate
        totalPages={totalPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        lastUserIndex={indexOfLastUser}
        numOfUsers={users.length}
      />


    </div>
  )
}

export default Dashboard