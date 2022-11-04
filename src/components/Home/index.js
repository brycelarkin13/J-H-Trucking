import React from 'react';
import truck from '../../assets/photos/truck.jpg';


function Home() {
    return(
        <section>
            <h1 className="homeTitle">J&H Trucking LLC</h1>
            <h2 className="homeHeading">Heading</h2>
            <p className="homeInfo">Qui in aliquip ex fugiat nulla. Qui quis voluptate cillum proident pariatur Lorem Lorem incididunt non eu officia ut ullamco fugiat. Reprehenderit commodo cillum Lorem eiusmod labore cillum sit. Est irure qui excepteur officia minim sint velit culpa. Duis ad fugiat Lorem quis id laborum enim cupidatat esse incididunt officia ad sint. Magna veniam eu aliquip quis tempor ipsum culpa eu. Ut in est exercitation proident nulla quis id dolore consectetur.
            </p>
            <img className="truckImg" src={truck} alt='truck'/>
            
            
        </section>
    )
};

export default Home;