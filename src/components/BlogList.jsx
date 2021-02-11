import React from "react";
import BlogPreview from "./BlogPreview";
import styles from "../styles/BlogList.module.css";

const BlogList = props => {
  return (
    <div className={styles.container}>
      <ul className={styles.bloglist}>
        <BlogPreview
          data={{
            id: 1,
            title: "hello",
            body: "# nutella" + "\n" + "***so Good***",
            summary: "some things about life",
            createdAt: new Date().toLocaleDateString(),
            thumbnail: "https://picsum.photos/300/300",
          }}
        />
        <BlogPreview
          data={{
            id: 2,
            title: "hello",
            body:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            summary: "some things about life",
            createdAt: new Date().toLocaleDateString(),
            thumbnail: "https://picsum.photos/300/300",
          }}
        />
        <BlogPreview
          data={{
            id: 3,
            title: "hello",
            body:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            summary: "some things about life",
            createdAt: new Date().toLocaleDateString(),
            thumbnail: "https://picsum.photos/300/300",
          }}
        />
        <BlogPreview
          data={{
            id: 4,
            title: "hello",
            body: `
\`\`\`javascript
let i = 0;
let b = 2;
\`\`\`
            `,
            summary: "some things about life",
            createdAt: new Date().toLocaleDateString(),
            thumbnail: "https://picsum.photos/300/300",
          }}
        />
        <BlogPreview
          data={{
            id: 5,
            title: "hello",
            body:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            summary: "some things about life",
            createdAt: new Date().toLocaleDateString(),
            thumbnail: "https://picsum.photos/300/300",
          }}
        />
      </ul>
    </div>
  );
};

export default BlogList;
