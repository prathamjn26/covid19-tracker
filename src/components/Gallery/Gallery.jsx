import React, { Component } from 'react';
import {GridList, GridListTile, GridListTileBar, IconButton, InputBase,Paper, Typography} from '@material-ui/core';
import {StarBorder,Search} from '@material-ui/icons';
import style from './Gallery.module.css';
import {fetchImagesData} from '../../api';
import {Pagination} from '@material-ui/lab';
import NotFound from '../NotFound/NotFound';
import Loading from '../Loading/Loading'; 

const getImage=(tile,i)=>{
  return(
    <GridListTile key={i} cols={i%9?1:2} rows={i%9?2:4} >
    <img src={tile.url} alt={tile.alt} />
    <GridListTileBar
      title={tile.user}
      titlePosition="top"
      actionIcon={
        <IconButton aria-label={`star ${tile.user}`} style={{color:'white'}} href={tile.link} target="_blank">
          <StarBorder />
        </IconButton>
      }
      actionPosition="left"
      style={{background:'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'}}
    />
   </GridListTile>
  );
}

const itemsPerPage=9;

class Gallery extends Component {
  state={
    dataImage:[],
    pageValue:1,
    noOfPages:0,
    value:'',
    isLoading:false
  }

  async componentDidMount()
  {
    const ImageData=await fetchImagesData();
    setTimeout(()=>{
      this.setState({
        dataImage:ImageData,
        noOfPages:Math.ceil(ImageData.length / itemsPerPage),
        isLoading:true
      })
    },3000)
    
  }

  handleChange=(event,value)=>{
    this.setState({
        pageValue:value
    })
}

handleSearch=(event)=>{
  this.setState({
    value:event.target.value
  })
}

handleValue=async(e)=>{
  e.preventDefault();  
  if(this.state.value!=='')
  {
    this.setState({
      dataImage: await fetchImagesData(this.state.value),
      value:'',
    })
  }
}

  render() {
    const {dataImage,noOfPages,pageValue,isLoading}=this.state
    return (
      <div>

      <Paper component="form" className={style.paper} elevation={3}>
        <InputBase
          className={style.input}
          placeholder="Search For Countries"
          inputProps={{ 'aria-label': 'search google maps' }}
          value={this.state.value}
          onChange={this.handleSearch}
        />
        <IconButton type="submit" onClick={this.handleValue} className={style.iconButton} aria-label="search">
          <Search />
        </IconButton>
      </Paper>

      {dataImage.length?<Paper elevation={3} className={style.paper1}>
          <Typography style={{fontSize:"2.5vw"}}>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
          </Typography>
      </Paper>:<div/>}

      <div className={style.root}>
        {isLoading?<GridList cellHeight={180} spacing={2} className={style.gridList}>
          {dataImage.length?dataImage.slice((pageValue-1)*itemsPerPage,pageValue*itemsPerPage).map((item,i)=>(getImage(item,i))):<NotFound/>}
        </GridList>:<Loading/>}

        {dataImage.length?<Pagination 
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
      </div>
    );
  }
}

export default Gallery;