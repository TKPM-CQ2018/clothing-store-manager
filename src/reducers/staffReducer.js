import { getList } from "../staff-data";

const staffReducer = (state = getList(), action) => {
  return state;
};

export default staffReducer;
