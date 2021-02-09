import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import Cards from '../Card/Cards'
import Footer from '../Footer/Footer';

import '../../App.css'

function Home () {
    return(
        <React.Fragment>
            <HeroSection />
            <Cards />
            <Footer />
        </React.Fragment>
    )
}

export default Home