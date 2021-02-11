import React from "react";
import styles from "../styles/BlogPreview.module.css";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import { Link } from "react-router-dom";

const BlogPreview = ({ data }) => {
  return (
    <li className={styles.container}>
      <div className={styles.thumbnail}>
        <img src={data.thumbnail} alt="blog post thumbnail" />
      </div>
      <section className={styles.postContent}>
        <div className={styles.postText}>
          <div className={styles.postTitle}>
            <h1>{data.title}</h1>
          </div>
          <div className={styles.postDate}>
            <CalendarTodayIcon />
            <h3>{data.createdAt}</h3>
          </div>
          <article className={styles.postBody}>
            <h3>{data.summary}</h3>
          </article>
        </div>
        <div className={styles.postRead}>
          <button className={styles.postReadButton}>
            <Link
              to={{
                pathname: `blog/${data.id}-${data.title}`,
                state: data,
              }}
            >
              READ BLOG
            </Link>
          </button>
        </div>
      </section>
    </li>
  );
};

export default BlogPreview;
