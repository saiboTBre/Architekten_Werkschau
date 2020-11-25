import react from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import stock1 from '../../images/stock1.jpg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Room from '../Room';
import Start from '../Start';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  mainImage: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  centerImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '800px',
  },
  mainLayout: {
    paddingTop: '3rem',
  },
  linkStyle: {
    textDecoration: 'none',
  },
  btnStyle: {
    color: '#fff',
    fontWeight: 'bold',
    background: 'gray',
  },
  appBar: {
    top: 'auto',
    bottom: 60,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
});

const Main = () => {
  const classes = useStyles();

  return (
    <Container className={classes.mainLayout}>
      <Switch>
        <Route path='/rooms'>
          <Room />
        </Route>
        <Route path='/'>
          <Start />
        </Route>
      </Switch>
      <BottomNavigation showLabels>
        <BottomNavigationAction label='Recents' icon={<RestoreIcon />} />
        <Link to='/'>
          <BottomNavigationAction label='Favorites' icon={<FavoriteIcon />} />
        </Link>
        <Button className={classes.btnStyle}>Browse</Button>
        <Button className={classes.btnStyle}>Mikrofon: an</Button>
        <Button className={classes.btnStyle}>Kamera: an</Button>

        <Button className={classes.btnStyle}>
          <Link to='/rooms' className={classes.linkStyle}>
            Werkschau starten
          </Link>
        </Button>
      </BottomNavigation>
      {/* <AppBar position='fixed' color='primary' className={classes.appBar}>
        <Toolbar>
          <IconButton edge='start' color='inherit' aria-label='open drawer'>
            <MenuIcon />
          </IconButton>
          <Fab color='secondary' aria-label='add' className={classes.fabButton}>
            <AddIcon />
          </Fab>
          <div className={classes.grow} />
          <IconButton color='inherit'>
            <SearchIcon />
          </IconButton>
          <IconButton edge='end' color='inherit'>
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar> */}
    </Container>
  );
};

export default Main;
