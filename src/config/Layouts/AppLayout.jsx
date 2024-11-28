import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ScrollToTopIcon from '../../components/ScrollToTopIcon'

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <ScrollToTopIcon />
        </>
    )
}

export default AppLayout