import React from "react";
import styles from "../styles/BlogPreview.module.css";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
} from "@material-ui/core";
import PB from "../assets/programmingBall.svg";
import { Link } from "react-router-dom";

const BlogPreview = ({ id, title, body, summary, createdAt, thumbnail }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={PB}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
}));

// const BlogPreview = ({ data }) => {
//   return (
//     <li className={styles.container}>
//       <div className={styles.thumbnail}>
//         <img src={data.thumbnail} alt="blog post thumbnail" />
//       </div>
//       <section className={styles.postContent}>
//         <div className={styles.postText}>
//           <div className={styles.postTitle}>
//             <h1>{data.title}</h1>
//           </div>
//           <div className={styles.postDate}>
//             <CalendarTodayIcon />
//             <h3>{data.createdAt}</h3>
//           </div>
//           <article className={styles.postBody}>
//             <h3>{data.summary}</h3>
//           </article>
//         </div>
//         <div className={styles.postRead}>
//           <button className={styles.postReadButton}>
//             <Link
//               to={{
//                 pathname: `blog/${data.id}-${data.title}`,
//                 state: data,
//               }}
//             >
//               READ BLOG
//             </Link>
//           </button>
//         </div>
//       </section>
//     </li>
//   );
// };

export default BlogPreview;
