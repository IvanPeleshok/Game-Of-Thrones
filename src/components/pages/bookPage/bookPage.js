import React, { Component } from "react";
import ItemList from "../../itemList";
import ErrorMassage from "../../errorMessage";
import GotService from "../../../service";
import { withRouter } from "react-router-dom";

class BookPage extends Component {
  gotService = new GotService();
  state = {
    error: false,
  };

  componentDidCatch() {
    this.setState({ erorr: true });
  }

  render() {
    if (this.state.error) {
      return <ErrorMassage />;
    }

    return (
      <ItemList
        onItemSelected={(id) => {
          console.log(id);
          this.props.history.push(`${id}`);
        }}
        getData={this.gotService.getAllBooks}
        renderItem={(item) => item.name}
      />
    );
  }
}

export default withRouter(BookPage);
