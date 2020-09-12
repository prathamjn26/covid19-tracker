import React, { Component } from 'react';
import { Paper, Typography } from '@material-ui/core';
import style from './About.module.css';

class About extends Component {
    render() {
        return (
            <div className={style.container}>
                <Paper className={style.paper}>
                    <Typography variant="h5">
                        About
                    </Typography><br/>
                    <Typography >
                    Its is a portal for the public to keep track of the latest 
                    about the COVID-19, its shows the data in the form of garphs so that it is easy for 
                    public to analysis the situation accross the world and in their own country. 
                    All the contents are picked using API, 
                    to our best extent to ensure that sources are reliable 
                    with minimal hoaxes and fake news, in the best benefit of the public.

                    It also contains News accross the country (India) ,due to this pandemic.
                    And also contains the images of the world, which can be filtered by their country name.
                    </Typography><br/>
                    <Typography variant="h6">
                        Technology Used:
                    </Typography>
                    <Typography variant="body1">
                    1. Reactjs<br/>
                    2. React router<br/>
                    3. Material ui<br/>
                    </Typography><br/>
                    <Typography variant="h6">
                        Tools Used:
                    </Typography>
                    <Typography variant="body1">
                        1. VScode<br/>
                    </Typography><br/>
                    <Typography variant="h6">
                        Reference:
                    </Typography>
                    <Typography variant="body1">
                        1. YouTube (https://youtu.be/khJlrj3Y6Ls)<br/>
                        2. Material Ui Documentation<br/>
                        3. Reactjs Documentation<br/>
                        4. StackOverflow<br/>
                    </Typography>
                </Paper>
            </div>
        );
    }
}

export default About;
