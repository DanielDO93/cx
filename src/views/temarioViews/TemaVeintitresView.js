import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'
import dos from "../../assets/img/cx/dos.png";

class TemaVeintitresView extends Component {
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
                  Factores que causan una mala experiencia al cliente
                </b>
              </h2>
              {/* <h3 className="mt-3">
                Ventajas de una Experiencia al Cliente

              </h3> */}
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
                  ¿Cuál es la <b>queja</b> más común de tus clientes sobre tu servicio?
                </li>
                <li className="mt-3">
                  ¿Cuál es <b>tu queja</b> más grande sobre el desempeño de las diferentes áreas en tu organización?
                </li>
                <li className="mt-3">
                  ¿Cómo puedes detectar y <b>solucionar</b> esas problemáticas?
                </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaVeintitresView
