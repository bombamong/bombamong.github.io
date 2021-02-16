import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import DrawerNav from "./components/DrawerNav";
import Blog from "./pages/Blog";
import PostBlog from "./pages/PostBlog";
import BlogHome from "./pages/BlogHome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./styles/theme";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DrawerNav />
        <Switch>
          <Route exact path="/blog/post/:slug" component={Blog} />
          <Route path="/blog" component={BlogHome} />
          <Route path="/blogp" component={PostBlog} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
