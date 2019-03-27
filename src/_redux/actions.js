export function CHANGE_STOPS(e, index) {
    return {
        target: e,
        type: 'CHANGE_STOPS',
        index: index,
    }
};
export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}
export function WORK_itemsHasErrored(bool) {
    return {
        type: 'WORK_ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function WORK_itemsIsLoading(bool) {
    return {
        type: 'WORK_ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function WORK_DATA_SUCCESS(json) {
    return {
        type: 'WORK_DATA_SUCCESS',
        items:json
    };
}
export function MAIL_SEND_SUCCESS() {
    return {
        type: 'MAIL_SEND_SUCCESS',
    };
}
export function LOGIN_SEND(res) {
    return {
        type: 'LOGIN_SEND',
        res:res
    };
}
// export function itemsFetchData(url,options) {

//     return (dispatch) => {
//         dispatch(itemsIsLoading(true));

//         fetch(url,options)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw Error(response.statusText);
//                 }

//                 dispatch(itemsIsLoading(false));

//                 return response;
//             })
//             .then((response) => response.json())
//             .then((items) => dispatch(itemsFetchDataSuccess(items)))
//             .catch(() => { 
//                 dispatch(itemsIsLoading(false));
//                 dispatch(itemsHasErrored(true))});
//     };
// }

// export function fetchApi(url,options) {

//     return (dispatch) => {
//         dispatch(itemsIsLoading(true));

//         fetch(url,options)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw Error(response.statusText);
//                 }

//                 dispatch(itemsIsLoading(false));

//                 return response;
//             })
//             .then((response) => response.json())
//             .then((items) => dispatch(itemsFetchDataSuccess([items])))
//             .catch(() => { 
//                 dispatch(itemsIsLoading(false));
//                 dispatch(itemsHasErrored(true))});
//     };
// }