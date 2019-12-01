import React from 'react';
import {NavLink} from 'react-router-dom';
import HomeImg from '../images/home.jpg'

class Dashboard extends React.Component {
    render(){
        return(
            <div className="text-center bg-color ">
                <button className='btn-dark homelink'><NavLink className="text-white" to={'/home'} exact> Go To Home </NavLink></button>
            </div>
        );
    }
}

export default Dashboard;