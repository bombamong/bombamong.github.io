import React, { useState, useEffect } from "react";
import styles from "../styles/Blog.module.css";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const Blog = ({ location: { state: data } }) => {
  const emptyBlog = `this blog is empty`;
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(data);
  });

  return (
    <div className={styles.container}>
      {/* <textarea
        onKeyDown={e => {
          setMd(e.target.value);
        }}
      /> */}
      <section className={styles.blogTextContainer}>
        <header className={styles.blogHeader}>
          <h1>{data.title || "Title not available"}</h1>
        </header>
        <ReactMarkdown
          renderers={renderers}
          className={styles.blogBody}
          children={data.body || emptyBlog}
        />
      </section>
    </div>
  );
};

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter
        style={vscDarkPlus}
        language={language || "javascript"}
        children={value || " "}
        wrapLines={true}
        showLineNumbers
      />
    );
  },
};
export default Blog;
