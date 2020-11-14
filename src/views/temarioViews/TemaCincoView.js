import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import cinco from "../../assets/img/cx/cinco.png";

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaCincoView extends Component {
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
          <Row>
            <Col xs="12" className="text-center mt-3">
              <h3>
                Experiencia de cliente no es <b>servicio</b>
              </h3>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="4" className="text-right">
              <p><b><span style={{ color: "#0070c0" }}>Servicio al cliente</span></b></p>
              <p>La prestación de un servicio <b>antes, durante y después</b> de la compra</p>
              <p><span style={{ color: "#ffc000" }}>Servicio al cliente</span></p>
              <p>Ayuda a definir la experiencia pero <b>no es la experiencia</b></p>
            </Col>
            <Col xs="4">
              <img
                src={cinco}
                // style={{ width: 500 }}
                alt="cinco"
                className="img-fluid  animated  bounceInRight delay-1s"
              />
            </Col>
            <Col xs="4">
              <p><b><span style={{ color: "#e34b59" }}>CX</span></b></p>
              <p>La experiencia de usuario <b>evalúa interacciones</b> con un entorno o dispositivo</p>
              <p><b><span style={{ color: "#a5a5a5" }}>CX</span></b></p>
              <p>Genera una <b>percepción positiva o negativa</b> de un servicio</p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaCincoView
