import React from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTopIcon from '../../components/ScrollToTopIcon'
import PagesHeader from '../../components/OtherPages/PagesHeader'
import PagesFooter from '../../components/OtherPages/PagesFooter'

const PagesLayout = () => {
    return (
        <>
            <PagesHeader />
            <Outlet />
            <PagesFooter />
            <ScrollToTopIcon />
        </>
    )
}

export default PagesLayout