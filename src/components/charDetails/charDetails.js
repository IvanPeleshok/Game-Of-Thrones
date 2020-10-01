import React, { Component } from "react";
import Spinner from "../spinner";
import "./charDetails.css";
import ErrorMassage from "../errorMessage";

const Field = ({ item, field, label }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export default class charDetails extends Component {

  state = {
    item: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updateChar();
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.updateChar();
    }
  }

  onCharDetailsLoaded = (item) => {
    this.setState({
      item,
      loading: false,
    });
  };

  updateChar() {
    const { id } = this.props;
    if (!id) {
      return;
    }

    this.setState({
      loading: true,
    });


    const {getData} = this.props; 

    getData(id)
      .then(this.onCharDetailsLoaded)
      // .catch(() => this.onError());
  }

  onError() {
    this.setState({
      item: null,
      error: true,
    });
  }

  render() {
    if (!this.state.item && this.state.error) {
      return <ErrorMassage />;
    } else if (!this.state.item) {
      return <Spinner/>
    }

    const { item } = this.state;
    const { name } = item;

    if (this.state.loading) {
      return (
        <div className="char-details rounded">
          <Spinner />
        </div>
      );
    }

    return (
      <div className="char-details rounded">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {
          React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {item})
          })
          }
        </ul>
      </div>
    );
  }
}

export { Field };
