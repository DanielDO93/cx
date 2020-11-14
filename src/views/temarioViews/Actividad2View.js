import React, { Component } from 'react'
import {
  CardBody,
  CardHeader,
  Col,
  Row,
 
  Form,
  // FormGroup,
  // Label,
  // Input,
} from 'reactstrap'
import Arrastrables from './componentsExtras/Arrastrables'


class ActividadView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )



  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }



  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <CardHeader className="">
              <h2> Evaluación 1: </h2>
            </CardHeader>
            <CardBody className="">
              <Row className="centrado-fila">
                <Col xs="12">
                  <p>
                    Se mencionaron algunos y su significado; Relaciona la columna de la izquierda de los conceptos
                    claves de CX con las descripciones del lado derecho de acuerdo con su significado:
                  </p>
                </Col>

              </Row>

              <Form>

                <div className="cajaA2" style={{ backgroundColor: '#d5d4d8' }}>
                  <Arrastrables />
                  {/* <FormGroup>
                    <Row>
                      <Col xs="4">
                        <Label for="palabra1Acuerto1">
                          <b>ger </b> 1
                        </Label>
                        <Input
                          type="text"
                          name="palabra1Acuerto1"
                          id="palabra1Acuerto1"
                          value={this.state.palabra1Acuerto1}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="palabra1Acuerto2">
                          <b>ger </b> 2
                        </Label>
                        <Input
                          type="text"
                          name="palabra1Acuerto2"
                          id="palabra1Acuerto2"
                          value={this.state.palabra1Acuerto2}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="palabra1Acuerto3">
                          <b>ger </b> 3
                        </Label>
                        <Input
                          type="text"
                          name="palabra1Acuerto3"
                          id="palabra1Acuerto3"
                          value={this.state.palabra1Acuerto3}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                </div>
                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup>
                    <Row>
                      <Col xs="4">
                        <Label for="palabra2Acuerto1">
                          <b>gir</b> 1
                        </Label>
                        <Input
                          type="text"
                          name="palabra2Acuerto1"
                          id="palabra2Acuerto1"
                          value={this.state.palabra2Acuerto1}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="palabra2Acuerto2">
                          <b>gir</b> 2
                        </Label>
                        <Input
                          type="text"
                          name="palabra2Acuerto2"
                          id="palabra2Acuerto2"
                          value={this.state.palabra2Acuerto2}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="palabra2Acuerto3">
                          <b>gir</b> 3
                        </Label>
                        <Input
                          type="text"
                          name="palabra2Acuerto3"
                          id="palabra2Acuerto3"
                          value={this.state.palabra2Acuerto3}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                </div>
                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup>
                    <Row>
                      <Col xs="4">
                        <Label for="palabra3Acuerto1">
                          <b>giar</b> 1
                        </Label>
                        <Input
                          type="text"
                          name="palabra3Acuerto1"
                          id="palabra3Acuerto1"
                          value={this.state.palabra3Acuerto1}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="palabra3Acuerto2">
                          <b>giar</b> 2
                        </Label>
                        <Input
                          type="text"
                          name="palabra3Acuerto2"
                          id="palabra3Acuerto2"
                          value={this.state.palabra3Acuerto2}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="palabra3Acuerto3">
                          <b>giar</b> 3
                        </Label>
                        <Input
                          type="text"
                          name="palabra3Acuerto3"
                          id="palabra3Acuerto3"
                          value={this.state.palabra3Acuerto3}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                </div>
                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup>
                    <Row>
                      <Col xs="4">
                        <Label for="palabra4Acuerto1">
                          <b>gia</b> 1
                        </Label>
                        <Input
                          type="text"
                          name="palabra4Acuerto1"
                          id="palabra4Acuerto1"
                          value={this.state.palabra4Acuerto1}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="palabra4Acuerto2">
                          <b>gia</b> 2
                        </Label>
                        <Input
                          type="text"
                          name="palabra4Acuerto2"
                          id="palabra4Acuerto2"
                          value={this.state.palabra4Acuerto2}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="palabra4Acuerto3">
                          <b>gia</b> 3
                        </Label>
                        <Input
                          type="text"
                          name="palabra4Acuerto3"
                          id="palabra4Acuerto3"
                          value={this.state.palabra4Acuerto3}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                </div>
                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup>
                    <Row>
                      <Col xs="4">
                        <Label for="palabra5Acuerto1">
                          <b>gio</b> 1
                        </Label>
                        <Input
                          type="text"
                          name="palabra5Acuerto1"
                          id="palabra5Acuerto1"
                          value={this.state.palabra5Acuerto1}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="palabra5Acuerto2">
                          <b>gio</b> 2
                        </Label>
                        <Input
                          type="text"
                          name="palabra5Acuerto2"
                          id="palabra5Acuerto2"
                          value={this.state.palabra5Acuerto2}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="palabra5Acuerto3">
                          <b>gio</b> 3
                        </Label>
                        <Input
                          type="text"
                          name="palabra5Acuerto3"
                          id="palabra5Acuerto3"
                          value={this.state.palabra5Acuerto3}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                    </Row>
                  </FormGroup> */}
                </div>


              </Form>

              <div>{/* <p>{JSON.stringify(this.state)}</p> */}</div>
            </CardBody>
          </Col>

        </Row>
      </div>
    )
  }
}
export default ActividadView
