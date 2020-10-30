import Pagination from '@material-ui/lab/Pagination';
import React, {useContext} from "react";
import Store from '../../mobx/store';


const Paginater = () => {
    const store = useContext(Store);
    const { updatePage } = store;

    return(
        <Pagination count={10} shape="rounded" onChange={(event, page) => updatePage(page-1)}/>
    )
}

export default Paginater;