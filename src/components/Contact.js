import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: true,
    };
  }

  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt="props.name" />
        <div className="status">
          <h3 className="name">{this.props.name}</h3>
          <span className={this.state.online ? "status-online" : "status-offline"}
            onClick={event => {
              const statusChange = !this.state.online;
              this.setState({ online: statusChange });
            }}></span>
          <p className="status-text">{this.state.online ? "online" : "offline"}</p>
        </div>
      </div>
    );
  }
};

export default Contact
