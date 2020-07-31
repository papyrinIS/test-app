import React from "react";
import {connect} from "react-redux";
import {selectTableSizeAC} from "../redux/reducer";
import SelectTable from "./SelectTable";

const SelectTableContainer = ({selectTableSizeAC, tableSize}) => {

    const selectTableSize = (size) => {
        selectTableSizeAC(size)
    }

    return <SelectTable tableSize={tableSize} selectTableSize={selectTableSize}/>
}

const mapStateToProps = (state) => {
    return {
        tableSize: state.Reducer.tableSize,

    }
}

export default connect(mapStateToProps, {selectTableSizeAC})(SelectTableContainer)

