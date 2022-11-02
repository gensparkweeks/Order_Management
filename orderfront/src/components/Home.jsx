import React from 'react';
import {FaCalendarAlt} from 'react-icons/fa'

const Home = () => {
    return (
        <div className='home'>
            <div>
                <FaCalendarAlt style={{color: 'red', fontSize: '50px'}}/>
            </div>
             <h1>Welcome to Order Management APP</h1>
        </div>
    );
}

export default Home;
