import { combineReducers } from 'redux';
import mainState from "./mainState.js";

import { routerReducer } from 'react-router-redux';

const appState = (state = mainState(), action) => {


    switch (action.type) {

        case 'MAIL_SEND_SUCCESS':
            {  
                alert("MAIL_SEND_SUCCESS");
                return state;
                break;
            }
        case 'LOGIN_SEND':
        {  
            alert("auth_SUCCESS");
            return {...state,auth:true};
            break;
        }
        case 'LOGIN_ITEMS_IS_LOADING':{    
            return {...state,  loginIsLoading: action.isLoading };
            break;
        }
        case 'LOGIN_ITEMS_HAS_ERRORED':{    
            return {...state, loginHasErrored: action.hasErrored, errText: action.text };
            break;
        }

        case "RECEIVE_POSTS":
        {   
                return Object.assign({}, state, { arr: action.posts, f:false
            });
            break;
        }

        default:
            return state
    }
};


const itemsHasErrored = (state = false, action) => {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;
            break;

        default:
            return state;
    }
}

const itemsIsLoading = (state = false, action) => {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

const work = (state = {itemsIsLoading:false,itemsIsLoadinghasErrored:false,items:[]}, action) => {
    switch (action.type) {
        case 'WORK_DATA_SUCCESS':{    
            return {...state, items: [...action.items] };
            break;
        }
        case 'WORK_ITEMS_IS_LOADING':{    
            return {...state,  itemsIsLoading: action.isLoading };
            break;
        }
        case 'WORK_ITEMS_HAS_ERRORED':{    
            return {...state, itemshasErrored: action.hasErrored };
            break;
        }

        default:
            return state;
    }
}
const admin = (state = {itemsIsLoading:false,itemsIsLoadinghasErrored:false,mail:[]}, action) => {
    switch (action.type) {
        case 'GET_MAIL_SUCCESS':{    
            return {...state, mail: [...action.items] };
            break;
        }
        case 'MAIL_IS_LOADING':{    
            return {...state,  itemsIsLoading: action.isLoading };
            break;
        }
        case 'MAIL_HAS_ERRORED':{    
            return {...state, itemshasErrored: action.hasErrored };
            break;
        }

        default:
            return state;
    }
}

const reduser = combineReducers({
    routing: routerReducer,
    appState,
    itemsHasErrored,
    itemsIsLoading,
    work,
    admin
});

export default reduser;