import Pagination from '@material-ui/lab/Pagination';
import React, {useContext} from "react";
import Store from '../../mobx/store';
import './Paginater.css';


const Paginater = () => {
    const store = useContext(Store);
    const { updatePage } = store;

    return(
        <Pagination id="pages" count={10} shape="rounded" onChange={(event, page) => updatePage(page-1)}/>
    )
}

export default Paginater;