import React from 'react'
import "./Card.css"
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function Card({ src, title, description, price }) {

    const history = useHistory();

    return (
        <div className="card">
            <img src={src} alt="card image" />
            <div className="card__info">
                <h1>{title}</h1>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
            <Button className="card__button"
                onClick={() => history.push('/search')}
                variant='outlined'>Zimmer ansehen
                </Button>
        </div>
    )
}

export default Card
