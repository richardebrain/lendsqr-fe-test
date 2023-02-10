import React, { useEffect } from 'react'

const Dashboard = () => {
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
      const data = await res.json()
      console.log(data)
    }
    fetchUsers()
  }, [])

  return (
    <div>

    </div>
  )
}

export default Dashboard