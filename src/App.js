import "./App.css";
import { Record } from "./components/Record";
import { NavBar } from "./components/NavBar";

import data from "./db.json"
const { collection } = data

function App() {
  return (
    <div className="App">
      <NavBar />
      {collection.length ? collection.map((props) => (
        <Record key={props.id} {...props} />
      )) : null}
    </div>
  );
}

export default App;
