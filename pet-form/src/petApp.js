import React from 'react';
import { Container, Col, Row, Jumbotron, Form, Button } from 'react-bootstrap';
import Logo from './zenva-academy.png';
import DogForm from './dogForm'
import CatForm from './catForm'

class Pet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDogPage: false,
      isCatPage: false,
      isClientPage: true,
    };

    this.enableDogPage = this.enableDogPage.bind(this);
    this.enableCatPage = this.enableCatPage.bind(this);
  }

  enableDogPage() {
    this.setState({
      isDogPage: true,
      isClientPage: false,
    });
  }

  enableCatPage() {
    this.setState({
      isCatPage: true,
      isClientPage: false,
    });
  }

  render() {
      var clientComp = 

      return()
  }
}

export default Pet;