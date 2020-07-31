import React, {useState} from 'react';
import ReactPaginate from 'react-paginate';
import lodash from "lodash"
import styles from './App.module.scss';
import TableContainer from "./components/TableContainer";
import SearchContainer from "./components/SearchContainer";
import {AddUserReduxForm} from "./components/AddUser";
import {connect} from "react-redux";
import {addUserAC} from "./redux/reducer";
import SelectTableContainer from "./components/SelectTableContainer";
import UserInfoContainer from "./components/UserInfoContainer";


export const App = ({addUserAC, tableSize, isShowUserInfo, users, userId, pageSize,search}) => {


    const [showForm, setShowForm] = useState('button')
    const closeForm = () => setShowForm('button')

    const addUserFormData = formData => {
        setShowForm('button')
        addUserAC(formData.id, formData.firstName, formData.lastName, formData.email, formData.phone)
    }

    let selectedUser = users.filter(f => f.id === userId).map(m => m)

    const [currentPage, setCurrentPage] = useState(0)
    const handlePageClick = ({selected}) => {
        setCurrentPage(selected)
    }





    let filter = ()=>{
        if(!search){
            return users
        }
        else{
            return users.filter(f=> f.firstName.includes(search) ||
                f.lastName.includes(search) ||
                f.phone.includes(search)||
                f.email.includes(search)
            )
        }
    }
    let filterData =filter()

    let tablePage = lodash.chunk(filterData, pageSize)[currentPage]
    let countPage = Math.ceil((filterData.length) / pageSize)

    return (
        <div className={styles.app}>
            {tableSize === 0 &&
            <SelectTableContainer/>
            }
            {(tableSize === 32 || tableSize === 100) &&
            <div className={styles.content}>
                <SearchContainer/>

                <TableContainer tablePage={tablePage}/>

                <div className={styles.content__paginate}>
                    {users.length > 25 ?
                        <ReactPaginate
                            previousLabel={'<'}
                            nextLabel={'>'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={countPage}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                            containerClassName={styles.pagination}
                            activeClassName={styles.activePage}
                            pageClassName={styles.pageNumber}
                            previousClassName={styles.buttonNav}
                            nextClassName={styles.buttonNav}
                            pageLinkClassName={styles.linkPageNumber}
                            nextLinkClassName={styles.linkPageNumber}
                            previousLinkClassName={styles.linkPageNumber}
                        /> : null
                    }
                </div>

                <div className={styles.content__addUser}>
                    {showForm === 'button' &&
                    <button className={styles.content__button} onClick={() => setShowForm('form')}>добавить</button>
                    }
                    {showForm === 'form' &&
                    <AddUserReduxForm closeForm={closeForm} onSubmit={addUserFormData}/>
                    }
                </div>

                <div className={styles.content__userInfo}>
                    {isShowUserInfo &&
                    <UserInfoContainer selectedUser={selectedUser}/>
                    }
                </div>
            </div>
            }

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        users: state.Reducer.users,
        tableSize: state.Reducer.tableSize,
        isShowUserInfo: state.Reducer.isShowUserInfo,
        userId: state.Reducer.userId,
        pageSize: state.Reducer.pageSize,
        search:state.Reducer.search,
        CurrentPage: state.Reducer.currentPage
    }
}

export default connect(mapStateToProps, {addUserAC})(App)


