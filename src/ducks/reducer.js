const initialState = {
    user_id: null,
    username: null,
    user_image: null

}

const SET_USER = 'SET_USER'

export function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    }
}

export default function reducer(state=initialState, action) {
    const {type, payload} = action
    switch (type) {
        case SET_USER:
            const {user_id, username, user_image} = payload
            return {...state, user_id, username, user_image}
        default: return state
    }
}