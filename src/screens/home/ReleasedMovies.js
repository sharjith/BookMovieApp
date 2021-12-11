import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    gridListMain: {
        transform: 'translateZ(0)',
        cursor: 'pointer'
    },
    title: {
        color: theme.palette.primary.light,
    }
});
const ReleasedMovies = (props) => {
    const history = useHistory();
    const releasedMovies = props.releasedMovies;
    const movieClickHandler = (movieId) => {

        history.push('/movie/' + movieId);
    }
    const { classes } = props;

    return (
        <div>
            <GridList cellHeight={350} cols={4} className={classes.gridListMain}>
                {releasedMovies.map(movie => (
                    <GridListTile onClick={() => movieClickHandler(movie.id)} className="released-movie-grid-item" key={"grid" + movie.id}>
                        <img src={movie.poster_url} className="movie-poster" alt={movie.title} />
                        <GridListTileBar
                            title={movie.title}
                            subtitle={<span>Release Date: {new Date(movie.release_date).toDateString()}</span>}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
}
export default withStyles(styles)(ReleasedMovies);
