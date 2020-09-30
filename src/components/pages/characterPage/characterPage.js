import React, { Component } from "react";
import RowBlock from "../../rowBlock";
import ItemList from "../../itemList";
import CharDetails, { Field } from "../../charDetails";
import ErrorMassage from "../../errorMessage";
import GotService from "../../../service";

export default class CharacterPage extends Component {
  gotService = new GotService();
  state = {
    selectedChar: 130,
    error: false,
  };

  onItemSelected = (id) => {
    this.setState({ selectedChar: id });
  };

  componentDidCatch() {
    this.setState({ erorr: true });
  }

  render() {
    if (this.state.error) {
      return <ErrorMassage />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllCharacters}
        renderItem={(item) => item.name}
      />
    );

    const charDetails = (
      <CharDetails
        id={this.state.selectedChar}
        getData={this.gotService.getCharacter}
      >
        <Field field="gender" label="Gender" />
        <Field field="born" label="Born" />
        <Field field="died" label="Died" />
        <Field field="culture" label="Culture" />
      </CharDetails>
    );

    return <RowBlock left={itemList} right={charDetails} />;
  }
}
