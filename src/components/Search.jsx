import React, {useState} from "react";
import styles from "../styles/Search.module.scss";

const Search = ({search, getSearch}) => {
    let [value, setValue] = useState(search)

    const inputValue = e => {
        setValue(e.currentTarget.value)
    }
    const Search = () => {
        getSearch(value)
    }
    return <div className={styles.search}>
        <input onChange={inputValue} value={value}/>
        <button onClick={Search}>найти</button>

    </div>
}


export default Search