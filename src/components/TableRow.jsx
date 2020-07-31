import React from "react";
import {userInfoAC} from "../redux/reducer";
import {connect} from "react-redux";
import styles from "../styles/Table.module.scss"


const TableRow = ({users, userInfoAC}) => {

    let {id, firstName, lastName, email, phone} = users
    const userInfo = () => userInfoAC(true, id)
    return <tr className={styles.tableRow} onClick={userInfo}>
        <th>{id}</th>
        <th>{firstName}</th>
        <th>{lastName}</th>
        <th>{email}</th>
        <th>{phone}</th>
    </tr>
}

const mapStateToProps = (state) => {return{}}

export default connect(mapStateToProps, {userInfoAC})(TableRow)
