
export const passwordReducer = (state, action) => {
    switch (action.type) {
        case 'UPPERCASE':
            return {
                ...state,
                uppercase: action.payload
            }
        case 'LOWERCASE':
            return {
                ...state,
                lowercase: action.payload
            }
        case 'NUMBERS':
            return {
                ...state,
                numbers: action.payload
            }
        case 'SYMBOLS':
            return {
                ...state,
                symbols: action.payload
            }
        case 'LENGTH':
            return {
                ...state,
                length: action.payload
            }
        case 'GENERATE':
            return {
                ...state,
                password: action.payload
            }
        case 'BG_COLOR':
            return {
                ...state,
                bgColor: action.payload
            }
        case 'FORCE_UPDATE':
            return {
                ...state,
                force: action.payload
            }
        default:
            return state
    }
}