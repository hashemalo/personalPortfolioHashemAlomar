import './index.scss';
import { Link, NavLink} from 'react-router-dom';
import LogoH from '../../assets/images/logo-s.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoH} alt="logo"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>

            <NavLink exact="true" activeclassname="active"className="projects-link" to="/projects">
                <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>

        </nav> 
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/hashem-alomar-007182257/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
                
            </li>
            
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/hashemalo'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
            
        </ul>
    </div>
)

export default Sidebar