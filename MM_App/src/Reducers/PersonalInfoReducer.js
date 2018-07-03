import { MAININFORMATIONUPDATE, LOADING_DATA } from '../Actions/types';

const INITIAL_STATE = {
  age: '18',
  current_children: '0',
  ethnicity: '0',
  expecting_date: new Date(),
  first_name: 'first',
  last_name: 'last',
  marital_status: '0',
  number_children: '0',
  phone_number: '',
  postal_code: '',
  trimester: '0'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MAININFORMATIONUPDATE: {
        console.log(action.payload);
      return { ...state, action };
    }
    case LOADING_DATA: {
      return { data: action.payload };
    }
    default:
      return state;
  }
};
// add inital states for the information retrieved from the payload: Obj
// store the important info into the state
