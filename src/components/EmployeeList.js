import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {ChangeTitleAction} from '../Actions/CommonActions'

class EmployeeList extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            employeelist : this.props.employeelist,
            AppTitle: "Employee List"
        }
    }
    componentDidMount(){
        this.setState({
            AppTitle:"Employee's List"
        });

        this.props.changeTitle("Employee List");
    }
    render(){
        console.log(this.state);
        return (
            <div>
                <table className="table table-striped table-hover">
                <thead className='bg-secondary text-white'>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Emploee Names</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.employeelist.map((emp)=>{
                    return (
                        <tr key={emp.id}>
                            <th>{emp.id}</th>
                            <td><NavLink to={`/employeedetails/${emp.id}`} key={emp.id}>{emp.firstname} {emp.LastName}</NavLink></td>
                        </tr>
                    )
                })}
                </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        employeelist : state.employeelist,
        AppTitle: state.AppTitle
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeTitle : (title) => dispatch(ChangeTitleAction(title))        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EmployeeList);