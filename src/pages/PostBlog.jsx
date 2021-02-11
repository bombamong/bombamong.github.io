import React, { useState, useEffect } from "react";
import styles from "../styles/PostBlog.module.css";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import gfm from "remark-gfm";

const PostBlog = ({ location: { state: data } }) => {
  const [md, setMd] = useState(`${data ? data.body : ""}`);
  const [mdPreviewMode, setMdPreviewMode] = useState(false);
  const [blogTitle, setBlogTitle] = useState(data ? data.title : "N/A");

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const handleBlogTitleChange = e => {
    if (!mdPreviewMode) setBlogTitle(e.target.value);
  };

  const handleEditModeChange = e => {
    setMdPreviewMode(!mdPreviewMode);
  };

  const handleEditorChange = e => {
    e.preventDefault();
    setMd(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (!md) {
      alert("nothing to submit");
      return;
    }
    // get blog data
    // title, summary, tags, etc
    // get auth
    // send blog to server
    alert("submitted");
  };

  const handleKeyPress = e => {
    if (e.code === "Tab") {
      e.preventDefault();
      let pos = e.target.selectionStart;
      let front = md.slice(0, pos);
      let back = md.slice(pos);
      let newStr = "";
      if (pos === 0 || pos === "0") return;
      if (e.shiftKey) {
        //erase 2 spaces
        let cursorChange = false;
        for (let i = 1; i <= 2; i++) {
          if (front[front.length - 1] === " ") {
            front = front.slice(0, -1);
            cursorChange = true;
          }
        }
        newStr = front + back;
        e.target.value = newStr;
        setMd(newStr);
        if (cursorChange) {
          e.target.setSelectionRange(pos + -2, pos + -2);
        }
      } else {
        //add 2 spaces;
        newStr = front + "  " + back;
        e.target.value = newStr;
        setMd(newStr);
        e.target.setSelectionRange(pos + 2, pos + 2);
      }
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleFormSubmit} className={styles.blogForm}>
        <div className={styles.blogTextEditorToggle}>
          <button
            onClick={handleEditModeChange}
            className={styles.blogHeaderEditButton}
          >
            {mdPreviewMode ? "MARKDOWN" : "PREVIEW"}
          </button>
        </div>
        {/* <input
          type={"text"}
          className={styles.blogHeader}
          onChange={handleBlogTitleChange}
          value={blogTitle}
          spellCheck={!mdPreviewMode}
        /> */}
        {mdPreviewMode ? (
          <ReactMarkdown
            renderers={renderers}
            className={styles.blogBody}
            children={md}
            plugins={gfm}
          />
        ) : (
          <div className={styles.blogBody}>
            <textarea
              className={styles.blogBodyTextEditor}
              onDrop={e => {
                e.preventDefault();
                console.log(e.dataTransfer.files[0]);
              }}
              onChange={handleEditorChange}
              onKeyDown={handleKeyPress}
              value={md}
            />
          </div>
        )}
        <div>
          <button>Submit</button>
        </div>
      </form>
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

export default PostBlog;
