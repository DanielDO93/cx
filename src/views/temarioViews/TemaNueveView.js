import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import nueve from "../../assets/img/cx/nueve.png";

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaNueveView extends Component {
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
          <Row>
            <Col xs="4" md="3">
              <div className="centrado-fila">
                <img
                  src={nueve}
                  //style={{ width: 700 }}
                  alt="nueve"
                  className="img-fluid  animated  bounceInRight delay-1s"
                />
              </div>
            </Col>
            <Col xs="8" md="9">
              <p>
                <b>
                  CX es integradora
                </b>
              </p>
              <p className="text-justify">
                La experiencia de cliente alcanza a todas las interacciones desde la atracción y el interés
                que generó el marketing, el descubrimiento, la compra, el uso, el servicio al cliente y hasta
                la baja, sin importar el canal por el que ocurran. Su alcance es integrador, uniendo al negocio
                entorno a la visión del cliente.
              </p>
              <ul>
                <li className="check1 text-justify" >
                  Se ha convertido en el foco de atención de todas las empresas en los últimos años, ya que las
                  organizaciones han notado la importancia que tiene esto para mantener a los consumidores
                  satisfechos y leales a la empresa.
                </li>
                <li className="check2 text-justify">
                  Una excelente experiencia de cliente requiere una mentalidad centrada en el consumidor.
                </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaNueveView
