//login types
export const LOGIN_USER = 'login_user';
export const LOGOUT_USER = 'logout_user';
export const LOGIN_USER_SUCCESS = 'login_user_success';
export const LOGIN_USER_FAIL = 'login_user_fail'; // never used alert is inside action
export const LOGIN_RESET = 'login_reset'; //never used

//registration types
export const REGISTER_USER = 'register_user';
export const REGISTER_SUCCESS = 'register_success'; // never used alert is inside action
export const REGISTER_FAILED = 'register_failed'; // never used alert is inside action
export const REGISTER_COMPLETE = 'register_complete';
export const REGISTER_RESET = 'regiser_reset'; //never used

//maternal mentor registration types
export const MENTOR_REQUEST_SUCCESS = 'mentor_request_success';

export const LOADING_DATA = 'loading_data';
//MaternalMentors types
export const MENTOR_FETCH_SUCCESS = 'mentor_fetch_success';
export const MENTOR_FETCH_FAILED = 'mentor_fetch_failed';
export const MENTOR_ASSIGN_SUCCESS = 'mentor_assign_success';
export const MENTOR_PICTURE_FETCH_SUCCESS = 'mentor_picture_fetch_success';
//registration/user info types
export const MAININFORMATIONUPDATE = 'main_information_update';
export const CHOSENMATERNALMENTOR = 'chosen_maternal_mentor';

//forgot types
export const SEND_FORGOT_REQUEST = 'send_forgot_request';
export const FORGOT_REQUEST_SUCCESS = 'forgot_request_success';
export const SENT_FORGOT_REQUEST = 'sent_forgot_request'; // never used
export const FORGOT_RESET = 'forgot_reset'; //never used

//navigation types
export const LOGIN = 'login';
export const LOGOUT = 'logout';

//questionnaire types
export const QUESTIONNAIRE_FETCH_SUCCESS = 'questionnaire_fetch_success';
export const QUESTIONNAIRE_FETCH_FAIL = 'questionnaire_fetch_fail';
export const ANSWER_TEXT_CHANGED = 'answer_text_changed';

//personalanalytics types
export const FETCH_QUESTIONS_SUCCESS = 'profile_ana_fetch_success';
export const FETCH_QUESTIONS_FAIL = 'profile_ana_fetch_fail';

//chat types
export const CONVERSATION_FETCH_SUCCESS = 'conversation_fetch_success';
export const CONVERSATION_FETCH_FAIL = 'conversation_fetch_fail';
export const MESSAGE_FETCH_SUCCESS = 'message_fetch_success';
export const MESSAGE_FETCH_FAIL = 'message_fetch_fail';
export const MESSAGE_TEXT_CHANGED = 'message_text_changed';
export const MESSAGE_SEND_SUCCESS = 'message_send_success';
export const USER_FETCH_SUCCESS = 'user_fetch_success';
export const CONVERSATION_LIST_FETCH_SUCCESS = 'conversation_list_fetch_success';
export const CONVERSATION_LIST_FETCH_FAIL = 'conversation_list_fetch_fail';

//forum question types
export const FORUM_QUESTION_LIST_FETCH_SUCCESS = 'forum_question_list_fetch_success';
export const FORUM_QUESTION_LIST_FETCH_FAIL = 'forum_question_list_fetch_fail';
