import React from "react";
import styles from "../styles/SelectTable.module.scss"

const SelectTable = ({selectTableSize}) => {
    return <div className={styles.selectTable}>
        выберете объем таблицы
        <div className={styles.buttons}>
            <button className={styles.buttons__table} onClick={() => {
                selectTableSize(100)
            }}>большая таблица
            </button>
            <button className={styles.buttons__table} onClick={() => selectTableSize(32)}>маленькая таблица</button>
        </div>
    </div>
}


export default SelectTable