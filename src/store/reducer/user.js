const initialState = {
    user: null
};

export default function cartReduce(state = initialState, action) {
    switch (action.type) {
        case "UPDATE_USER":
            return {
                ...state,
                user: action.payload
            };
        case "LOGOUT":
            return {...state, user: null };
        default:
            return {...state };
    }
}