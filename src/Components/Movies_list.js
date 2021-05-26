import React from 'react';


const MoviesList = (props) => {
    
     const renderList = ({lists}) => {
        if(lists){
            return lists.map((data) => {
                return(
                    <div key={data.id}>
                    <p> {data.name}</p>
                    </div>
                );
            }
        )}
    }
    
        return(
            <div>
                <h2> App Component </h2>
                <div>
                    {renderList(props)}
                </div>
            </div>
        )
    }

  

export default MoviesList;