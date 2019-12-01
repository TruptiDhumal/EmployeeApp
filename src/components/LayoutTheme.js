import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';
import {ChangeTitleAction} from '../Actions/CommonActions'
 
class LayoutTheme extends React.Component {
    constructor(props){
        super(props);
        this.goToBackUrl = this.goToBackUrl.bind(this);
    }
    
    goToBackUrl(){   
        const pageTitle = this.props.AppTitle;
        switch(pageTitle){
            case 'Home':
                    this.props.changeTitle('WelCome To Employees Portal');
                    this.props.history.push(`/dashboard`);
            return ''
            case 'Employee List':
                    this.props.history.push(`/home`);
            return ''
            case 'Employee Details':
                    this.props.history.push(`/employeelist`);
            return ''
            case 'Employee Resume':
                    this.props.history.push(`/employeedetails/${this.props.id}`);
            return ''
            default:
                return ''
        }
    }
    render(){
    return (
       <div className="bg-dark">
            <div className="jumbotron text-center bgBlack text-white shadow mb-0 p-4">
                <div>
                    <h1>{this.props.AppTitle}</h1>
                    {(this.props.isWelcomePage)? <p className="text-white-50">....Inside Employees Portal....</p> : null}
                    {(this.props.isWelcomePage)?<span className="material-icons float-left cursorPointer text-white font-weight-bolder" onClick={this.goToBackUrl}>arrow_back</span> : null}
                    
                </div>
                
            </div>
       </div>
    );
    }
}

const mapStateToProps = (state) =>{
    return {
        AppTitle: state.AppTitle,
        isWelcomePage : state.isWelcomePage,
        id : state.current_emp_id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeTitle : (title) => dispatch(ChangeTitleAction(title))     
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(LayoutTheme));