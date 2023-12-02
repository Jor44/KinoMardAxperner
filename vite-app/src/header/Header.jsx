import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Search from '../Search'
import '../header/Header.scss'
import { faFilm, faCheck, faTimes, faInfoCircle, faL } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <div>
            <header>
                <div className="logo">
                    <div className='kinomard-logo'>
                        <FontAwesomeIcon className='movie-logo' icon={faFilm} />
                        <h1 className='kinomard'>KinoMard</h1>
                    </div>
                </div>
                <div class="search-bar">
                    <Search />
                    <NavLink to="/register" className="back-btn">
                        Գրանցվել
                    </NavLink>
                </div>
            </header>
        </div>
    )
}