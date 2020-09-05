export const appAction = () => dispatch => {
    dispatch({
        type: 'APP_ACTION',
        payload: 'result_of_simple_action'
    });
}