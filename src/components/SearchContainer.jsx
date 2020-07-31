import React from "react";
import {connect} from "react-redux";
import {searchAC} from "../redux/reducer";
import Search from "./Search";

const SearchContainer = ({search, searchAC}) => {

    const getSearch = (search) => {
        searchAC(search)
    }

    return <Search  search={search} getSearch={getSearch}/>
}

const mapStateToProps = (state) => {
    return {
        search: state.Reducer.search,

    }
}

export default connect(mapStateToProps, {searchAC})(SearchContainer)

