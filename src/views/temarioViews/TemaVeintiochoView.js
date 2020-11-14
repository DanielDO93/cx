import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'
import veintiocho from "../../assets/img/cx/veintiocho.png";

class TemaVeintiochoView extends Component {
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
             {/*  <h3 className="mt-3">
                Ventajas de una Experiencia al Cliente

              </h3> */}
              <p>
                Una pista para mejorar la experiencia de tus clientes (basada en la satisfacción)…
              </p>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="6" md="4">
              <p className="text-right">
                <b> Darme lo que necesito sin pensarlo</b><br />
                 Llegamos a niveles de experiencia de servicio que sólo puede ser brindados cuando las
                 marcas revisan sus productos y procesos (big data, conectividad móvil e internet de las
                 cosas IoT).
            </p>
              <p className="text-right">
                <b> Resolver mis necesidades cuando lo pido</b><br />
                ¿Qué tal divulgar para tus clientes, a través de materiales, los diferentes servicios asociados
                 que tienen tus productos y hasta recomendaciones que faciliten cumplir estas necesidades?
            </p>
              <p className="text-right">
                <b> Proveer información que pueda usar</b><br />
                para que ellos puedan resolver sus problemas
            </p>
            </Col>
            <Col xs="6" md="4">
              <img
                src={veintiocho}
                // style={{ width: 500 }}
                alt="veintiocho"
                className="img-fluid  animated  bounceInRight delay-1s"
              />
            </Col>
            <Col xs="6" md="4">
              <p>
                <b>Hacerme sentir mejor, más seguro, más poderoso</b><br />
               Más una aspiración que una realidad…favorecer una percepción colectiva, que incentiva el
               consumo de una marca (ejemplo, Apple).
              </p>
              <p>
                <b>Darme lo que necesito sin preguntarme</b>:<br />
                proveer al cliente lo que necesita antes de que lo manifieste es una gran manera de generar
                compromiso y fidelidad.
              </p>
              <p>
                <b> Resolver el problema cuando lo necesite</b> <br />
                 la mayoría de los encargados de atención al cliente están enfocados en no resolver los problemas
                 de sus clientes y solo resolver los de la empresa.
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaVeintiochoView
