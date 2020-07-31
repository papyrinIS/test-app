import React from "react";
import styles from "../styles/addUser.module.scss"

export const required = (value) => {
    if(value) return undefined;
    return<span className={styles.validate}>Field is required</span>;
}



