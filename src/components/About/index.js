import { useEffect, useState } from 'react'
import {
  faJava,
  faGitAlt,
  faChrome,
  faJsSquare,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import { faComputer } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss'
import { Helmet } from 'react-helmet'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
    <Helmet>
      <title>HA - About</title>
      <meta name="description" content="About me!" />
    </Helmet>
      <div className="container about-page">
        <div className="text-zone">
          <h1 class="unselectable">
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p class="unselectable">
            I am a Computer Science and Mathematics major at the University of Maryland in College Park.
            I am thoroughly fascinated by machine learning and AI and I hope to be a pioneer in the field
            in the future.
          </p>
          <p align="LEFT" class="unselectable">
            I am always looking for opportunities to advance my career and learn more. I have experience
            working with Java, Python, HTML5, & C++. I am currently interning at Boodle AI as a software
            engineer, assisting with the implementation of Collaborative AI in education.
          </p>
          <p class="unselectable">
            In my freetime I like to rock climb, read, workout and watch basketball! I am originally from Jordan
            and a Shawarma sandwich will always fix all my problems.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="orange" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faChrome} color="red" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faComputer} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faPython} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About