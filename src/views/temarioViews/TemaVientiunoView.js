import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import veintiuno from "../../assets/img/cx/veintiuno.png";

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaVientiunoView extends Component {
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
                  Ventajas de una Experiencia al Cliente
                </b>
              </h2>
            </Col>
          </Row>
          {/* <Row>
            <Col xs="12" className=" mt-3">
              <h3>
                Objetivos
              </h3>
              <p>
                del CX
              </p>
            </Col>
          </Row> */}
          <Row className="centrado-fila">
            <Col xs="6" md="4">
              <p className="text-right" >
                <b>Conseguir nuevos prospectos</b><br />
              </p>
              <ul className="text-right" >
                <li>
                  Las empresas deberían seguir aportando valor a sus productos a través de campañas e interacciones
                  (no sólo ver a los clientes como puntos de venta).
                </li>
              </ul>

              <p className="text-right mt-3" >
                <b>
                  Mejora de la gestión de crisis
                </b><br />
              </p>
              <ul className="text-right" >
                <li>
                  Cuando el cliente confía en un negocio, es más probable que comunique cualquier queja directamente.
                </li>
                <li>
                  Esto permite a la compañía manejar la reputación de empresa.
                </li>
              </ul>
            </Col>
            <Col xs="6" md="4">
              <div className="centrado-fila">
                <img
                  src={veintiuno}
                  //style={{ width: 700 }}
                  alt="veintiuno"
                  className="img-fluid  animated  bounceInRight delay-1s"
                />
              </div>
            </Col>
            <Col xs="6" md="4">
              <p>
                <b>
                  Reducción del costo del servicio y la comercialización
                </b><br />
              </p>
              <ul className="" >
                <li>
                  Un enfoque centrado en el customer experience puede tener puntos de control incorporados que
                  ayuden a las empresas a adoptar un enfoque de comercialización más centrado en el cliente.
                </li>
                <li>
                  Las empresas recopilan datos, hacen análisis de negocios y comprenden la dinámica del mercado.
                </li>
                <li>
                  Esto reduce los costos, mientras que aumenta las ventas y la satisfacción del cliente.
                </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaVientiunoView
