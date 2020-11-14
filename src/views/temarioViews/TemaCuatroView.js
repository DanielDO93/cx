import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import cuatro from "../../assets/img/cx/cuatro.png";
import cuatro1 from "../../assets/img/cx/cuatro1.png";
import cuatro2 from "../../assets/img/cx/cuatro2.png";
import cuatro3 from "../../assets/img/cx/cuatro3.png";
import cuatro4 from "../../assets/img/cx/cuatro4.png";
import cuatro5 from "../../assets/img/cx/cuatro5.png";

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaCuatroView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3> CX</h3>
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
          <Row className="centrado-fila">
            <Col xs="6" md="5">
              <img
                src={cuatro}
                // style={{ width: 500 }}
                alt="cuatro"
                className="img-fluid  animated  bounceInRight delay-1s"
              />
            </Col>
            <Col xs="6" md="7" className="centrado-fila text-center">
              <Row>
                <Col xs="12" md="12">
                  <h3>
                    <b>Interacciones</b>
                  </h3>
                  <p>
                    pueden darse en cualquier momento del ciclo de vida del cliente con tu empresa:
                </p>
                </Col>
                <Col xs="6" md="4" className="centrado-fila">
                  <div>
                    <img
                      src={cuatro1}
                      style={{ width: 250 }}
                      alt="cuatro1"
                      className="img-fluid  animated  bounceInRight delay-1s"
                    />
                  </div>
                </Col>
                <Col xs="6" md="4" className="centrado-fila">
                  <div>
                    <img
                      src={cuatro2}
                      style={{ width: 250 }}
                      alt="cuatro2"
                      className="img-fluid  animated  bounceInRight delay-1s"
                    />
                  </div>
                </Col>
                <Col xs="6" md="4" className="centrado-fila">
                  <div>
                    <img
                      src={cuatro3}
                      style={{ width: 250 }}
                      alt="cuatro3"
                      className="img-fluid  animated  bounceInRight delay-1s"
                    />
                  </div>
                </Col>
                <Col xs="6" md="4" className="centrado-fila">
                  <div>
                    <img
                      src={cuatro4}
                      style={{ width: 270 }}
                      alt="cuatro4"
                      className="img-fluid  animated  bounceInRight delay-1s"
                    />
                  </div>
                </Col>
                <Col xs="6" md="4" className="centrado-fila">
                  <div>
                    <img
                      src={cuatro5}
                      style={{ width: 250 }}
                      alt="cuatro5"
                      className="img-fluid  animated  bounceInRight delay-1s"
                    />
                  </div>
                </Col>
              </Row>


            </Col>
           
           
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaCuatroView
