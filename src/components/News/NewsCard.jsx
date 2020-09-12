import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import style  from './News.module.css';

export const NewsCard=(props)=> {
  const {author,title,urlToImage,description,source,url}=props;
  return (
    <Card className={style.contain}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={author}
          height="140"
          image={urlToImage}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {source.name}
          </Typography>
          <div className={style.text}>
          <Typography variant="body2" color="textSecondary" component="p" >
            {description}
          </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary" target="_blank" href={url}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}