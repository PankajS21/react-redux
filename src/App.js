import logo from "./logo.svg";
import "./App.css";

import { Provider } from "react-redux";
import { Store } from "./reduxContainer/Store";
import BookContainer from "./reduxContainer/BookContainer";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <BookContainer />
      </div>
    </Provider>
  );
}

export default App;
