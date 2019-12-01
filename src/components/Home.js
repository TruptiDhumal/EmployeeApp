import React from 'react';
import {NavLink} from 'react-router-dom';
import {ChangeTitleAction} from '../Actions/CommonActions';
import {connect} from 'react-redux';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            AppTitle: "Home"
        }
    }
    componentDidMount(){
        this.setState({
            AppTitle: "Home"
        });
        
        this.props.changeTitle("Home");
    }
    render(){
        console.log(this.props);
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <button className='btn btn-dark m-3'><NavLink className="text-white" to={'/notfound'} >Display Not Found</NavLink></button> 
                        <button className='btn btn-dark'><NavLink className="text-white" to={'/employeelist'} >Display All Employees</NavLink></button>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return {
        state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeTitle : (title) => dispatch(ChangeTitleAction(title))        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);