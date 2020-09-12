import React, { Component } from 'react';
import { CircularProgress, Paper } from '@material-ui/core';

class Loading extends Component {
    render() {
        return (
            <div style={{textAlign:"center",justifyContent:"center",alignItem:"center",margin:'auto'}}>
                <Paper elevation={6} style={{width:"80px",height:"80px",margin:'auto'}}>
                <div style={{textAlign:"center"}}>
                <CircularProgress style={{marginTop:'16px'}}/>
                </div>
                </Paper>
            </div>
        );
    }
}

export default Loading;
