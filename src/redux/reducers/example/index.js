// EXAMPLE

import {
    SOME_CONST,
} from '../../constants'

const initialStore = {
    dataRedux: {}
}

const reducer = (state = initialStore, action) => {
    switch(action.type) {
        case SOME_CONST : 
            if(action.data) {
                return {
                    ...state,
                    dataRedux: {...action.data},
                }
            }
        default:
            return state
    }
}

export default reducer