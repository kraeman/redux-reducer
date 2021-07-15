export function manageFriends(state = {friends: []}, action){
    let newState = {...state, friends: [...state.friends]}
    if(action.type === "ADD_FRIEND"){
        newState.friends.push(action.friend)
        return newState
    }else if(action.type === "REMOVE_FRIEND") {
        let idx = newState.friends.findIndex((friend) => friend.id === action.id)
        newState.friends.splice(idx, 1)
        return newState
    }else{
        return newState
    }
}
