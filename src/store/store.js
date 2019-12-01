import {createStore} from 'redux';
import EmployeeReducer from '../reducers/EmployeeReducer';
export default () =>
{
    const store = createStore(EmployeeReducer);
    return store;
}