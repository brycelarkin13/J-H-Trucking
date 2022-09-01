import React from "react";
import Banner from '../../assets/photos/j&h-photos/header1.png';

function Home() {
    return(
        <section>
            <img className='imgHome' src={Banner} alt="details"></img>
            <h1 className="pageTitle">Welcome to J&H Trucking</h1>
        </section>
    )
};

export default Home;