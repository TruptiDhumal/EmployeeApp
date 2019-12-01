import React from 'react';
import {BrowserRouter , Route , Switch } from  'react-router-dom';
import Dashboard from '../components/Dashboard';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import EmployeeList from '../components/EmployeeList';
import EmployeeDetails from '../components/EmployeeDetails';
import FlipToResume from '../components/FlipToResume';
import LayoutTheme from '../components/LayoutTheme';

const AppRouter = ()=> {
    return (
        <BrowserRouter>
            <div>
                <LayoutTheme/>
                <Switch>
                    <Route path='/' component={Dashboard} exact={true}/>
                    <Route path='/dashboard' component={Dashboard} exact={true}/>
                    <Route path='/home' component={Home} exact={true}/>
                    <Route path='/employeelist' component={EmployeeList} exact={true}/>
                    <Route path={`/employeedetails/:id`} component={EmployeeDetails} exact={true}/>
                    <Route path={`/fliptoresume/:id`} component={FlipToResume} exact={true}/>
                    <Route path={'/notfound'} component={NotFound} exact={true}/>
                    <Route path='/LayoutTheme' component={LayoutTheme} exact={true}/>
                    <Route component={NotFound} exact={true}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;