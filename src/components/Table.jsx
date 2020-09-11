import React, {useState,useEffect} from "react";
import {TableRow} from "./TableRow";
import lodash from "lodash"
import sortDown from "../img/sortDown.png"
import sortUp from '../img/sortUp.svg'
import sortArrows from '../img/sortArrows.svg'
import styles from "../styles/Table.module.scss"
import {PreloaderPage} from "./Preloader";
import { useSelector,useDispatch } from "react-redux";
import {getUsersAC, getUsersThunk} from "../redux/reducer";


const Table = ({tablePage}) => {


    

const {users,isLoad,tableSize} =useSelector(state=>{
    return{
        users: state.Reducer.users,
        isLoad: state.Reducer.isLoad,
        tableSize: state.Reducer.tableSize
    }
})

const dispatch=useDispatch()

const getUsersSort = orderData => dispatch(getUsersAC(orderData))

    const [sort, setSort] = useState('desc');
    const [sortType, setSortType] = useState();
    
    const onSort = e => {
        sort === 'asc' ? setSort('desc') : setSort('asc')
        setSortType(e)
        let orderData = lodash.orderBy(users, e, sort)
        getUsersSort(orderData)
    }
    let tableUsers = []
    if (tablePage)
    { tableUsers = tablePage}



    useEffect(() => {
       dispatch( getUsersThunk(tableSize))
    }, [dispatch, tableSize])

    let TableRowElements = tableUsers.map(u =><TableRow key={u.id + u.phone} users={u}/>)

    if (isLoad) return <PreloaderPage/>
    else {
        return <div className={styles.container}>
            <table className={styles.table}>
            <thead>
            <tr>
                <th onClick={() => onSort("id")}>id
                    {sortType==='id'
                    ?<img height={12}  alt='arrowSort' src={sort==='asc'?sortDown:sortUp}/>
                    :<img height={12} alt='arrowSort' src={sortArrows}/>
                }
                </th>
                <th onClick={() => onSort("firstName")}>firstName
                {sortType==='firstName'
                    ?<img height={12} alt='arrowSort' src={sort==='asc'?sortDown:sortUp}/>
                    :<img height={12} alt='arrowSort' src={sortArrows}/>}
                </th>
                <th onClick={() => onSort("lastName")}>lastName
                {sortType==='lastName'
                    ?<img height={12} alt='arrowSort' src={sort==='asc'?sortDown:sortUp}/>
                    :<img height={12} alt='arrowSort' src={sortArrows}/>}
                </th>
                <th onClick={() => onSort("email")}>email
                {sortType==='email'
                    ?<img height={12} alt='arrowSort' src={sort==='asc'?sortDown:sortUp}/>
                    :<img height={12} alt='arrowSort' src={sortArrows}/>}
                </th>
                <th onClick={() => onSort("phone")}>phone
                {sortType==='phone'
                    ?<img height={12} alt='arrowSort' src={sort==='asc'?sortDown:sortUp}/>
                    :<img height={12} alt='arrowSort' src={sortArrows}/>}
                </th>
            </tr>
            </thead>
            <tbody>
            {TableRowElements}
            </tbody>
        </table>
        </div>
    }
}


export default Table