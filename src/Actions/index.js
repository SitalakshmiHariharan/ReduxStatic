export function moviesList(){
    return{
        type:'MOVIES_LIST',
        payload:[
            {id:1, name:"Avengers"},
            {id:2, name:"Transformers"},
            {id:3, name:"Baahubali"}
        ]
    }
}

export function artistsList(){
    return{
        type:'ARTISTS_LIST',
        payload:[
            {id:1, name:"Robert Downey Jr"},
            {id:2, name:"Peter Cullen"},
            {id:3, name:"Prabhas"}
        ]
    }
}