
const ChangeTitleAction = (title) => {
     return {
         type : 'CHANGE_TITLE',
         title
     }
}

const setCurrentEmpAction = (id)=>{
    return {
        type: 'SET_CURRENT_EMPID',
        id
    }
}

export {setCurrentEmpAction, ChangeTitleAction}