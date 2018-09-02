//this file is not used anymore

import {
    MENTOR_FETCH_SUCCESS,
    MENTOR_ASSIGN_SUCCESS,
    MENTOR_PICTURE_FETCH_SUCCESS
} from '../Actions/types';

const INITIAL_STATE = { };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MENTOR_FETCH_SUCCESS: {
            const { oldMentors } = action.payload;
            return { ...state, oldMentors };
        }
        case MENTOR_ASSIGN_SUCCESS: {
            const { nextScreen } = action.payload;
            return { ...state, nextScreen };
        }
        case MENTOR_PICTURE_FETCH_SUCCESS: {
            const { NewMentors } = action.payload;
            return { ...state, NewMentors };
        }
        default:
            return state;
    }
};
