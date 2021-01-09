import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function Header() {
    return (
        <div className="header">
            <Link to='/'>
                <img
                    className="header__icon"
                    src="https://fontmeme.com/permalink/210102/ecb9c7f8cdefaee078b1c0fd7535de43.png"
                    alt="headerlogo"
                />
            </Link>
            <div className="header__center">
                <input type="text" />
                <SearchIcon className="" />
            </div>

            <div className="header__right">
                <p>Anmelden</p>
                <ExpandMoreIcon />
                <LanguageIcon />
                <AccountCircleIcon />
            </div>

        </div>
    )
}

export default Header
