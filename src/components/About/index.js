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

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am a Computer Science and Mathematics Major at the University of Maryland in college park.
            I am throughly fascinated by machine learning and AI and I hope to be a pioneer in the field
            in the future.
          </p>
          <p align="LEFT">
            I am always looking for opportunities to advance my career and learn more. I have experience
            working with Java, Python, HTML5, & some C++ I am currently on the Campus AI Leadership Council 
            for Boodlebox, working to advance Collaborative AI in education.
          </p>
          <p>
            In my freetime I like to Rock Climb, Read, Workout and watch Basketball! I am originally from Jordan
            and a Shawarma Sandwich will always fix all my problems.
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