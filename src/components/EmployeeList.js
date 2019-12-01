import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {ChangeTitleAction} from '../Actions/CommonActions';
import {setTextFilter} from '../Actions/EmpFilterActions'

class EmployeeList extends React.Component {
    constructor(props){
        super(props);
        this.getfilteredEmpList = this.getfilteredEmpList.bind(this);
        this.sorEmpByID = this.sorEmpByID.bind(this);
        this.state ={
            employeelist : this.props.employeelist,
            AppTitle: "Employee List", 
            isSorted : true 

        }
    }
    componentDidMount(){
        this.props.changeTitle("Employee List");
        this.setState({
            employeelist : this.props.employeelist.sort((a, b) => (a.id > b.id) ? 1 : -1),
            AppTitle: "Employee List", 
            isSorted : true 
        })
    }

    getfilteredEmpList(e){
            //this.props.getFilteredEmpList(e.target.value);
            const searchVal = e.target.value.toLocaleLowerCase();
            if(searchVal !='' & searchVal != undefined){
                this.setState({
                    employeelist : this.props.employeelist.filter(
                        (emp)=>
                        emp.firstname.toLocaleLowerCase().includes(searchVal) ||
                        emp.LastName.toLocaleLowerCase().includes(searchVal)),
                    AppTitle:"Employee's List"
                });
            }else{
                this.setState({
                    employeelist : this.props.employeelist,
                    AppTitle:"Employee's List"
                });
            }
            
    }

    sorEmpByID(e){
        const issortedvalue = this.state.isSorted;
        console.log(issortedvalue + "is sorted");
        if(issortedvalue){
            this.setState({
                employeelist : this.state.employeelist.sort((a, b) => (a.id < b.id) ? 1 : -1),
                AppTitle: "Employee List", 
                isSorted : false 
            })
        }else{
            this.setState({
                employeelist : this.state.employeelist.sort((a, b) => (a.id > b.id) ? 1 : -1),
                AppTitle: "Employee List", 
                isSorted : true 
            })
        }     
    }
    render(){
        
        return (
            <div>
            <div className="searchEmpContainer input-group">
                <input className="form-control" type="text" placeholder="Search Employee By name" onChange={this.getfilteredEmpList} aria-label="Search"/>
                <div className="input-group-append">
                    <button className="btn btn-secondary" type="button">
                    <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
            <div>
                <table className="table table-striped table-hover m10px">
                <thead className='bg-secondary text-white'>
                    <tr>
                    <th scope="col">#ID  <i className={this.state.isSorted ?'fa fa-caret-down sortarrow' :'fa fa-caret-up sortarrow'} onClick={this.sorEmpByID}></i></th>
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
        changeTitle : (title) => dispatch(ChangeTitleAction(title)) ,
        getFilteredEmpList : (value) => dispatch(setTextFilter(value))       
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EmployeeList);