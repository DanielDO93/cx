import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import ocho from "../../assets/img/cx/ocho.png";

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaOchoView extends Component {
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
                Objetivos
              </h3>
              <p>
                del CX
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <div className="centrado-fila">
                <img
                  src={ocho}
                  style={{ width: 600 }}
                  alt="ocho"
                  className="img-fluid  animated  bounceInRight delay-1s"
                />
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaOchoView
