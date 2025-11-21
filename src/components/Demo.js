import { Component } from "react";
import Paragraph from "./Paragraph";

class Demo extends Component {
  constructor() {
    super();
    this.state = { showParagraph: true, count: 0 };
  }

  componentDidMount() {
    //logic to handel side effects
    console.log("component did mount called");
  }

  componentDidUpdate(prevProps, prevState) {
    //logic to handel side effects whenever state changes
    // console.log("component did update called");

    // if (prevState.count != this.state.count) {
    //   this.setState({ count: this.state.count + 1 });
    // }

    throw new Error("An error occured ");
  }

  toggleParagraph() {
    console.log(this);
    this.setState((currentState) => {
      return { showParagraph: !currentState.showParagraph };
    });
  }
  render() {
    return (
      <>
        <h3>{this.props.name}</h3>
        {this.state.showParagraph && <Paragraph />}
        <button onClick={this.toggleParagraph.bind(this)}>
          {this.state.showParagraph ? "Hide" : "Show"}
        </button>
      </>
    );
  }
}

export default Demo;
