import React from 'react';
import {NavLink} from 'react-router-dom';
import gif from "../images/404.gif";
import {ChangeTitleAction} from '../Actions/CommonActions';
import {connect} from 'react-redux';

class NotFound extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.changeTitle("WelCome To Employees Portal");
    }
    render(){
    return (
        <div className="row text-center">
            <div className="col-sm-12 col-xs-12" id="contents">
                <img src={gif} className="img-thumbnail" />
                <p>404 - Page Not Found</p>
                <NavLink to="/home" className="btn btn-outline-info btn-sm">Back To Home</NavLink>
            </div>
        </div>
    );
    }
};

const mapStateToProps = (state) =>
{
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        changeTitle : (title) => dispatch(ChangeTitleAction(title))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NotFound);


