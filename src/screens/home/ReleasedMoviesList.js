import React from 'react';
import './ReleasedMoviesList.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const ReleasedMoviesList = (props) => {

    return (
        <GridList id='released-movies-grid' cellHeight={350} cols={4}>
          {props.movies.map((movie, index) =>
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
      );
}

export default ReleasedMoviesList;