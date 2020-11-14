import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'
import veinticuatro from "../../assets/img/cx/veinticuatro.png";

class TemaVeinticuatroView extends Component {
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
                  Factores que causan una mala experiencia al cliente
                </b>
              </h2>
              {/* <h3 className="mt-3">
                Ventajas de una Experiencia al Cliente

              </h3> */}
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="6" md="4">
              <p className="text-right">
                Largos tiempo de espera, ya sea online o llamada.
              </p>
              <p className="text-right">
                Colaboradores que no entienden las necesidades del cliente (no pueden ofrecer una
                experiencia positiva).
              </p>
              <p className="text-right">
                Los empleados o responsables del negocio no pueden responder a todas las dudas o problemas que los
                clientes presenten.
              </p>
            </Col>
            <Col xs="6" md="4">
              <img
                src={veinticuatro}
                // style={{ width: 500 }}
                alt="veinticuatro"
                className="img-fluid  animated  bounceInRight delay-1s"
              />
            </Col>
            <Col xs="6" md="4">
              <p>
                Automatización exagerada, lo que deriva en un escaso contacto humano (puede sentirse como desinterés
                hacia las necesidades y problemas del cliente).
              </p>
              <p>
                Servicio estándar que no se puede adaptar de acuerdo a los gustos y problemas que cada cliente tiene
                (no hay personalización).
             </p>
              <p>
                Empleados malhumorados, algo que puede ser muy recurrente y que es totalmente contraproducente para
                la experiencia del usuario.
             </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaVeinticuatroView
