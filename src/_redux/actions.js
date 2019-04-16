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
export function LOGIN_itemsIsLoading(bool) {
    return {
        type: 'LOGIN_ITEMS_IS_LOADING',
        isLoading: bool
    };
}
export function LOGIN_itemsHasErrored(bool,text) {
    return {
        type: 'LOGIN_ITEMS_HAS_ERRORED',
        hasErrored: bool,
        text:text
    };
}
export function GET_MAIL_SUCCESS(json) {
    return {
        type: 'GET_MAIL_SUCCESS',
        items:json
    };
}
export function MAIL_itemsHasErrored(bool) {
    return {
        type: 'MAIL_HAS_ERRORED',
        hasErrored: bool
    };
}

export function MAIL_itemsIsLoading(bool) {
    return {
        type: 'MAIL_IS_LOADING',
        isLoading: bool
    };
}