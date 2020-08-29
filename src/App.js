import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import Home from './components/Home';
import Blog from './components/Blog';
import Projects from './components/Projects';
import About from './components/About';
import Weather from './components/Weather';


function App() {
  let [posts, setPosts] = useState([
      { title: 'Hello, World', body: 'Goodbye, World' },
      { title: 'Hi, there loner', body: 'I have no friends too..' },
      { title: 'Your mind,', body: 'is a colloseum it spits diamonds that glisten.'}
    ]);

  return (
    <div className="App">
      <Router>
          <div>
            <Link to="/">Home</Link>{' '}
            <Link to="/blog">Blog</Link>{' '}
            <Link to="/projects">Projects</Link>{' '}
            <Link to="/about">About</Link>{' '}
            <Link to="/weather">Weather</Link>{' '}
            <Route exact path="/" component={Home} />
            <Route path="/blog" render={() => (
                <Blog posts={posts} />
              )} />
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
            <Route path="/weather" component={Weather} />
          </div>
      </Router>
    </div>
  );
}

export default App;

