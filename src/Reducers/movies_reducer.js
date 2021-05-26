export default function(prevState=null,action){
    switch(action.type){
        case 'MOVIES_LIST':
            return action.payload
        case 'ARTISTS_LIST':
            return action.payload
        default:
            return prevState
    }
}