import React from 'react'
import './Home.css'
import Banner from './Banner';
import Card from './Card';
import a1 from './img/a1.jpg';
import a2 from './img/a2.jpg';
import a3 from './img/a3.jpg';
import a4 from './img/a4.jpg';
import a5 from './img/a5.jpg';
import a6 from './img/a6.jpg';
import a7 from './img/a7.jpg';
import a8 from './img/a8.jpg';


function Home() {
    return (
        <div className="home">
            <Banner />
            <h1><br />Sehen Sie sich unsere acht preisgekrönten Hotels an</h1>


            <div className="home__section">
                <Card
                    src={a1}
                    title="Design Hotel Monte"
                    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                    price="Zimmer ab 59€ pro Nacht"
                />
                <Card
                    src={a2}
                    title="Design Hotel Strato"
                    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                    price="Zimmer ab 99€ pro Nacht"
                />
                <Card
                    src={a3}
                    title="Design Hotel Alpenrose"
                    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                    price="Zimmer ab 129€ pro Nacht"
                />
                <Card
                    src={a4}
                    title="Design Hotel Luxurio"
                    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                    price="Zimmer ab 55€ pro Nacht"
                />
            </div>
            <div className="home__section">
                <Card
                    src={a5}
                    title="Design Hotel Lorem"
                    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                    price="Zimmer ab 190€ pro Nacht"
                />
                <Card
                    src={a6}
                    title="Design Hotel Ipsum"
                    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                    price="Zimmer ab 350€ pro Nacht"
                />
                <Card
                    src={a7}
                    title="Design Hotel Alabastia"
                    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                    price="Zimmer ab 250€ pro Nacht"
                />
                <Card
                    src={a8}
                    title="Design Hotel Trench"
                    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                    price="Zimmer ab 99€ pro Nacht"
                />
            </div>

        </div>
    )
}

export default Home
