import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import seis from "../../assets/img/cx/seis.png";

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaSeisView extends Component {
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
            <Col xs="12" className=" mt-3">
              <h3>
                Definición
              </h3>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="4" className="">
              <p>
                El CX incluye todas las interacciones con el cliente: parte web, atención física
                o telefónica, compra, soporte, etc.
              </p>
              <p>
                <b><span style={{ color: "#5b9bd5" }}>Técnicas</span></b><br />
                No es una disciplina sino el resultado de diversas técnicas como el servicio al cliente,
                control de calidad, estudio de mercado, etc.
              </p>
            </Col>
            <Col xs="4">
              <img
                src={seis}
                // style={{ width: 500 }}
                alt="seis"
                className="img-fluid  animated  bounceInRight delay-1s"
              />
            </Col>
            <Col xs="4">
              <p>
                <b><span style={{ color: "#ed7d31" }}>Interacciones</span></b><br />
                  Es el resultado de las interacciones que un cliente tiene con una organización durante su
                  relación.
                </p>
              <p>
                <b><span style={{ color: "#a5a5a5" }}>Customer journey</span></b><br/>
                   El foco está en el recorrido del cliente desde su primera interacción hasta que recibe un
                   servicio y la atención postventa
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaSeisView
