import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {ChangeTitleAction, setCurrentEmpAction} from '../Actions/CommonActions';
import FLogo from '../images/FemaleProfileIcon.png';
import MLogo from '../images/MaleProfileIcon.png';

class EmployeeDetails extends React.Component {
    constructor(props){
        super(props);   
        this.state ={
            empObj : this.props.employeelist[0]
        }
    }
    componentDidMount(){
        this.props.changeTitle("Employee Details");
        this.props.setCurEmpId(this.state.empObj.id);
    }
    render(){
        const empObj = this.state.empObj;
        return (
            <div className="card text-center content-center display-block">   
                <img className="card-img-top" src={empObj.gender == 'F' ? FLogo : MLogo} alt="Card image"/>
                <div className="card-body">     
                    <h2 className="card-title">{empObj.firstname} {empObj.LastName}</h2>     
                    <p className="card-text">
                        <label className='text-bold'>{empObj.Address}</label>
                    </p> 
                    <p className="card-text">
                        {empObj.city}, {empObj.pincode}, {empObj.Country}
                    </p> 
                    <p className="card-text">
                        <label> {empObj.contact}</label>
                    </p>     
                    <NavLink className='btn btn-secondary text-white' to={`/fliptoresume/${empObj.id}`}>Flip to resume</NavLink>
                </div>
            </div>
        );
    }
} 

const mapStateToProps = (state , ownProps) =>
{
    console.log(ownProps);
    return {
        employeelist : state.employeelist.filter((emp) => emp.id == ownProps.match.params.id)
        }
}

const mapDispatchToProps = dispatch => {
    return {
        changeTitle : (title) => dispatch(ChangeTitleAction(title)),
        setCurEmpId : (empid) => dispatch(setCurrentEmpAction(empid))     
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EmployeeDetails);