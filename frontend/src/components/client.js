import { Component } from "react";
import axios from "axios";
import './styles/client.css';


class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      service: "",
      date: "",
      feedback: "",
      error: false,
    };
  }
  handleName = event=> {
    this.setState({
      name: event.target.value,
    });
  };
  handleService = event => {
    this.setState({
      service: event.target.value,
    });
  };
  handleDate = event=> {
    this.setState({
      date: event.target.value,
    });
  };
  handleFeedback = (event) => {
    this.setState({
      feedback: event.target.value,
    });
  };

  handleSubmit = event=> {
    event.preventDefault();

    const userObject = {
      name: this.state.name,
      service: this.state.service,
      date: this.state.date,
      feedback: this.state.feedback,
    };
    axios
      .post("http://localhost:8080/client", userObject)
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/");
      })
        
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="wrapper">
        <form  onSubmit={this.handleSubmit}>
          <div>
            {!this.state.name && this.state.error && (
              <p>{this.state.error.response.data.errors.name.message}</p>
            )}
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="name"
              value={this.state.name}
              onChange={this.handleName}
            />
          </div>
          <div>
            <label htmlFor="service">Service</label>
            <input
              type="text"
              placeholder="Service"
              value={this.state.service}
              onChange={this.handleService}
            />
          </div>
          <div>
            
            <label htmlFor="date">Date</label>
            <input
              type="date"
              placeholder="date"
              value={this.state.date}
              onChange={this.handleDate}
            />
          </div>
          <div>
            <label htmlFor="Feedback">Feedback</label>
            <input
              type="text"
              placeholder="feedback"
              value={this.state.feedback}
              onChange={this.handleFeedback}
            />
          </div>
          <button>BookAppointment</button>
        </form>
      </div>
    );
  }
}

export default Client;