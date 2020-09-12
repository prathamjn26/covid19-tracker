import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import style  from './News.module.css';
import image from '../../images/error-404.png';

const news="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in tortor dolor. Sed viverra convallis lorem, eu iaculis mi rutrum eu. Phasellus gravida porta risus a varius. Vivamus ullamcorper pharetra sem, in tristique velit ornare ut. Nunc efficitur egestas orci eu cursus. In eget neque tellus";

export const NewsCard=(props)=> {
  const {author,title,urlToImage,description,source,url}=props;
  return (
    <Card className={style.contain}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={author}
          height="140"
          image={urlToImage?urlToImage:image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2" noWrap>
            {source.name}
          </Typography>
          <div className={style.text}>
          <Typography variant="body2" color="textSecondary" component="p" >
            {description?description:news}
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