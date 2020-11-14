import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'
import treintaydos from "../../assets/img/cx/treintaydos.png";


class TemaTreintaydosView extends Component {
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
          {/* <Row className="centrado-fila">
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

          </Row> */}
          <Row className="centrado-fila mt-3">
            <Col xs="12" md="6">
              <img
                src={treintaydos}
                // style={{ width: 500 }}
                alt="treintaydos"
                className="img-fluid  animated  bounceInRight delay-1s"
              />
            </Col>
            <Col xs="12" md="6" className="text-right">
              <h3>
                6. Listar los puntos clave de contacto entre empresa y cliente
              </h3>
              <ul>
                <li>
                  Puntos de contacto activos (OWNED): recursos de la empresa a través de los cuales los consumidores
                  pueden recibir estímulos (ejemplos, oficinas, tiendas, uniforme de los empleados, trato con el
                  cliente,...).
                </li>
                <li>
                  Puntos de contacto pagados (PAID): creatividades publicitarias y  pagadas para el cliente.
                  Éste las recibe mediante soportes ajenos a la empresa en medios online u offline.
                </li>
                <li>
                  Puntos de contacto conseguidos (EARNED): conseguidos a través de terceros sin coste económico
                  (notas de prensa, viralización de contenidos en redes sociales, comentarios en blogs, youtube,
                  etc.).
                </li>
              </ul>

            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaTreintaydosView
