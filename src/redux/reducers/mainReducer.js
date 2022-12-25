const initialState = {
}

export default function mainReducer(state = initialState, action) {

    console.log("mainReducer returned default state");
    return {
        ...state
    }
}
