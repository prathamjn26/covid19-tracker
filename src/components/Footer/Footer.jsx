import React, { Component } from 'react';
import { Grid, Typography,Card } from '@material-ui/core';
import { GitHub, LinkedIn, Mail, Instagram } from '@material-ui/icons';
import Style from './Footer.module.css';
import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div >
        <Card className={Style.container} style={{backgroundColor:"#000835"}}>
          <Grid container spacing={2} className={Style.links}>
          <Grid item >
            <Link to='/Home'><Typography variant="subtitle2" className={Style.link}>Home</Typography></Link>
          </Grid>
          <Grid item >
            <Link to="/News"><Typography variant="subtitle2" className={Style.link}>News</Typography></Link>
          </Grid>
          <Grid item >
            <Link to="/Gallery"><Typography variant="subtitle2" className={Style.link}>Gallery</Typography></Link>
          </Grid>
          <Grid item >
            <Typography variant="subtitle2" className={Style.link}>Subscribe</Typography>
          </Grid>
          <Grid item >
            <Link to='/About'><Typography variant="subtitle2" className={Style.link}>About</Typography></Link>
          </Grid>
          </Grid><br/>

          <Grid container spacing={2} className={Style.links}>
            <Grid item>
              <GitHub/>
            </Grid>
            <Grid item>
              <LinkedIn/>
            </Grid>
            <Grid item>
              <Mail/>
            </Grid>
            <Grid item>
              <Instagram/>
            </Grid>
            </Grid><br/>
          <div style={{textAlign:"center"}}>
          <a href='https://github.com/prathamjn26/covid19-tracker' style={{textDecoration:"none"}}>
            <Typography variant="body2" color="secondary">
              @GitHub/prathamjn26
            </Typography></a>
          </div>
          </Card>
          </div>
    );
  }
}

export default Footer;
