import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import veinte from "../../assets/img/cx/veinte.png";

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaVienteView extends Component {
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
                <b>Aumento de clientes</b><br />
              </p>
              <ul className="text-right" >
                <li>
                  Asegurar de que los consumidores tengan una gran experiencia desde el primer punto de contacto.
                </li>
                <li>
                  Construir una relación a largo plazo para obtener recomendaciones sólidas.
                </li>
              </ul>

              <p className="text-right mt-3" >
                <b>
                  Aumento del compromisodel cliente
                </b><br />
              </p>
              <ul className="text-right" >
                <li>
                  Los clientes confían en las empresas que ya conocen, y su participación fomenta las interacciones
                  y crea relaciones mutuamente beneficiosas.
                </li>
              </ul>
            </Col>
            <Col xs="6" md="4">
              <div className="centrado-fila">
                <img
                  src={veinte}
                  //style={{ width: 700 }}
                  alt="veinte"
                  className="img-fluid  animated  bounceInRight delay-1s"
                />
              </div>
            </Col>
            <Col xs="6" md="4">
              <p>
                <b>
                  Aumento en la conversión de los clientes
                </b><br />
              </p>
              <ul className="" >
                <li>
                  Un cliente actual y satisfecho tiene más probabilidades de comprar que un nuevo prospecto.
                  Por lo tanto, es una buena idea diseñar una experiencia de cliente que pueda crear un ciclo de
                  retroalimentación y ofertas de productos.
                </li>
              </ul>
              <p className=" mt-3" >
                <b>
                  Aumento de la lealtad y retención de los clientes
                </b><br />
              </p>
              <ul className="" >
                <li>
                  Una experiencia al cliente excepcional aumenta la retención de clientes y su lealtad a la empresa. 
                  La gente busca productos y servicios de alta calidad a un precio óptimo si sienten que las empresas
                  están proporcionando un valor extra a través de las interacciones.
                </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaVienteView
