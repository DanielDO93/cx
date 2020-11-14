import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import diez from "../../assets/img/cx/diez.png";

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaDiezView extends Component {
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
                Conceptos básicos asociados al CX:
              </h3>
              <p>
                Forman una cadena de valor, que conecta aspectos como las emociones, que antes se consideraban
                “intangibles”, con factores de negocios como la rentabilidad.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md="3">
              <div className="centrado-fila">
                <img
                  src={diez}
                  style={{ width: 300 }}
                  alt="diez"
                  className="img-fluid  animated  bounceInRight delay-1s"
                />
              </div>
            </Col>
            <Col xs="12" md="9" >
              <Row className="centrado-fila">
                <Col xs="6" style={{ borderBottom: "solid 1px", borderRight: "solid 1px", textAlign: "right" }} >
                  <h3 style={{ color: "#9dc3e6" }}>
                    Emociones
                  </h3>
                  <p><b>SENSACIONES</b></p>
                  <p>Que experimentan los usuarios, como felicidad, nostalgia, empatía y más.</p>
                </Col>
                <Col xs="6" style={{ borderBottom: "solid 1px" }}>
                  <h3 style={{ color: "#ea7425" }}>
                    Recuerdos
                  </h3>
                  <p><b>PERCEPCIONES  </b></p>
                  <p>Que tienen los clientes sobre la empresa, que condicionan la forma en que desarrollará.</p>
                </Col>
              </Row>
              <Row>
                <Col xs="6" style={{borderRight:"solid 1px", textAlign:"right"}}>
                  <h3 style={{ color: "#ffc000" }}>
                    Comportamientos
                  </h3>
                  <p><b>EMOCIONES </b></p>
                  <p>Y recuerdos en los usuarios se estimulan nuevos hábitos en ellos, por ejemplo, de consumo.</p>
                </Col>
                <Col xs="6">
                  <h3 style={{ color: "#2e75b6" }}>
                  Resultados
                  </h3>
                  <p><b>DE NEGOCIO</b></p>
                  <p>
                    Lo que se genera luego de aplicar todo lo mencionado y que sustenta la viabilidad de la
                    estrategia en general.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDiezView
