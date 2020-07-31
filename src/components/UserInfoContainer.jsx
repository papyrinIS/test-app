import React from "react";
import {connect} from "react-redux";
import {getUsersThunk, userInfoAC} from "../redux/reducer";
import UserInfo from "./UserInfo";

const UserInfoContainer = ({selectedUser, userInfoAC, userId}) => {

    const showUserInfo = () => userInfoAC(false, userId)

    return <UserInfo showUserInfo={showUserInfo} selectedUser={selectedUser}/>
}

const mapStateToProps = (state) => {
    return {
        users: state.Reducer.users,
        isShowUserInfo: state.Reducer.isShowUserInfo,
        userId: state.Reducer.userId

    }
}

export default connect(mapStateToProps, {getUsersThunk, userInfoAC})(UserInfoContainer)

