import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'
import dos from "../../assets/img/cx/dos.png";

class TemaDieciochoView extends Component {
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
                  Ventajas de una Experiencia al Cliente
                </b>
              </h2>
              <h3 className="mt-3">
                Ventajas de una Experiencia al Cliente

              </h3>
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
                  Si tus clientes tuvieran todo lo que necesitaran de tu servicio y estuvieran satisfechos,
                  ¿cómo <b>impactaría</b> tu negocio?
                </li>
                <li className="mt-3">
                  ¿Te permitiría generar <b>acuerdos nuevos</b> o renovar los actuales?
                </li>
                <li className="mt-3">
                  ¿Qué <b>dirían</b> tus clientes de tu negocio?
                </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDieciochoView
