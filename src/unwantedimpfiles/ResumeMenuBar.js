import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'

class ResumeMenuBar extends React.Component {
    render(){
        const emp = this.props.employeelist[0];
    return (
        <div className='container mt-3'>
            <ul className='nav nav-tabs'>
                <li className='nav-item'>
                    <NavLink className='nav-link active' to={`/fliptoresume/resumeinfo/${emp.id}`}>Info</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link active' to={`/fliptoresume/resumeprojects/${emp.id}`}>PROJECTS</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link active' to={`/fliptoresume/resumehobbies/${emp.id}`}>HOBBIES</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link active' to={`/fliptoresume/resumenotes/${emp.id}`}>NOTES</NavLink>
                </li>
            </ul>
        </div> 
    )
    }
}

const mapStateToProps = (state , ownProps) =>
{
    return {
        employeelist : state.employeelist.filter((emp) => emp.id == ownProps.id)
        }
}
export default connect(mapStateToProps)(ResumeMenuBar);