//EXAMPLE

import {
    SOME_CONST,
} from '../../constants'

export const some_method = (data) => {
    return (dispatch) => {
        dispatch({
            type: SOME_CONST,
            data: {...data}
        });
    }
}