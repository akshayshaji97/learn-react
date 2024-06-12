import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
        count: 0,
    }
    console.log("Constructor called");
  }

  componentDidMount(){
    console.log("did mount called");
  }

  componentDidUpdate() {
    console.log("did update called");
  }
  componentWillUnmount() {
    console.log("will unmount called");
  }
  render() {
    console.log("Render called");
    return (
      <div>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: Kochi</h3>
        <h4>Email: akshay525@gmial.com</h4>
      </div>
    );
  }
}

export default UserClass;
