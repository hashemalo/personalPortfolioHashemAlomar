import { Link } from "react-router-dom"
import './index.scss';
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import {Helmet} from 'react-helmet';

const Home = () => {
    const [letterClass, setLetterClass]= useState('text-animate')
    const nameArray= ['H', 'a', 's', 'h', 'e', 'm', ',']
    const jobArray= ['S', 'o', 'f', 't', 'w', 'a','r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r','.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <div className="container home-page">
            <Helmet>
                 <title>HA - Home</title>
                <meta name="description" content="My Home Page!" />
            </Helmet>
            <div className="text-zone" >
                <h1 class="unselectable">
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                <br /> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m‏‏‎ ‎</span>
                <AnimatedLetters letterClass={letterClass} 
                strArray={nameArray} 
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                 strArray={jobArray} 
                 idx={22} />
                </h1>
                <h2>Computer Science : ML + Mathematics 27' @ UMD, College Park</h2>
                <Link to="mailto:halomar@umd.edu" className='flatButton'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home