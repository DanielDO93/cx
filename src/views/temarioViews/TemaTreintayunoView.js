import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'
import treintayuno from "../../assets/img/cx/treintayuno.png";


class TemaTreintayunoView extends Component {
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
          <Row className="centrado-fila mt-3">
            <Col xs="12" md="12" className="centrado-distribuido">


              <div className="cajaRoja centrado-fila" style={{ width: "250px", alignSelf: "stretch" }}>
                <p>
                  1. Repasar los objetivos
                  del servicio
                  que se proporciona
                  al cliente.
                 </p>
              </div>
              <div className="cajaGris centrado-fila ml-2 mr-2" style={{ width: "250px", alignSelf: "stretch" }}>
                <p>
                  2. Realizar investigación y estructurar los datos obtenidos sobre la
                  experiencia del cliente.
                </p>
              </div>
              <div className="cajaRoja centrado-fila" style={{ width: "250px", alignSelf: "stretch" }}>
                <p>
                  3. Armar las paradas del viaje. Debe dividirse en
                  distintas fases según
                  importancia.
                </p>
              </div>
            </Col>
            <Col xs="12" md="12">
              <img
                src={treintayuno}
                // style={{ width: 500 }}
                alt="treintayuno"
                className="img-fluid  animated  bounceInRight delay-1s"
              />
            </Col>
            <Col xs="12" md="12" className="centrado-distribuido">
              <div className="cajaGris centrado-fila" style={{ width: "250px", alignSelf: "stretch" }}>
                <p>
                  4. Agrupar y determinar los
                  sentimientos que el cliente
                  experimenta en cada una
                  de estas fases.
                </p>
              </div>
              <div className="cajaRoja centrado-fila" style={{ width: "250px", alignSelf: "stretch" }}>
                <p>
                  5. Diagramar
                  las acciones que realiza o
                  debe realizar el cliente en
                  las distintas fases del viaje.
                </p>
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaTreintayunoView
