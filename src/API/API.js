import axios from 'axios'

const instance = axios.create({
    baseURL: `https://www.filltext.com/`
});

const tableAPI = {
    getMiniTable() {
        return instance.get(`?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`);
    },
    getTable() {
        return instance.get(`?rows=1000&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`);
    }
}

export default tableAPI