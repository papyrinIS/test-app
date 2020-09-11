import React from "react";
import { useDispatch } from "react-redux";
import styles from "../styles/SelectTable.module.scss"
import {selectTableSizeAC} from "../redux/reducer";

const SelectTable = () => {

const dispatch = useDispatch()
    const selectTableSize = size => dispatch(selectTableSizeAC(size))
    
    return <div className={styles.wrapper}><div className={styles.selectTable}>
        выберете объем таблицы
        <div className={styles.buttons}>
            <button className={styles.buttons__table} onClick={() => selectTableSize(100)}> большая таблица </button>
            <button className={styles.buttons__table} onClick={() => selectTableSize(32)}>маленькая таблица</button>
        </div>
    </div>
    </div>
}


export default SelectTable