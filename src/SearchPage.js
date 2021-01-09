import React from 'react'
import './SearchPage.css'
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult';
import b1 from './img/b1.jpg';
import b2 from './img/b2.jpg';
import b3 from './img/b3.jpg';
import b4 from './img/b4.jpg';
import b5 from './img/b5.jpg';


function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>82 freie Zimmer · 26. März bis 19. Mai · 2 Personen </p>
                <h1>Freie Zimmer</h1>
                <Button
                    variant="outlined">Hotels in der Nähe</Button>
                <Button
                    variant="outlined">Art des Zimmers</Button>
                <Button
                    variant="outlined">Preis</Button>
                <Button
                    variant="outlined">Stornierung</Button>
                <Button
                    variant="outlined">Mehr Filter</Button>
            </div>
            <SearchResult
                img={b5}
                location="Design Hotel Strato"
                title="VIP Suite"
                description="2 Gäste - 3 Nächte - 1 Zimmer - 1 Bett - Wifi - Frühstuck inbegriffen - Gratis Parkplatz"
                star={4.85}
                price="€ 250 / Nacht"
                total="€ 750 Gesamt"
            />
            <SearchResult
                img={b4}
                location="Design Hotel Alpenrose"
                title="Doppelzimmer Groß mit Ausblick"
                description="2 Gäste - 3 Nächte - 1 Zimmer - 1 Bett - Wifi - Frühstuck inbegriffen - Gratis Parkplatz"
                star={4.65}
                price="€ 120 / Nacht"
                total="€ 360 Gesamt"
            />
            <SearchResult
                img={b3}
                location="Design Hotel Monte"
                title="Doppelzimmer Wellness"
                description="2 Gäste - 3 Nächte - 1 Zimmer - 1 Bett - Wifi - Frühstuck inbegriffen - Gratis Parkplatz"
                star={4.55}
                price="€ 90 / Nacht"
                total="€ 270 Gesamt"
            />
            <SearchResult
                img={b2}
                location="Design Hotel Alabastia"
                title="Doppelzimmer Groß"
                description="2 Gäste - 3 Nächte - 1 Zimmer - 1 Bett - Wifi - Frühstuck inbegriffen - Gratis Parkplatz"
                star={4.45}
                price="€ 45 / Nacht"
                total="€ 135 Gesamt"
            />
            <SearchResult
                img={b1}
                location="Design Hotel Luxurio"
                title="Doppelzimmer Einfach"
                description="2 Gäste - 3 Nächte - 1 Zimmer - 1 Bett - Wifi - Frühstuck inbegriffen - Gratis Parkplatz"
                star={4.35}
                price="€ 35 / Nacht"
                total="€ 105 Gesamt"
            />
        </div>
    )
}

export default SearchPage
