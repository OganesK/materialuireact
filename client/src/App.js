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
    marginBottom: theme.spacing(4),

    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeate',
    backgroundPosition: 'center'
  },
  mainFeaturesPostContent: {
    position: 'relative',
    padding: theme.spacing(6),
    marginTop: theme.spacing(1)
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: "rgba(0,0,0,.3)"
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
          <div className={classes.overlay}/>
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
      <div className={classes.mainContent}>
        <Container maxWidth='sm'>
          <Typography variant='h1' align='center' text=>
            Web developer Blog
          </Typography>
        </Container>
      </div>
    </main>
    </>
  );
}

export default App;
