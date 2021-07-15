export function managePresents(state = {numberOfPresents: 0}, action){
    if(action.type === "INCREASE"){
        let newState = {...state, numberOfPresents: state.numberOfPresents + 1}
        return newState
    }else {
        let newState = state
        return newState
    }
}
