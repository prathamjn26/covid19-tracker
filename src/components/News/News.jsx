import React, { Component } from 'react';
import {fetchNewsData} from '../../api';
import { Grid, Paper, Typography } from '@material-ui/core';
import {NewsCard} from './NewsCard';
import style from './News.module.css';
import { Pagination } from '@material-ui/lab';
import Loading from '../Loading/Loading';

const NewsItem=(newsData,i)=>{
    return(
    <Grid item xs={12} sm={4} key={i}>
        <NewsCard {...newsData}/>
    </Grid>);
}

const itemsPerPage=15;

class News extends Component {
    state={
        news:[],
        pageValue:1,
        noOfPages:0,
        isLoading:false
    }

    async componentDidMount()
    {
        const fetchedNews=await fetchNewsData();
        setTimeout(()=>{
            this.setState({
                news:fetchedNews.articles,
                noOfPages:Math.ceil(fetchedNews.articles.length / itemsPerPage),
                isLoading:true
            })
        },3000)
    }

    handleChange=(event,value)=>{
        this.setState({
            pageValue:value
        })
    }

    render() {
        const {news,noOfPages,pageValue,isLoading}=this.state;
        
        return (
            <div className={style.container}>
            <Paper elevation={3} className={style.paper}>
                <Typography style={{fontSize:"3vw"}}>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                </Typography>
            </Paper>
            {isLoading?
            <Grid container  spacing={3}>
                {news.length?news.slice((pageValue-1)*itemsPerPage,pageValue*itemsPerPage).map((item,i)=>NewsItem(item,i)):null}
            </Grid>:<Loading style={{margin:"auto"}}/>}

            {news.length?<Pagination 
            count={noOfPages} 
            page={pageValue}
            value={pageValue}
            onChange={this.handleChange}
            defaultPage={1}
            size="large"
            color="secondary" 
            className={style.page}
            />:null}
            </div>
        );
    }
}

export default News;
