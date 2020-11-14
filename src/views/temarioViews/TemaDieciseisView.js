import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import quice1 from "../../assets/img/cx/quice1.png";
import quice2 from "../../assets/img/cx/quice2.png";
import quice3 from "../../assets/img/cx/quice3.png";
import quice4 from "../../assets/img/cx/quice4.png";
import quice6 from "../../assets/img/cx/quice6.png";
import quice7 from "../../assets/img/cx/quice7.png";
import dieciseis1 from "../../assets/img/cx/dieciseis1.png";
import dieciseis2 from "../../assets/img/cx/dieciseis2.png";


//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaDieciseisView extends Component {
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
         
          <Row>
            <Col xs="12" className=" mt-3">
              <h3>
                ¿Por qué es importante para las empresas hablar de CX?
              </h3>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="6" md="6" >
              <div className="centrado-fila">
                <img
                  src={quice3}
                  //style={{ width: 700 }}
                  alt="quice3"
                  className="img-fluid  animated  bounceInRight delay-0s"
                />
              </div>
              <p className="text-center">
                <b>PERSONALIZA Y SEGMENTA LA ATENCIÓN</b>
              </p>
              <p className="text-center">
                Estas estrategias permiten focalizar y personalizar la atención. Esto se traduce en un incremento
                de los cumplimientos de los resultados y necesidades de cada usuario, lo que a la vez mejora la
                percepción de la empresa y su prestigio.
              </p>
              <div className="centrado-fila">
                <img
                  src={quice4}
                  //style={{ width: 700 }}
                  alt="quice4"
                  className="img-fluid  animated  bounceInRight delay-1s"
                />

              </div>
            </Col>
            <Col xs="6" md="6" className="">
              <br/><br/><br/><br/><br/>
              <div className="centrado-fila">
                <img
                  src={quice6}
                  //style={{ width: 700 }}
                  alt="quice6"
                  className="img-fluid  animated  bounceInRight delay-0s"
                />
              </div>
              <p className="text-center"><b>VALORA AL CLIENTE A PARTIR DE UNA IMPLEMENTACIÓN TÉCNICA DETALLADA</b></p>
              <p className="text-center">
                El Customer Onboarding abarca los procesos y actividades orientadas a la fase inicial de un proyecto
                con un nuevo cliente, promueve una integración y adaptación eficaz, además de asentar sólidas bases
                para lograr resultados en lapsos predeterminados.
              </p>
              <img
                src={quice7}
                //style={{ width: 700 }}
                alt="quice7"
                className="img-fluid  animated  bounceInRight delay-1s"
              />

            </Col>

            <Col xs="6" md="6">
            <br/>
              <div className="centrado-fila mt-3">

                <img
                  src={quice1}
                  //style={{ width: 700 }}
                  alt="quice1"
                  className="img-fluid  animated  bounceInRight delay-0s"
                />
              </div>
              <p className="text-center"><b>GENERA EMBAJADORES DE MARCA</b></p>
              <p className="text-center">
                La percepción de la empresa mejorará y, en consecuencia, muchas más personas estarán dispuestas
                y comprometidas con ser embajadores de la empresa. Ésta es una estrategia de comercialización,
                pues acercan a los consumidores a los productos, servicios y valores de una organización.
              </p>
              <img
                src={quice2}
                //style={{ width: 700 }}
                alt="quice2"
                className="img-fluid  animated  bounceInRight delay-1s"
              />

            </Col>
            <Col xs="6" md="6">
            <br/>
              <div className="centrado-fila">

                <img
                  src={dieciseis1}
                  //style={{ width: 700 }}
                  alt="dieciseis1"
                  className="img-fluid  animated  bounceInRight delay-0s"
                />
              </div>
              <p className="text-center"><b>AUMENTA EL CICLO DE VIDA DEL CLIENTE</b></p>
              <p className="text-center">
                Al implementar un buen servicio al cliente se evitará las fricciones y, en general, mejorará la
                experiencia, por lo que se reducirá esta molesta estadística y, en cambio, se prolongará una muy
                  positiva: la tasa de retención.<br />
                  Con esto, se fideliza gran parte de los clientes y se prolonga su ciclo de vida, lo que se traduce
                  en el incremento del nivel de ganancias por consumidor.
                 </p>
              <img
                src={dieciseis2}
                //style={{ width: 700 }}
                alt="dieciseis2"
                className="img-fluid  animated  bounceInRight delay-1s"
              />

            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDieciseisView
