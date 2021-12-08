/*import React from 'react';
import './MovieFilterCard.css';
import FormControl from '@mui/material/FormControl';
import { Grid, TextField } from '@material-ui/core';

const MovieFilterCard = (props) => {
    return (
        <form>
            
            <Grid container>
            <FormControl>
                <Grid item xs={6}>
                    <TextField
                    variant = 'outlined'
                    label = 'Movie Name'                    
                    />
                </Grid>
            </FormControl>
            </Grid>

        </form>
    )
}*/

import React, { useState } from "react";
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const defaultValues = {
  name: "",
  age: 0,
  gender: "",
  os: "",
  favoriteNumber: 0,
};



const MovieFilterCard = (props) => {

  const [movieName, setMovieName] = useState("");
  const [genres, setGenres] = useState([]);
  const [genresList, setGenresList] = useState([]);
  const [artists, setArtists] = useState([]);
  const [artistsList, setArtistsList] = useState([]);
  const [releaseDateStart, setReleaseDateStart] = useState("");
  const [releaseDateEnd, setReleaseDateEnd] = useState("");

  const movieNameChangeHandler = event => {
    setMovieName(event.target.value);
  }
 
  const genreSelectHandler = event => {
    setGenres(event.target.value);
  }

  const artistSelectHandler = event => {
    setArtists(event.target.value);
  }

  const releaseDateStartHandler = event => {
    setReleaseDateStart(event.target.value);
  }

  const releaseDateEndHandler = event => {
    setReleaseDateEnd(event.target.value);
  }

  const movieClickHandler = (movieId) => {
    props.history.push('/movie/' + movieId);
  }

  const filterApplyHandler = () => {
    let queryString = "?status=RELEASED";
    if (movieName !== "") {
        queryString += "&title=" + movieName;
    }
    if (genres.length > 0) {
        queryString += "&genres=" + genres.toString();
    }
    if (artists.length > 0) {
        queryString += "&artists=" + artists.toString();
    }
    if (releaseDateStart !== "") {
        queryString += "&start_date=" + releaseDateStart;
    }
    if (releaseDateEnd !== "") {
        queryString += "&end_date=" + releaseDateEnd;
    }

    // apply the filter

}

  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  const classes = props;

  return (

    <div className="right">
      <Card>
        <CardContent>
          <FormControl className={classes.formControl}>
            <Typography className={classes.title} color="textSecondary">
              FIND MOVIES BY:
            </Typography>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="movieName">Movie Name</InputLabel>
            <Input id="movieName" onChange={movieNameChangeHandler} />
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="select-multiple-checkbox">Genres</InputLabel>
            <Select
              multiple
              input={<Input id="select-multiple-checkbox-genre" />}
              renderValue={selected => selected.join(',')}
              value={genres}
              onChange={genreSelectHandler}
            >
              {genresList.map(genre => (
                <MenuItem key={genre.id} value={genre.genre}>
                  <Checkbox checked={genres.indexOf(genre.genre) > -1} />
                  <ListItemText primary={genre.genre} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="select-multiple-checkbox">Artists</InputLabel>
            <Select
              multiple
              input={<Input id="select-multiple-checkbox" />}
              renderValue={selected => selected.join(',')}
              value={artists}
              onChange={artistSelectHandler}
            >
              {artistsList.map(artist => (
                <MenuItem key={artist.id} value={artist.first_name + " " + artist.last_name}>
                  <Checkbox checked={artists.indexOf(artist.first_name + " " + artist.last_name) > -1} />
                  <ListItemText primary={artist.first_name + " " + artist.last_name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <TextField
              id="releaseDateStart"
              label="Release Date Start"
              type="date"
              defaultValue=""
              InputLabelProps={{ shrink: true }}
              onChange={releaseDateStartHandler}
            />
          </FormControl>

          <FormControl className={classes.formControl}>
            <TextField
              id="releaseDateEnd"
              label="Release Date End"
              type="date"
              defaultValue=""
              InputLabelProps={{ shrink: true }}
              onChange={releaseDateEndHandler}
            />
          </FormControl>
          <br /><br />
          <FormControl className={classes.formControl}>
            <Button onClick={() => filterApplyHandler()} variant="contained" color="primary">
              APPLY
            </Button>
          </FormControl>
        </CardContent>
      </Card>
    </div>
  );
};

export default MovieFilterCard;