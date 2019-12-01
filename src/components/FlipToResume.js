import React from 'react';
import ResumeInfo from '../components/ResumeInfo';
import ResumeNotes from '../components/ResumeNotes';
import ResumeProjects from './ResumeProjects';
import ResumeHobbies from '../components/ResumeHobbies';
import {BrowserRouter,Route ,NavLink ,Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {ChangeTitleAction} from '../Actions/CommonActions'

class FlipToResume extends React.Component {
    componentDidMount(){
        this.props.changeTitle("Employee Resume");
    }
    render(){
        const empObj = this.props.employeelist[0];
        return(
           
            <BrowserRouter>
            <div>
                <div className='container mt-3'>
                    <ul className='nav nav-tabs'>
                        <li className='nav-item'>
                            <NavLink className='nav-link bg-gray' to={`/fliptoresume/resumeinfo/${empObj.id}`}>Info</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link bg-gray' to={`/fliptoresume/resumeprojects/${empObj.id}`}>PROJECTS</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link bg-gray' to={`/fliptoresume/resumehobbies/${empObj.id}`}>HOBBIES</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link bg-gray' to={`/fliptoresume/resumenotes/${empObj.id}`}>NOTES</NavLink>
                        </li>
                    </ul>
                </div>
                <Switch>
                    <Route path='/fliptoresume/:id' component={ResumeInfo} exact={true}></Route>
                    <Route path='/fliptoresume/resumeinfo/:id' component={ResumeInfo} exact={true}></Route>
                    <Route path='/fliptoresume/resumeprojects/:id' component={ResumeProjects} exact={true}></Route>
                    <Route path='/fliptoresume/resumehobbies/:id' component={ResumeHobbies} exact={true}></Route>
                    <Route path='/fliptoresume/resumenotes/:id' component={ResumeNotes} exact={true}></Route>
                </Switch>
            </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state , ownProps) =>
{
    return {
        employeelist : state.employeelist.filter((emp) => emp.id == ownProps.match.params.id)
        }
}
const mapDispatchToProps = dispatch => {
    return {
        changeTitle : (title) => dispatch(ChangeTitleAction(title))        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FlipToResume);
