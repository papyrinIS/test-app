import React from "react";
import { useSelector ,useDispatch} from "react-redux";
import styles from "../styles/UserInfo.module.scss";
import {userInfoAC} from "../redux/reducer";

const UserInfo = ({selectedUser}) => {
const userId = useSelector(state=> state.Reducer.userId)
const dispatch=useDispatch()
const {streetAddress, city, state, zip} = selectedUser[0].address
const showUserInfo = () => dispatch(userInfoAC(false, userId))

    return <div className={styles.userInfo}>
        <button className={styles.button} onClick={showUserInfo}>закрыть</button>

        <div>
            <span>Описание: </span>
            <p>{selectedUser[0].description}</p>
        </div>

        <div><span>Адрес проживания:</span>
            <span>{streetAddress}</span>
        </div>

        <div>
            <span>Город:</span>
            <span>{city}</span>
        </div>

        <div>
            <span>Провинция/штат:</span>
            <span>{state}</span>
        </div>

        <div>
            <span>Индекс:</span>
            <span>{zip}</span>
        </div>

    </div>

}


export default UserInfo