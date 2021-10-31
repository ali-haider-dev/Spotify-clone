export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQBa7z9NHoidpfjzo87GfaQPq-zG_wugjZ5T9-AaD0ovKRUON4lPnroPQQUT8BQ_DoECpauH0e0pqrYQLJHJEPIQOoYf_4vXD7dAOAQizzSShR5pNxZiOXVBUZzNlhXl6eJdBezDAHmFJBoCAmVRJ9Km4V_Jc22hUDmNMH4RUdGddtJY"
}
const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        default:
            return state
    }
}

export default reducer