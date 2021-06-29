import { getList } from "../product-data";

const productReducer = (state = getList(), action) => {
    return state;
}

export default productReducer;