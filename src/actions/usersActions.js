
export const getAll = () => (dispatch) => {
  dispatch({
    type: 'get_users',
    payload: [1,2,3]
  })
}
