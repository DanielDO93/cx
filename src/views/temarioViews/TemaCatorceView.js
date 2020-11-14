import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import catorce from "../../assets/img/cx/catorce.png";

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaCatorceView extends Component {
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
                  ¿Por qué es importante para las empresas?
                </b>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col xs="12" className=" mt-3">
              <h3>
                ¿Por qué es importante para las empresas hablar de CX?
              </h3>
            </Col>
          </Row>
          <Row className="centrado-fila">
           
            <Col xs="8" md="9">
              <p className="text-justify">
                Se estima que el 85% de las pérdidas de clientes están relacionadas con una mala experiencia y
                un 55% de ellos manifiesta estar dispuesto a pagar más por una buena experiencia garantizada.
                Además, según algunos sondeos, sólo 1 de cada 26 clientes insatisfechos se queja; el resto se da 
                de baja.<br/>
                Es por esto que para lograr una buena experiencia para el consumidor las empresas deben ser capaces
                de generar una propuesta de valor que combine factores tanto informativos y funcionales, como 
                sensoriales, emocionales y sociales.

              </p>
            </Col>
            <Col xs="4" md="3">
              <div className="centrado-fila">
                <img
                  src={catorce}
                  //style={{ width: 700 }}
                  alt="catorce"
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
export default TemaCatorceView
