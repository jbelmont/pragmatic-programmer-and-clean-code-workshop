const users = (state = {}, action) => {
    switch (action.type) {
    case 'ADD_USERS':
        return Object.assign({}, state, {
            completed: !state.completed
        });
    default:
        return state;
    }
};

export default users;