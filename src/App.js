import React, {useState} from 'react';
import ReactPaginate from 'react-paginate';
import lodash from "lodash"
import styles from './App.module.scss';
import Table from "./components/Table";
import Search from "./components/Search";
import {AddUserReduxForm} from "./components/AddUser";
import {addUserAC,currentPageAC} from "./redux/reducer";
import SelectTable from "./components/SelectTable";
import UserInfo from "./components/UserInfo";
import { useDispatch,useSelector } from 'react-redux';


export const App = () => {

const {users,tableSize,isShowUserInfo,userId,pageSize,search,currentPage}=useSelector(state=>{
    return{
        users: state.Reducer.users,
        tableSize: state.Reducer.tableSize,
        isShowUserInfo: state.Reducer.isShowUserInfo,
        userId: state.Reducer.userId,
        pageSize: state.Reducer.pageSize,
        search:state.Reducer.search,
        currentPage:state.Reducer.currentPage
    }
})

const dispatch=useDispatch()

    const [showForm, setShowForm] = useState('button')
    const closeForm = () => setShowForm('button')

    const addUserFormData = formData => {
        setShowForm('button')
        dispatch(addUserAC(formData.id, formData.firstName, formData.lastName, formData.email, formData.phone))
    }

    let selectedUser = users.filter(f => f.id === userId).map(m => m)


    const handlePageClick = ({selected}) => {
        dispatch(currentPageAC(selected))
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
            <SelectTable/>
            }
            {(tableSize === 32 || tableSize === 100) &&
            <div className={styles.content}>
                <Search/>

                <Table  tablePage={tablePage}/>

                <div className={styles.content__paginate}>
                    {users.length > 25 ?
                        <ReactPaginate
                            previousLabel={'<'}
                            nextLabel={'>'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={countPage}
                            forcePage={currentPage}
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
                    <UserInfo selectedUser={selectedUser}/>
                    }
                </div>
            </div>
            }

        </div>
    );
}




