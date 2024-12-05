import React from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTopIcon from '../../components/ScrollToTopIcon'
import PagesHeader from '../../components/OtherPages/PagesHeader'
import PagesFooter from '../../components/OtherPages/PagesFooter'
import PagesMobileMenu from '../../components/OtherPages/PagesMobileMenu'

const PagesLayout = () => {
    return (
        <>
            <PagesHeader />
            <PagesMobileMenu />
            <Outlet />
            <PagesFooter />
            <ScrollToTopIcon />
        </>
    )
}

export default PagesLayout