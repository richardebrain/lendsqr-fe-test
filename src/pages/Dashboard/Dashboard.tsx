import FilterUser from '@/components/FilterUser/FilterUser'
import Paginate from '@/components/paginate/Paginate'
import TableDashboard from '@/components/TableDashboard/TableDashboard'
import UsersCard from '@/components/usersCard/usersCard'
import { useAppContext } from '@/context/MainContext'
import { useUserContext } from '@/context/userContext'
import { filteredDate, filteredDate2, } from '@/hooks/dateHook'
import { useNavigate } from 'react-router-dom'
import { tableHeader, usersCard } from '@/utils/constant'
import { useEffect, useState } from 'react'
import './dashboard.styles.scss'
import TableHeader from '@/components/TableHeader/TableHeader'

const Dashboard = () => {
  const [perPage] = useState(9)
  const navigate = useNavigate()
  const { users, getUsers, loading, filterForm, setFilterForm, setFilterResult, filterResult } = useUserContext()
  const { isAdmin } = useAppContext()

  useEffect(() => {
    if (!isAdmin) {
      navigate('/')
    }
  }, [isAdmin])
  const [currentPage, setCurrentPage] = useState(1)
  const totalPage = Math.ceil(users.length / perPage);

  const sortByDate = users.sort((a, b) => (
    new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  ))
  const indexOfLastUser = currentPage * perPage;
  const indexOfFirstUser = indexOfLastUser - perPage;
  const currentUsers = sortByDate.slice(indexOfFirstUser, indexOfLastUser);
  const [showFilter, setShowFilter] = useState(false)

  const handleFilter = () => {
    if (filterForm.status.trim() === '' || filterForm.date === null || filterForm.username.trim() === '' || filterForm.email.trim() === '' || filterForm.phoneNumber.trim() === '' || filterForm.organisation.trim() === '') {
      alert('Please fill in the form')
      return
    }
    const findUser = users.find(({ userName, email, profile: { phoneNumber }, createdAt, orgName, status }) => (
      userName.toLowerCase().includes(filterForm.username.toLowerCase()) && phoneNumber.toLowerCase().includes(filterForm.phoneNumber.toLowerCase()) && email.toLowerCase().includes(filterForm.email.toLowerCase()) && orgName.toLowerCase().includes(filterForm.organisation.toLowerCase()) && filteredDate2(createdAt).includes(filteredDate(filterForm.date))

    ))
    if (findUser) {
      setFilterResult([findUser])
      setFilterForm({
        organisation: '',
        status: '',
        username: '',
        email: '',
        date: null,
        phoneNumber: '',
      })

    }

  }


  useEffect(() => {
    getUsers()
  }, [])

  if (loading && users.length === 0) {
    return <h1>Loading...</h1>
  }


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
                  <TableHeader header={header} key={header.title} showFilter={showFilter} setShowFilter={setShowFilter}/>
                 
                ))
              }

            </tr>
          </thead>
          <tbody className='table_body'>
            {
              filterResult.length > 0 ? filterResult.map((user) => (
                <TableDashboard user={user} key={user.id} />
              )) :
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