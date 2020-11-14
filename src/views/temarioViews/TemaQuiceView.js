import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import quice1 from "../../assets/img/cx/quice1.png";
import quice2 from "../../assets/img/cx/quice2.png";
import quice3 from "../../assets/img/cx/quice3.png";
import quice4 from "../../assets/img/cx/quice4.png";
import quice5 from "../../assets/img/cx/quice5.png";
import quice6 from "../../assets/img/cx/quice6.png";
import quice7 from "../../assets/img/cx/quice7.png";

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaQuiceView extends Component {
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
                  ¿Por qué es importante para las empresas?
                </b>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col xs="12" className=" mt-3">
              <h3>
                ¿Por qué es importante para las empresas hablar de CX?
              </h3>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="6" md="4">
              <div className="centrado-fila">
                <img
                  src={quice1}
                  //style={{ width: 700 }}
                  alt="quice1"
                  className="img-fluid  animated  bounceInRight delay-0s"
                />
                <p><b>MEJORA LA EXPERIENCIA DEL CONSUMIDOR</b></p>
                <p>
                  El consumidor de hoy no solo busca un buen producto o servicio, sino que también demanda una
                excelente experiencia, y en eso se centra la atención al cliente.<br />
                Aplicar este concepto permite llevar a los clientes al más alto punto de satisfacción,
                convirtiéndolos en consumidores fieles e, incluso, en embajadores de las empresas
              </p>
                <img
                  src={quice2}
                  //style={{ width: 700 }}
                  alt="quice2"
                  className="img-fluid  animated  bounceInRight delay-1s"
                />
              </div>
            </Col>
            <Col xs="6" md="4" className="centrado-fila">
              <div className="centrado-fila">
                <img
                  src={quice3}
                  //style={{ width: 700 }}
                  alt="quice3"
                  className="img-fluid  animated  bounceInRight delay-0s"
                />
              </div>
              <p>
                <b>REDUCE LA FRICCIÓN CON LA EMPRESA</b>
              </p>
              <p>
                Un buen servicio debe enfocarse en reducir las fricciones, como se le conoce a todas aquellas
                situaciones o aspectos que pueden incomodar o molestar al cliente, que lo lleva a pensar en dirigir
                sus consumos a una empresa diferente.
              </p>
              <div className="centrado-fila">
                <img
                  src={quice4}
                  //style={{ width: 700 }}
                  alt="quice4"
                  className="img-fluid  animated  bounceInRight delay-1s"
                />
                <img
                  src={quice5}
                  //style={{ width: 700 }}
                  alt="quice5"
                  className="img-fluid  animated  bounceInRight delay-2s"
                />
              </div>
            </Col>
            <Col xs="6" md="4">
              <div className="centrado-fila">

                <img
                  src={quice6}
                  //style={{ width: 700 }}
                  alt="quice6"
                  className="img-fluid  animated  bounceInRight delay-0s"
                />
                <p><b>AUMENTA EL CICLO DE VIDA DEL CLIENTE</b></p>
                <p>
                  Al implementar un buen servicio al cliente se evitará las fricciones y, en general, mejorará la
                  experiencia, por lo que se reducirá esta molesta estadística y, en cambio, se prolongará una muy
                  positiva: la tasa de retención.<br />
                  Con esto, se fideliza gran parte de los clientes y se prolonga su ciclo de vida, lo que se traduce
                  en el incremento del nivel de ganancias por consumidor.
                 </p>
                <img
                  src={quice7}
                  //style={{ width: 700 }}
                  alt="quice7"
                  className="img-fluid  animated  bounceInRight delay-1s"
                />
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaQuiceView
