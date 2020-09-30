import React, { Component } from "react";
import { Col, Row, Container, Button } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import "./app.css";
import ErrorMessage from "../errorMessage";
import CharacterPage from "../pages/characterPage";
import BookPage from "../pages/bookPage";
import HousePage from "../pages/housePage";
import BooksItem from "../pages/booksItem";
import GotService from "../../service";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component {
  gotService = new GotService();

  state = {
    open: false,
    error: false,
  };

  componentDidCatch() {
    console.log("error");
    this.setState({ error: true });
  }

  getRandomChar = () => {
    this.setState(({ open }) => {
      return {
        open: !open,
      };
    });
  };

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }
    const { open } = this.state;
    const button = open ? <RandomChar /> : null;
    return (
      <Router>
        <div className="app">
          <Container>
            <Header />
          </Container>
          <Container>
            <Row>
              <Col lg={{ size: 5, offset: 0 }}>{button}</Col>
            </Row>
            <Row>
              <Col>
                <Button
                  className="btn"
                  color="primary"
                  onClick={this.getRandomChar}
                >
                  Toggle Random
                </Button>
              </Col>
            </Row>
            <Route path="/" exact component={() => <h1>Welcome to the my website</h1>}/>
            <Route path="/characters" exact component={CharacterPage} />
            <Route path="/houses" exact component={HousePage} />
            <Route path="/books" exact component={BookPage} />
            <Route
              path="/books/:id"
              render={({ match }) => {
                const id = match.params.id;
                return <BooksItem bookId={id} />;
              }}
            />
          </Container>
        </div>
      </Router>
    );
  }
}
