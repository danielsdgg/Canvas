import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admindashboard from '../pages/Admin/Admindashboard'
import Calendar from "../components/Calendar";
import Inbox from "../components/Inbox";
import History from "../components/History";
import Help from "../components/Help";
import Account from "../pages/Shared/Accounts";

const Adminroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/admin-dashboard' element={<Admindashboard/>} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/accounts" element={<Account />} />
            <Route path="/history" element={<History />} />
            <Route path="/help" element={<Help />} />
            <Route path="/calendar" element={<Calendar />} />
        </Routes>
    </div>
  )
}

export default Adminroutes