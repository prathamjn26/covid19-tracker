import React, { Component } from 'react';
import {fetchNewsData} from '../../api';
import { Grid } from '@material-ui/core';
import {NewsCard} from './NewsCard';
import style from './News.module.css';
import { Pagination } from '@material-ui/lab';
import New from '../../images/news.png';

const NewsItem=(newsData,i)=>{
    return(
    <Grid item xs={12} sm={4} key={i}>
        <NewsCard {...newsData}/>
    </Grid>);
}

const itemsPerPage=6;

class News extends Component {
    state={
        news:[],
        pageValue:1,
        noOfPages:0
    }

    async componentDidMount()
    {
        const fetchedNews=await fetchNewsData();
        this.setState({
            news:fetchedNews.articles,
            noOfPages:Math.ceil(fetchedNews.articles.length / itemsPerPage)
        })
    }

    handleChange=(event,value)=>{
        this.setState({
            pageValue:value
        })
    }

    render() {
        const {news,noOfPages,pageValue}=this.state;
        
        return (
            <div className={style.container}>
            <img src={New} alt='News' className={style.image}/>
            <Grid container  spacing={3}>
                {news.length?news.slice((pageValue-1)*itemsPerPage,pageValue*itemsPerPage).map((item,i)=>NewsItem(item,i)):null}
            </Grid>

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
