import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'
import treintaycuatro from "../../assets/img/cx/treintaycuatro.png";


class TemaTreintaycuatroView extends Component {
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

                  Características de una estrategia de Experiencia al Cliente
                </b>
              </h2>
              <h3 className="mt-3 text-center">
                Customer Journey Map
              </h3>

            </Col>

          </Row>
          <Row >
            <Col xs="12" md="12" className="centrado-fila">
              <img
                src={treintaycuatro}
                style={{ width: 800 }}
                alt="treintaycuatro"
                className="img-fluid  animated  bounceInRight delay-1s"
              />
            </Col>
           
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaTreintaycuatroView
