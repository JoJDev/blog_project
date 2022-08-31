import { NavLink } from 'react-router-dom'
import './Nav.scss';

function Nav(props) {

    return (
        <nav>
            <input type={'checkbox'} id={"check"} />
            <label htmlFor={"check"} className={"bar-btn"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className={"bi bi-list"} viewBox="0 0 16 16">
                    <path fillRule={"evenodd"} d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </label>
            <ul>
                <li>
                    <NavLink to="/login">Log in</NavLink>
                </li>
                <li>
                    <NavLink to="/signin">Sign in</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;