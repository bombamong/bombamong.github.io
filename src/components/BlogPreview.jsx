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

const BlogPreview = ({ data }) => {
  const { id, title, body, summary, createdAt, thumbnail } = data;
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
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ borderTop: "0.5px solid lightgrey" }}>
        <Button size="small" color="primary">
          <Link
            style={{
              backgroundColor: "rgba(144,238,144, 0.5)",
              boxShadow: "0 0.5px 2px 0 rgba(0, 0, 0, 0.5)",
              padding: "0.5em",
              textDecoration: "none",
              color: "black",
              cursor: "pointer",
            }}
            to={{
              pathname: `blog/post/${id}-${title}`,
              state: data,
            }}
          >
            Read blog
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: "rgba( 230, 230, 230, 0.25 )",
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
