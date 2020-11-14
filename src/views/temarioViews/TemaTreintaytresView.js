import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'
import treintaytres from "../../assets/img/cx/treintaytres.png";


class TemaTreintaytresView extends Component {
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
            <Col xs="4" md="3">
              <img
                src={treintaytres}
                // style={{ width: 500 }}
                alt="treintaytres"
                className="img-fluid  animated  bounceInRight delay-1s"
              />
            </Col>
            <Col xs="8" md="9" className="">

              <ul>
                <li className="checkNumero1">
                  Determinación del travel interno a seguir para conseguir los objetivos marcados en el paso 1.<br />
                  Un cambio de perspectiva para poder generar ideas diferentes y darle solución a los problemas.
                </li>
                <li  className="checkNumero2">
                  Aclarar y digitalizar todo lo anterior contando con la opinión objetiva de una persona que ayude a
                  mejorarlo. Incluso se puede contar con el criterio del resto de empleados del negocio.
                </li>
                <li  className="checkNumero3">
                  Exponer la idea de tal manera que se muestre atractiva para clientes y empresa.
                </li>
              </ul>

            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaTreintaytresView
