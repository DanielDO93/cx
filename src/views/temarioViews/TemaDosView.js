import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'
import dos from "../../assets/img/cx/dos.png";

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>CX</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12 mt-3">
              <h2
                className="animated slideInUp delay-0 mb-2"
                style={{ marginBottom: '0px' }}
              >
                <b>
                  Experiencia al cliente (CX)
                </b>
              </h2>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="4" md="3">
              <img
                src={dos}
                // style={{ width: 500 }}
                alt="dos"
                className="img-fluid  animated  bounceInRight delay-1s"
              />
            </Col>
            <Col xs="5" md="6">
              <p>
                Reflexiona…
              </p>
              <ul>
                <li>
                  ¿Cuál es tu <b>restaurante</b> favorito?
                </li>
                <li className="mt-3">
                  ¿Por qué <b>regresas</b> allí?
                </li>
                <li className="mt-3">
                  ¿Cuál ha sido tu <b>peor experiencia</b> en un negocio?
                </li>
                <li>
                  ¿Qué empresa <b>recomendarías</b>?
                </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
