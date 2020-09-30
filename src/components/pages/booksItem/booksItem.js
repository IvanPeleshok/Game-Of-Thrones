import React, { Component } from "react";
import GotService from "../../../service";
import CharDetails, { Field } from "../../charDetails";

export default class BooksItem extends Component {
  gotService = new GotService();

  render() {
    return (
      <CharDetails
        id={this.props.bookId}
        getData={this.gotService.getBook}
      >
        <Field field="numberOfPages" label="Number of page" />
        <Field field="released" label="Released" />
      </CharDetails>
    );
  }
}
