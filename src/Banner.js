import React, { useState } from 'react'
import './Banner.css'
import { Button } from '@material-ui/core';
import Search from './Search';
import { useHistory } from 'react-router-dom';

function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);


    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <Search />}

                <Button
                    onClick={() =>
                        setShowSearch(!showSearch)}
                    className="banner__searchButton"
                    variant="outlined">{showSearch ? "Zurück" : "Hier Ihren Wunschtermin eingeben"}
                </Button>

            </div>

            <div className="banner__info">
                <h1>Ihr Traumurlaub in Südtirol</h1>
                <h5>Top Lage und Luxus pur: <br />Buchen Sie jetzt Ihren Urlaub in einem unserer preisgekrönten Design Hotels.</h5>
                <Button
                    onClick={() => history.push('/search')}
                    variant='outlined'>Jetzt entdecken
                </Button>


            </div>
        </div>
    )
}

export default Banner
