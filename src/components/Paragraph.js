import { Component } from "react";
import DemoContext from "../DemoContext";

class Paragraph extends Component {
  // another way to consume context in class based component
  static contextType = DemoContext;

  componentWillUnmount() {
    // this will be called when Paragraph component removed from dom
    console.log("component will unmount called");
  }

  render() {
    return <p>{this.context.value}</p>;
  }
  //     return (
  //       <DemoContext.Consumer>
  //         {(context) => {
  //           return <p>{context.value}</p>;
  //         }}
  //       </DemoContext.Consumer>
  //     );
  //   }
}

export default Paragraph;
