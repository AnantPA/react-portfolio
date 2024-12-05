import React, { useEffect } from 'react'
import ROUTE_URLS, { BASE_URL } from './config/routes'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import AppLayout from './config/Layouts/AppLayout'
import Home from './pages/Home/Home'
import { AppProvider } from './context/AppContext'
import ContactUs from './pages/Contact/ContactUs'
import PagesLayout from './config/Layouts/PagesLayout'
import PortfolioList from './pages/Portfolio/PortfolioList'
import About from './pages/About/About'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    const applyStyles = (selector, styleProp, attr) => {
      document?.querySelectorAll(selector)?.forEach(el => {
        const attrValue = el.getAttribute(attr);
        if (attrValue) el.style[styleProp] = attr === 'data-background' ? `url(${attrValue})` : attrValue;
      });
    };
    applyStyles('[data-background]', 'backgroundImage', 'data-background');
    applyStyles('[data-width]', 'width', 'data-width');
    applyStyles('[data-bg-color]', 'backgroundColor', 'data-bg-color');
  }, [location]);

  return (
    <>
      <Analytics />
      <SpeedInsights />
      <AppProvider>
        <Routes>
          <Route path={BASE_URL} element={<AppLayout />}>

            <Route path={ROUTE_URLS.HOME} element={<Home />} />

          </Route>
          <Route path={BASE_URL} element={<PagesLayout />}>
            <Route path={ROUTE_URLS.CONTACT} element={<ContactUs />} />
            <Route path={ROUTE_URLS.PORT_LIST} element={<PortfolioList />} />
            <Route path={ROUTE_URLS.ABOUT} element={<About />} />
          </Route>

          <Route path='*' element={<Navigate to={ROUTE_URLS.HOME} />} />
        </Routes>
      </AppProvider>
    </>
  )
}

export default App;