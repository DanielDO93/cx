import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'
import veintinueve1 from "../../assets/img/cx/veintinueve1.png";
import veintinueve2 from "../../assets/img/cx/veintinueve2.png";
import veintinueve3 from "../../assets/img/cx/veintinueve3.png";
import veintinueve4 from "../../assets/img/cx/veintinueve4.png";
import veintinueve5 from "../../assets/img/cx/veintinueve5.png";
import veintinueve6 from "../../assets/img/cx/veintinueve6.png";


class TemaVeintinueveView extends Component {
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

            </Col>
          </Row>
          <Row className="centrado-fila mt-3">
            <Col xs="6" md="6">
              <Row >
                <Col xs="12" md="3">
                  <img
                    src={veintinueve1}
                    // style={{ width: 500 }}
                    alt="veintinueve1"
                    className="img-fluid  animated  bounceInRight delay-1s"
                  />
                </Col>
                <Col xs="12" md="9">
                  <p className="text-justify">
                    <b>1. Conocer la percepción del cliente</b><br />
                    Estudia y analiza las diferentes interacciones que tu empresa tiene con sus clientes
                    (reacciones, comentarios, acciones, comportamientos y opiniones).<br />
                    Descubrirás lo que ellos valoran de tu empresa, lo que consideran importante del servicio
                     y qué cambios harían para mejorar su experiencia.
                  </p>
                </Col>
              </Row>
              <Row >
                <Col xs="12" md="3">
                  <img
                    src={veintinueve3}
                    // style={{ width: 500 }}
                    alt="veintinueve3"
                    className="img-fluid  animated  bounceInRight delay-1s"
                  />
                </Col>
                <Col xs="12" md="9">
                  <p className="text-justify">
                    <b>3. Trabajar en la experiencia del empleado</b><br />
                    La cara de la empresa son los colaboradores, si ellos no se sienten bien, los clientes lo sabrán.
                     El empleado debe ser el primero en sentir la experiencia placentera, solo así podrá hablar con
                     coherencia y trasmitir sus sensaciones a los clientes.
                  </p>
                </Col>
              </Row>
              <Row >
                <Col xs="12" md="3">
                  <img
                    src={veintinueve5}
                    // style={{ width: 500 }}
                    alt="veintinueve5"
                    className="img-fluid  animated  bounceInRight delay-1s"
                  />
                </Col>
                <Col xs="12" md="9">
                  <p className="text-justify">
                    <b>5. Satisfacer  necesidades</b><br />
                    Si entiendes qué necesitan, podrás ofrecer productos, servicios y experiencias que deleiten 
                    a los clientes de manera inesperada para ellos.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col xs="6" md="6">
            <Row >
                <Col xs="12" md="3">
                  <img
                    src={veintinueve2}
                    // style={{ width: 500 }}
                    alt="veintinueve2"
                    className="img-fluid  animated  bounceInRight delay-1s"
                  />
                </Col>
                <Col xs="12" md="9">
                  <p className="text-justify">
                    <b>2. Identificar la promesa de tu empresa</b><br />
                    La experiencia tiene que ser congruente con sus valores y con la misión. Todo eso genera
                    emociones positivas en la mente de los usuarios.
                  </p>
                </Col>
              </Row>
              <Row >
                <Col xs="12" md="3">
                  <img
                    src={veintinueve4}
                    // style={{ width: 500 }}
                    alt="veintinueve4"
                    className="img-fluid  animated  bounceInRight delay-1s"
                  />
                </Col>
                <Col xs="12" md="9">
                  <p className="text-justify">
                    <b>4. Encontrar necesidades</b><br />
                    Al entender a los clientes podrás y anticiparte a sus necesidades, antes de que este sepa que 
                    las tiene. Eentenderás con mucho tiempo a tu favor lo que sucede en la mente del público.
                  </p>
                </Col>
              </Row>
              <Row >
                <Col xs="12" md="3">
                  <img
                    src={veintinueve6}
                    // style={{ width: 500 }}
                    alt="veintinueve6"
                    className="img-fluid  animated  bounceInRight delay-1s"
                  />
                </Col>
                <Col xs="12" md="9">
                  <p className="text-justify">
                    <b>6. Cumplir con sus expectativas</b><br />
                    Cuando el cliente ya probó los productos o servicios de la empresa, es momento de analizar 
                    sus emociones cuando los utiliza. Con esto, se podrá entender mejor sus expectativas y asegurarse
                    de cumplir con el paso del tiempo las mismas.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaVeintinueveView
