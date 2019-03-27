import * as action from "./actions.js";



export function fetchApi(url,options,effect) {

    return (dispatch) => {
        dispatch(action.WORK_itemsIsLoading(true));

        fetch(url,options)
            .then((response) => {
                console.log(response);
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(action.WORK_itemsIsLoading(false));

                console.log(response);
                return response;
            })
            .then((response) => response.json())
            .then((obj) => dispatch(effect(obj)))
            .catch(() => { 
                dispatch(action.WORK_itemsIsLoading(false));
                dispatch(action.WORK_itemsHasErrored(true))});
    };
}

export function Auth(url,options,effect) {

    return (dispatch) => {
        dispatch(action.WORK_itemsIsLoading(true));

        fetch(url,options)
            .then((response) => {
                console.log(response);
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(action.WORK_itemsIsLoading(false));

                console.log(response);
                return response;
            })
            .then((obj) => dispatch(effect(obj)))
            .catch(() => { 
                dispatch(action.WORK_itemsIsLoading(false));
                dispatch(action.WORK_itemsHasErrored(true))});
    };
}