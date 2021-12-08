import React from 'react';
import './MovieList.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const MovieList = (props) => {
    return(
        <GridList id='upcoming-movies-grid' cellHeight={250} cols={6}>
            {props.movies.map((movie, index)=> 
            <GridListTile key={movie.title} >
                <img src={movie.poster_url} alt='movies'></img>
                <GridListTileBar
              title={movie.title}              
              actionIcon={
                <IconButton>
                  <InfoIcon />
                </IconButton>
              }
            />
            </GridListTile>)}
        </GridList>
    )
}

export default MovieList;
