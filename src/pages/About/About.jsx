import React from 'react'
import PagesBreadcrumb from '../../components/OtherPages/PagesBreadcrumb'
import AboutDetails from './AboutComponents/AboutDetails'
import AboutSkills from './AboutComponents/AboutSkills'
import AboutContact from './AboutComponents/AboutContact'
import ROUTE_URLS from '../../config/routes'

const About = () => {
    return (
        <>
            <PagesBreadcrumb
                title="About Me"
                metaTitle="I'm a passionate web developer with expertise in creating dynamic and user-friendly web experiences."
                link={ROUTE_URLS.CONTACT}
            />
            <main>
                <AboutDetails />
                <AboutSkills />
                <AboutContact />
            </main>
        </>
    )
}

export default About