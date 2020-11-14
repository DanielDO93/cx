import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import tres from "../../assets/img/cx/tres.png";
import tres1 from "../../assets/img/cx/tres1.png";
import tres2 from "../../assets/img/cx/tres2.png";
import tres3 from "../../assets/img/cx/tres3.png";

class TemaTresView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>CX</h3>
        </CardHeader>
        <CardBody>
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
            <Col xs="6" md="3">
              <img
                src={tres}
                // style={{ width: 500 }}
                alt="tres"
                className="img-fluid  animated  bounceInRight delay-1s"
              />
            </Col>
            <Col xs="6" md="3" className="centrado-fila text-center">
              <div>
                <img
                  src={tres1}
                  // style={{ width: 500 }}
                  alt="tres1"
                  className="img-fluid  animated  bounceInRight delay-1s"
                />
              </div>
              <div>
                <p><b><span style={{ color: "#99989c" }}>Conectar</span></b></p>
                <p>un producto o servicio con los consumidores finales.</p>
              </div>
            </Col>
            <Col xs="6" md="3" className="centrado-fila text-center">
              <div>
                <img
                  src={tres2}
                  // style={{ width: 500 }}
                  alt="tres2"
                  className="img-fluid  animated  bounceInRight delay-1s"
                />
              </div>
              <div>
                <p><b><span style={{ color: "#d2c12d" }}>Convencer</span></b></p>
                <p>mediante la comunicación de <b>necesidades y satisfactores</b>.</p>
              </div>
            </Col>
            <Col xs="6" md="3" className="centrado-fila text-center">
              <div>
                <img
                  src={tres3}
                  // style={{ width: 500 }}
                  alt="tres3"
                  className="img-fluid  animated  bounceInRight delay-1s"
                />
              </div>
              <div>
                <p><b><span style={{ color: "#3412e4" }}>Atraer nuevos clientes</span></b></p>
                <p>a partir de mensajes cargados de <b>emociones, valores, atributos y aspiraciones</b>.</p>
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaTresView
