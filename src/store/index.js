const initialState = {
    listData: []
}

const reducer = (state = initialState, action) => {
    let { type, payload } = action
    switch (type) {

        case "":
            return { ...state, listData: [...payload] }

        default:
            return state
    }
}
export default reducer9