import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './components/views/Home';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
    </Router>
  );
}

export default App;
