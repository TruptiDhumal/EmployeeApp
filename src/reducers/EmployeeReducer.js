
const initialState = {
employeelist:[
        { id:1, firstname:'Trupti', LastName :"Kapare" , gender: 'F', Address:"207 Model Colony", city:'pune' , contact:9689692215 ,pincode :4565 , Country :'India'},
        { id:2, firstname:'Dhiraj', LastName :"Kapare" , gender: 'M', Address:"207 Model Colony", city:'pune' , contact:9689692215 ,pincode :4565 , Country :'India'},
        { id:3, firstname:'Akshay', LastName :"Shastrakar",gender: 'M',  Address:"207 Model Colony", city:'pune' , contact:9689692215 ,pincode :4565 , Country :'India'},
        { id:4, firstname:'Rohit', LastName :"Mamidwar" , gender: 'M', Address:"207 Model Colony", city:'pune' , contact:9689692215 ,pincode :4565 , Country :'India'},
        { id:6, firstname:'Rupali', LastName :"Firke" , gender: 'F', Address:"207 Model Colony", city:'pune' , contact:9689692215 ,pincode :4565 , Country :'India'}
    ],
AppTitle:'WelCome To Employees Portal',
isWelcomePage:false,
current_emp_id : 0,
resumelist :[
{
    id:1,
    info : 'Working at persistent 5 years of experience',
    project: '1. Lilly  2. WG',
    hobbies : 'writing',
    note : 'Participation in other events'
},
{
    id:2,
    info : 'Working at cognizant 5 years of experience',
    project: '1. Lilly  2. CGI',
    hobbies : 'writing',
    note : 'Participation in other events'
},
{
    id:3,
    info : 'Working at cognizant 5 years of experience',
    project: '1. Lilly  2. PRD',
    hobbies : 'writing',
    note : 'Participation in other events'
},
{
    id:4,
    info : 'Working at cognizant 5 years of experience',
    project: '1. Lilly  2. PRD',
    hobbies : 'writing',
    note : 'Participation in other events'
},
{
    id:6,
    info : 'Working at Zensar 5 years of experience',
    project: '1. Lilly  2. PRD',
    hobbies : 'writing',
    note : 'Participation in other events'
}
]
}
const EmployeeeReducer = (state = initialState, action) =>{

    switch(action.type){
        case 'CHANGE_TITLE' : 
            return {
                employeelist : state.employeelist,
                AppTitle : action.title,
                resumelist : state.resumelist,
                isWelcomePage : (action.title != "WelCome To Employees Portal"),
                current_emp_id : state.current_emp_id
            }
        case 'SET_CURRENT_EMPID':
            return{
                employeelist : state.employeelist,
                AppTitle : state.AppTitle,
                resumelist : state.resumelist,
                isWelcomePage : (action.title != "WelCome To Employees Portal"),
                current_emp_id : action.id
            }
        default :
        return {
            employeelist : state.employeelist,
            AppTitle : state.AppTitle,
            resumelist : state.resumelist,
            isWelcomePage : state.isWelcomePage,
            current_emp_id : state.current_emp_id
        }
    }
    
}

export default EmployeeeReducer;
