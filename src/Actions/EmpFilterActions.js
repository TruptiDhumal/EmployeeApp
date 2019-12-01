// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_EMP
export const sortEmpList = (order = '') => ({
    type: 'SORT_EMP',
    order
});