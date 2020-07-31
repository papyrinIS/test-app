import React, {useEffect} from "react";
import Table from "./Table";
import {connect} from "react-redux";
import {getUsersAC, getUsersThunk} from "../redux/reducer";

const TableContainer = ({users, getUsersThunk, getUsersAC, search, isLoad, tableSize, pageSize, tablePage}) => {

    const getUsersSort = orderData => getUsersAC(orderData)


    useEffect(() => {
        getUsersThunk(tableSize)
    }, [getUsersThunk, tableSize])

    return <Table tablePage={tablePage}
                  pageSize={pageSize}
                  isLoad={isLoad}
                  users={users}
                  search={search}
                  getUsersSort={getUsersSort}/>
}

const mapStateToProps = (state) => {
    return {
        users: state.Reducer.users,
        search: state.Reducer.search,
        isLoad: state.Reducer.isLoad,
        tableSize: state.Reducer.tableSize,
        pageSize: state.Reducer.pageSize

    }
}

export default connect(mapStateToProps, {getUsersThunk, getUsersAC})(TableContainer)

