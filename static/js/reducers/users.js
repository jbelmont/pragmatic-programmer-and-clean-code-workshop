const users = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_USERS':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
      return Object.assign({}, state, {
        completed: !state.completed
      });

    default:
      return state;
  }
}

export default users