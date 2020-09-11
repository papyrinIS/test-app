import tableAPI from "../API/API";


const GET_USERS = 'GET_USERS'
const SEARCH = 'SEARCH'
const IS_LOAD = 'IS_LOAD'
const ADD_USER = 'ADD_USER'
const SELECT_TABLE_SIZE='SELECT_TABLE_SIZE'
const USER_INFO='USER_INFO'
const CURRENT_PAGE='CURRENT_PAGE'


export let initialState = {
    isLoad: true,
    users: [],
    search: '',
    tableSize:0,
    userId:0,
    isShowUserInfo:false,
    pageSize:25,
    currentPage:0,
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOAD: 
            return {
                ...state, isLoad: action.isLoad
            }
        
        case GET_USERS: 
            return {
                ...state, users: [...action.users]
            }
        
        case SEARCH: 
            return {
                ...state, 
                search: action.search
            }
        
        case CURRENT_PAGE:
            return{
                ...state,
                currentPage:action.currentPage
            }
        case ADD_USER:{ 
        const {id,firstName,lastName,email,phone}=action.formData
            return {
                ...state,
                users:[{
                    id:id,
                    firstName:firstName,
                    lastName:lastName,
                    email:email,
                    phone:phone,
                    address:{
                    streetAddress: '9792 Mattis Ct',
                    city: 'Waukesha',
                    state: 'WI',
                    zip: '22178'
                },
                    description: 'et lacus magna dolor...'
                }, ...state.users]
            }
        
}
        case SELECT_TABLE_SIZE: 
            return {
                ...state, tableSize: action.size
            }
        
        case USER_INFO: 
            return {
                ...state,
                userId:action.id,
                isShowUserInfo:action.isShowUserInfo
                }
            

        default:
            return state

    }
}

export const isLoadAC = (isLoad) => ({type: IS_LOAD, isLoad});
export const getUsersAC = (users) => ({type: GET_USERS, users});
export const searchAC = (search) => ({type: SEARCH, search});
export const addUserAC = (formData) => ({type: ADD_USER,formData});
export const selectTableSizeAC = (size) => ({type: SELECT_TABLE_SIZE, size});
export const userInfoAC = (isShowUserInfo,id)=>({type:USER_INFO,isShowUserInfo,id})
export const currentPageAC =(currentPage)=>({type:CURRENT_PAGE,currentPage})

export const getUsersThunk = (tableSize) => async (dispatch) => {
    try{
        dispatch(isLoadAC(true))
    if(tableSize===32) {
        let data = await tableAPI.getMiniTable()
        dispatch(getUsersAC(data.data))
        dispatch(isLoadAC(false))
    }else if(tableSize===100){
        let data = await tableAPI.getTable()
        dispatch(getUsersAC(data.data))
        dispatch(isLoadAC(false))
    }
}catch(err){
console.log('ошибка получения таблицы:' , err)
}
}


export default Reducer