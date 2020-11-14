import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import siete from "../../assets/img/cx/siete.png";
import siete1 from "../../assets/img/cx/siete1.png";
import siete2 from "../../assets/img/cx/siete2.png";

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaSieteView extends Component {
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
                Impacta el valor económico que genera una organización
              </h3>
            </Col>
            <Col xs="12">
              <p>
                Es producto de las percepciones de un cliente después de interactuar con cualquier
                parte de una organización
                  </p>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="7" className="">
              <Row>

                <Col>
                  <Row>
                    <Col xs="6">
                      <div className="centrado-fila">
                        <img
                          src={siete1}
                          // style={{ width: 500 }}
                          alt="siete1"
                          className="img-fluid  animated  bounceInRight delay-1s"
                        />
                      </div>
                      <div>
                        <p className="text-center">
                          <b><span style={{ color: "#5b9bd5" }}>Genera recuerdos</span></b><br />
                          Que impulsan la lealtad del cliente.
                        </p>
                      </div>
                    </Col>
                    <Col xs="6">
                      <div className="centrado-fila">
                        <img
                          src={siete2}
                          // style={{ width: 500 }}
                          alt="siete2"
                          className="img-fluid  animated  bounceInRight delay-1s"
                        />
                      </div>
                      <div>
                        <p className="text-center">
                          <b><span style={{ color: "#ed7d31" }}>Comportamientos</span></b><br />
                          Se ven afectados en el cliente.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col xs="5">
              <img
                src={siete}
                // style={{ width: 500 }}
                alt="siete"
                className="img-fluid  animated  bounceInRight delay-1s"
              />
            </Col>

          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaSieteView
