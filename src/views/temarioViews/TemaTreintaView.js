import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'


class TemaTreintaView extends Component {
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
            <Col xs="12" md="6">

              <ul>
                <li>
                  <b>Mapa de Experiencia de Cliente</b>
                </li>
              </ul>
              <p>
                Es un mapa conceptual donde se plasma todo el proceso de compra del cliente.<br />
                Desde las etapas, interacciones y opiniones, hasta los canales, elementos y posibles  errores
                o complicaciones que pueden producirse a lo largo de su viaje.
              </p>
            </Col>
            <Col xs="12" md="6">
              <div >
                <div className="cajaRoja" style={{marginRight:"20px"}}>
                  <p className="pb-2">
                    El objetivo consiste en hallar e identificar los momentos clave de interacción entre usuario y
                    empresa, o también llamados <b>Touch Points</b>.
                   </p>
                </div>
                <div className="cajaGris" style={{marginTop:"-20px",marginLeft:"20px"}}>
                  <p>
                    Permite rastrear las acciones de los clientes, así como sus emociones, obteniendo una información
                    muy valiosa para poder mejorar la Customer Experience de los usuarios,  además del trabajo de los
                    empleados.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaTreintaView
