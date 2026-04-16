import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import AdminDashboard from '../Components/AdminDashboard'
import InventoryProduct from './InventoryProduct'

const Dashboard = () => {
  return (
    <div>
     <AdminDashboard />
     <InventoryProduct/>

    </div>
  )
}

export default Dashboard
