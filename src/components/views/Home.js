import React, { Component } from "react";
import { Form, Button, Card, Jumbotron, Container } from "react-bootstrap";

import { HttpClient } from "../../services/http_client";
export default class Home extends Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <br/>
          <Card>
            <Card.Header><h3 className="text-success">Sumador</h3></Card.Header>
            <Card.Body>
              <Form onSubmit={this.onSubmitAdder}>
                <Form.Group className="mb-3" controlId="validationCustom01">
                  <Form.Label>Primer Numero</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="34"
                    onChange={this.onChangeNumber1}
                    value={this.state.number1}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationCustom02">
                  <Form.Label>Segundo Numero</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="123"
                    onChange={this.onChangeNumber2}
                    value={this.state.number2}
                    required
                  />
                </Form.Group>

                <Button variant="success" type="submit">
                  Sumar
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </Jumbotron>
    );
  }

  state = {
    number1: "",
    number2: "",
  };

  onChangeNumber1 = (event) => {
    this.setState({ number1: event.target.value });
  };

  onChangeNumber2 = (event) => {
    this.setState({ number2: event.target.value });
  };

  cleanForm = () => {
    this.setState({ number1: "", number2: "" });
  };

  onSubmitAdder = async (event) => {
    event.preventDefault();
    let response = await HttpClient.post("/api/adder", {
      number1: parseInt(this.state.number1),
      number2: parseInt(this.state.number2),
    });
    console.log(response);
    if (response != null) {
      alert(`La suma es: ${response.result}`);
      this.cleanForm();
    } else {
      alert("Ocurrio un error, intente nuevamente");
    }
  };
}
