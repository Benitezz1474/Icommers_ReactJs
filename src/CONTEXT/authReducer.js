export const authReducer=(state,action)=>{

    switch(action.type){
        case "login" : return {
            logged: true,
            user : action.payload
        };

        case "logout" : return {
           logged: false,
           user:action.payload
        }

        default : return state
    }
}