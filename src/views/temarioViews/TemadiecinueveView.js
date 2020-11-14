import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import diecinueve from "../../assets/img/cx/diecinueve.png";

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemadiecinueveView extends Component {
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
            <Col xs="4" md="3">
              <div className="centrado-fila">
                <img
                  src={diecinueve}
                  //style={{ width: 700 }}
                  alt="diecinueve"
                  className="img-fluid  animated  bounceInRight delay-1s"
                />
              </div>
            </Col>
            <Col xs="8" md="9">

              <p className="text-justify">
                Hoy en día se puede decir que la habilidad de una empresa para entregar una buena experiencia
                a sus clientes constituye per se una ventaja competitiva.
              </p>
              <p>
                <b>¿Cómo funciona?</b><br />
                Contentar a los clientes, que su experiencia con nuestro negocio sea para ellos única y digna de
                recordar. Éste es el primer paso -aunque imprescindible- para alcanzar una experiencia de cliente
                que repercuta en todos los aspectos de la empresa.
              </p>
              <ul>
                <li className="check1 text-justify" >
                  Es vital que negocios aprendan a “escuchar” la voz del cliente, para utilizarla como insumo en las
                  estrategias y poder aprovechar los beneficios tangibles que genera en las empresas, pues la 
                  experiencia del cliente es capaz de trazar un camino hacia la mejora de la rentabilidad.
                </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemadiecinueveView
