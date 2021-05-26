import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../Actions';
import MoviesList from '../Components/Movies_list';

class App extends Component{

    componentDidMount(){
        this.props.moviesList()
    }
    
    render(){
        return(
            <div>
                <div>
                    <MoviesList lists = {this.props.movies}/>
                </div>
            </div>
        )
    }
}
    function mapStateToProps(state){
        console.log(state);
        return{
            movies: state.movies
        }
    }


export default connect(mapStateToProps,actions)(App)