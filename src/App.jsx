import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NavBar from "./components/Navbar";
import Blog from "./pages/Blog";
import PostBlog from "./pages/PostBlog";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/blog/:slug" component={Blog} />
        <Route path="/blogp" component={PostBlog} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
