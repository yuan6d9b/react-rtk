import React, { PureComponent } from "react";
import Count from "./Count";
import Home from "./Home";
export class App extends PureComponent {
  render() {
    return (
      <div>
        <Home></Home>
        <hr />
        <p>Count</p>
        <Count></Count>
      </div>
    );
  }
}

export default App;
