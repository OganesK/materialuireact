import './App.css';
import React from 'react';
import { Container, Toolbar, AppBar, IconButton, Typography, Box, Button, Paper, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  mainFeaturesPost: {
    position: 'relative',
    color:  theme.palette.common.white,
    marginBottom: theme.spacing(6),

    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeate',
    backgroundPosition: 'center'
  },
  mainFeaturesPostContent: {
    position: 'relative',
    padding: theme.spacing(3)
  }
}))

function App() {

  const classes = useStyles();

  return (
    <>
    <div className="App">
      <AppBar position='fixed'>
        <Container fixed>
          <Toolbar>
            <IconButton edge='start' 
            color='inherit'
            aria-label='menu' className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant='h6'> Web Developer Blog</Typography>
            <Box mr={3}>
              <Button color='inherit' variant='outlined'> Log In</Button>
            </Box>
            <Button color='secondary' variant='contained'>Sign Out</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>

    <main>
      <Paper className={classes.mainFeaturesPost}
      style={{ backgroundImage: `url(https://source.unsplash.com/random)`}}>
        <Container fixed>
          <Grid Container>
            <Grid item md={6}>
              <div className={classes.mainFeaturesPostContent}>
                <Typography
                component='h1'
                variant='h3'
                color='inerhit'
                gutterBottom>
                  Web Developer Blog
                </Typography>
                <Typography
                variant='h5'
                color='inerhit'
                paragraph>
                  Some Text
                </Typography>
                <Button variant='contained' color='secondary'>
                  Learn JS
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </main>
    </>
  );
}

export default App;
