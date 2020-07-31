import React from "react";
import styles from "../styles/UserInfo.module.scss";

const UserInfo = ({selectedUser, showUserInfo}) => {
    const {streetAddress, city, state, zip} = selectedUser[0].address

    return <div className={styles.userInfo}>
        <button className={styles.button} onClick={() => showUserInfo()}>закрыть</button>

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