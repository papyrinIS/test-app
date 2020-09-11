import React from "react";
import {userInfoAC} from '../redux/reducer'
import { useDispatch} from "react-redux";
import styles from "../styles/Table.module.scss"


export const TableRow = ({users}) => {
    const dispatch=useDispatch()
    let {id, firstName, lastName, email, phone} = users
    const userInfo = () => {
        dispatch(userInfoAC(true, id))
    }
    return <tr className={styles.tableRow}  onClick={userInfo}>
        <th>{id}</th>
        <th>{firstName}</th>
        <th>{lastName}</th>
        <th>{email}</th>
        <th>{phone}</th>
    </tr>
}
