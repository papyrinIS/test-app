import React from "react";
import styles from "../styles/addUser.module.scss"
import {reduxForm} from "redux-form";
import {fields, Input} from "./FormControl";
import {required} from "./validate";


const AddUser = ({handleSubmit, closeForm}) => {


    return <form onSubmit={handleSubmit} className={styles.addUser}>

        <div className={styles.addUser__field}>
            <span>id</span>
            {fields('id', 'id', [required], Input, {type: "number"})}
        </div>
        <div className={styles.addUser__field}>
            <span>firstName</span>
            {fields('firstName', 'firstName', [required], Input)}
        </div>
        <div className={styles.addUser__field}>
            <span>lastName</span>
            {fields('lastName', 'lastName', [required], Input)}
        </div>
        <div className={styles.addUser__field}>
            <span>email</span>
            {fields('email', 'email', [required], Input, {type: "email"})}
        </div>
        <div className={styles.addUser__field}>
            <span>phone</span>
            {fields('phone', 'phone', [required], Input)}
        </div>
        <button className={styles.addUser__button}>добавить</button>
        <button className={styles.addUser__button} onClick={closeForm}>отмена</button>
    </form>
}


export const AddUserReduxForm = reduxForm({form: 'addUser'})(AddUser);
