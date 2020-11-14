import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'
import dos from "../../assets/img/cx/dos.png";

class TemaTreceView extends Component {
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
              
              <h3 className="mt-3">
                ¿Por qué es importante para las empresas hablar de CX?
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
                  Como empresa, ¿comprendes las <b>necesidades</b> de tus clientes?
                </li>
                <li className="mt-3">
                  ¿Cómo identificarás los <b>nuevos retos</b>?
                </li>
                <li className="mt-3">
                  Si se le preguntara a tus clientes, ¿<b>qué dirían</b> de tu empresa?
                </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaTreceView
