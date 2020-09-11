import React, {useState} from "react";
import styles from "../styles/Search.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {searchAC,currentPageAC} from "../redux/reducer";

const Search = () => {

    const search = useSelector(state=>state.Reducer.search)
    const dispatch=useDispatch()

    const [value, setValue] = useState(search)

    const inputValue = e =>  setValue(e.currentTarget.value)
    
    const Search = () => {
        dispatch(searchAC(value))
        dispatch(currentPageAC(0))
    }

    
    return <div className={styles.search}>
        <input onChange={inputValue} value={value}/>
        <button onClick={Search}>найти</button>

    </div>
}


export default Search