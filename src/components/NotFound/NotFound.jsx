import React, { Component } from 'react';
import { Paper, Typography } from '@material-ui/core';
import error from '../../images/error.svg';
class NotFound extends Component {
    render() {
        return (
            <div style={{textAlign:"center",margin:"50px 2px"}}>
                <Paper elevation={3} style={{padding:"20px"}}>
                    <img src={error} alt="" style={{height:"100px",width:"100px"}}/>
                    <Typography>Please Enter</Typography><Typography>Correct Country Name</Typography>
                </Paper>
            </div>
        );
    }
}

export default NotFound;