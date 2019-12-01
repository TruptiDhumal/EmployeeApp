import React from 'react';
import {NavLink} from 'react-router-dom';
import HomeImg from '../images/photo.jpg'

var sectionStyle = {
    width: "100%",
    backgroundImage: `url(${HomeImg})`
  };
class Dashboard extends React.Component {
    render(){
        return(
            <div className="text-center bg-color bg" style={ sectionStyle }>
                <button className='homelink bgBlackwithOpacity'> <NavLink className="text-white" to={'/home'} exact> <i className='fas fa-home text-white'></i>   Go To Home </NavLink></button>
            </div>
        );
    }
}

export default Dashboard;