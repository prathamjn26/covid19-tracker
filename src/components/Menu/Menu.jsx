import React,{useState} from 'react';
import {useStyles} from './Menu'
import {AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography, Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions} from '@material-ui/core';
import {AccountCircle,Notifications,MoreVert, Photo, Home} from '@material-ui/icons';
import virus from '../../images/virus.svg';
import {Link} from 'react-router-dom';

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [open,setOpen]= useState(false);
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const menuId = 'primary-search-account-menu';

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link className={classes.link} to='/Home'>
      <MenuItem>
        <IconButton color="inherit">
            <Home/>
        </IconButton>
        <p>Home</p>
      </MenuItem>
      </Link>

      <Link className={classes.link} to='/News'>
      <MenuItem>
        <IconButton color="inherit">
            <Notifications/>
        </IconButton>
        <p>News</p>
      </MenuItem>
      </Link>
      
      <Link className={classes.link} to='/Gallery'>
      <MenuItem>
        <IconButton color="inherit">
            <Photo/>
        </IconButton>
        <p>Gallery</p>
      </MenuItem>
      </Link>

      <MenuItem onClick={handleClickOpen}>
        <IconButton
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Subscribe</p>
      </MenuItem>

    </Menu>
  );

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
      
    <div className={classes.grow}>
      <AppBar position="fixed" style={{backgroundColor:'#000c4d'}}>
        <Toolbar>
        <Link to='/Home'>
          <img src={virus} alt='' style={{height:"32px",width:'32px'}}/>
        </Link>
        <Typography className={classes.title} variant="h6">
             Covid Tracker
        </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            
          <Link className={classes.link1} to='/Home'>
            <IconButton  color="inherit">
                <Home/>
            </IconButton>
          </Link>

          <Link className={classes.link1} to='/News'>
            <IconButton color="inherit">
              <Badge badgeContent="news" color="secondary">
                <Notifications />
              </Badge>
            </IconButton>
          </Link>

          <Link className={classes.link1} to='/Gallery'>
            <IconButton  color="inherit">
                <Photo/>
            </IconButton>
          </Link>
            
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
              onClick={handleClickOpen}
            >
              <AccountCircle />
            </IconButton>
          
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreVert/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
    </div>
  );
}