import tableAPI from "../API/API";

const GET_USERS = 'GET_USERS'
const SEARCH = 'SEARCH'
const IS_LOAD = 'IS_LOAD'
const ADD_USER = 'ADD_USER'
const SELECT_TABLE_SIZE='SELECT_TABLE_SIZE'
const USER_INFO='USER_INFO'


let initialState = {
    isLoad: true,
    users: [],
    search: '',
    tableSize:0,
    userId:0,
    isShowUserInfo:false,
    pageSize:25,
    currentPage:0
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOAD: {
            return {
                ...state, isLoad: action.isLoad
            }
        }
        case GET_USERS: {
            return {
                ...state, users: [...action.users]
            }
        }
        case SEARCH: {
            return {
                ...state, search: action.search,currentPage:0
            }
        }
        case ADD_USER: {
            return {
                ...state,
                users:[{
                    id:action.id,
                    firstName:action.firstName,
                    lastName:action.lastName,
                    email:action.email,
                    phone:action.phone,
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

        case SELECT_TABLE_SIZE: {
            return {
                ...state, tableSize: action.size
            }
        }
        case USER_INFO: {
            return {
                ...state,
                userId:action.id,
                isShowUserInfo:action.isShowUserInfo
                }
            }

        default:
            return state

    }
}

export const isLoadAC = (isLoad) => ({type: IS_LOAD, isLoad});
export const getUsersAC = (users) => ({type: GET_USERS, users});
export const searchAC = (search) => ({type: SEARCH, search});
export const addUserAC = (id,firstName,lastName,email,phone) => ({type: ADD_USER, id,firstName,lastName,email,phone});
export const selectTableSizeAC = (size) => ({type: SELECT_TABLE_SIZE, size});
export const userInfoAC = (isShowUserInfo,id)=>({type:USER_INFO,isShowUserInfo,id})

export const getUsersThunk = (tableSize) => async (dispatch) => {
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
}


export default Reducer