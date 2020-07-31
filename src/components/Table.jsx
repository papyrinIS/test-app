import React, {useState} from "react";
import TableRow from "./TableRow";
import lodash from "lodash"
import arrowSort from "../img/arrowSort.png"
import styles from "../styles/Table.module.scss"
import {PreloaderPage} from "./Preloader";

const Table = ({users, getUsersSort, search, isLoad, tablePage}) => {
    let [sort, setSort] = useState('desc');
    const onSort = e => {
        sort === 'asc' ? setSort('desc') : setSort('asc')
        let orderData = lodash.orderBy(users, e, sort)
        getUsersSort(orderData)
    }
    let tableUsers = []
    if (tablePage !== undefined){ tableUsers = tablePage}





    let TableRowElements = tableUsers.map(u =><TableRow key={u.id + u.phone} users={u}/>)

    if (isLoad) return <PreloaderPage/>
    else {
        return <table className={styles.table}>
            <thead>
            <tr>
                <th onClick={() => onSort("id")}>id
                    {sort === 'asc' && <img height={12} src={arrowSort} alt="arrowSort"/>}
                    {sort === 'desc' &&
                    <img height={12} className={styles.table__arrowSort} src={arrowSort} alt="arrowSort"/>}
                </th>
                <th onClick={() => onSort("firstName")}>firstName
                    {sort === 'asc' && <img height={12} src={arrowSort} alt="arrowSort"/>}
                    {sort === 'desc' &&
                    <img height={12} className={styles.table__arrowSort} src={arrowSort} alt="arrowSort"/>}
                </th>
                <th onClick={() => onSort("lastName")}>lastName
                    {sort === 'asc' && <img height={12} src={arrowSort} alt="arrowSort"/>}
                    {sort === 'desc' &&
                    <img height={12} className={styles.table__arrowSort} src={arrowSort} alt="arrowSort"/>}
                </th>
                <th onClick={() => onSort("email")}>email
                    {sort === 'asc' && <img height={12} src={arrowSort} alt="arrowSort"/>}
                    {sort === 'desc' &&
                    <img height={12} className={styles.table__arrowSort} src={arrowSort} alt="arrowSort"/>}
                </th>
                <th onClick={() => onSort("phone")}>phone
                    {sort === 'asc' && <img height={12} src={arrowSort} alt="arrowSort"/>}
                    {sort === 'desc' &&
                    <img height={12} className={styles.table__arrowSort} src={arrowSort} alt="arrowSort"/>}
                </th>
            </tr>
            </thead>
            <tbody>
            {TableRowElements}
            </tbody>
        </table>
    }
}


export default Table