import React from "react";
import {Field} from "redux-form";
import styles from "../styles/addUser.module.scss"

export const Input = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return <span>
        <span>
            <input className={styles.input} autoComplete="off"  {...input} {...props} />
        </span>
        {hasError && <span>{error}</span>}
    </span>
}

export function fields(placeholder, name, validate, component, props = {}, text = "") {
    return <div>
        <Field placeholder={placeholder}
               name={name}
               validate={validate}
               component={component}
               {...props}
        /> {text}
    </div>
}