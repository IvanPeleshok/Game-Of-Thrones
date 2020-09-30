import React, { Component } from "react";
import RowBlock from "../../rowBlock";
import ItemList from "../../itemList";
import CharDetails, { Field } from "../../charDetails";
import ErrorMassage from "../../errorMessage";
import GotService from "../../../service";

export default class HousePage extends Component {
  gotService = new GotService();
  state = {
    selectedChar: 2,
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
        getData={this.gotService.getAllHouses}
        renderItem={(item) => item.name}
      />
    );

    const charDetails = (
      <CharDetails
        id={this.state.selectedChar}
        getData={this.gotService.getHouse}
      >
        <Field field="region" label="Region" />
        <Field field="words" label="Words"/>
      </CharDetails>
    );


    return <RowBlock left={itemList} right={charDetails} />;
  }
}
