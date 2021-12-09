import React, { useState, useEffect } from "react";
import Header from "../../common/header/Header";
import './Home.css';
import UpcomingMoviesList from './UpcomingMovieList';
import ReleasedMoviesList from './ReleasedMoviesList';
import { Grid } from "@material-ui/core";
import MovieFilterCard from "./MovieFilterCard";
import { RestaurantMenu } from "@material-ui/icons";
import AuthContainer from "./AuthContainer";


function Home(props) {

    const [upcomingMovies, setUpcomingMovies] = useState([
    ]);

    const [releasedMovies, setReleasedMovies] = useState([
    ]);

    const getUpcomingMovies = async () => {
        const url = 'http://localhost:8085/api/v1/movies?status=PUBLISHED';
        const response = await fetch(url);
        const responseJson = await response.json(); 
        setUpcomingMovies(responseJson.movies);
    }

    const getReleasedMovies = async () => {
        const url = 'http://localhost:8085/api/v1/movies?status=RELEASED';
        const response = await fetch(url);
        const responseJson = await response.json();      
        setReleasedMovies(responseJson.movies);
    }

    useEffect(() => {
        getUpcomingMovies();
        getReleasedMovies();
    }, [])


    /*return (
        <div>
            <Header>Header</Header>
            <div>
                <div id='movies-heading'>
                    Upcoming Movies
                </div>
                <div>
                    <UpcomingMoviesList movies={upcomingMovies} />
                </div>

                
                <div>
                    <ReleasedMoviesList movies={releasedMovies} />
                </div>
                <div>
                    <MovieFilterCard />
                </div>
            </div>
        </div>
    );*/
    return(
        <div>
            <AuthContainer />
        </div>
    );
}

export default Home;