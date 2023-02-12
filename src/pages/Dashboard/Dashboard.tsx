import { IconColon } from '@/components/icons/icon'
import Paginate from '@/components/paginate/Paginate'
import TableDashboard from '@/components/TableDashboard/TableDashboard'
import UsersCard from '@/components/usersCard/usersCard'

import { tableHeader, usersCard } from '@/utils/constant'
import { AlluserProps } from '@/utils/types'
import  { useEffect, useState } from 'react'
import './dashboard.styles.scss'

const Dashboard = () => {
  const [users, setUsers] = useState<AlluserProps[]>([])
  const [perPage, setPerPage] = useState(9)
  const [currentPage, setCurrentPage] = useState(1)
  const totalPage = Math.ceil(users.length / perPage)

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
      const data = await res.json()
      setUsers(data)
    }
    fetchUsers()
  }, [])


  const sortByDate = users.sort((a, b) => (
    new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  ))
  const indexOfLastUser = currentPage * perPage;
  const indexOfFirstUser = indexOfLastUser - perPage;
  const currentUsers = sortByDate.slice(indexOfFirstUser, indexOfLastUser);


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
                <TableDashboard user={user} key={user.id}/>
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