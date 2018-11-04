import React, { Component } from "react";
// import { connect } from "react-redux";
// import { setBooks } from "./actions/books";
import axios from "axios";
import Menu from "./Menu";
import { Container, Card } from "semantic-ui-react";
import BookCard from "./BookCard";

class App extends Component {
  componentWillMount() {
    const { setBooks } = this.props;
    axios.get("/books.json").then(({ data }) => {
      setBooks(data);
    });
  }

  render() {
    const { books, isReady } = this.props;
    return (
      <Container>
        <Menu />
        <Card.Group itemsPerRow={4}>
          {!isReady
            ? "Загрузка..."
            : books.map((book, i) => <BookCard key={i} {...book} />)}
        </Card.Group>
      </Container>
    );
  }
}

export default App;
