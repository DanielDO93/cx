import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import introduccion from "../../assets/img/cx/introduccion.png";

class IntroduccionView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Introducción</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12 mt-3">
              <h2
                className="animated slideInUp delay-0 mb-2"
                style={{ marginBottom: '0px' }}
              >
                <b>
                  Experiencia al cliente CX
                </b>
              </h2>
            </Col>

          </Row>
          <Row className="centrado-fila mt-3">
            <Col xs="12" sm="12" md="3" lg="3">
              <img
                src={introduccion}
                // style={{ width: 500 }}
                alt="introduccion"
                className="img-fluid  animated  bounceInRight delay-1s"
              />

            </Col>
            <Col xs="12" sm="12" md="9" lg="9">
              <div className="align-middle animated rubberBand delay-0s">
                <p className="cajaRoja text-justify">
                  Vivimos en la era de la <b>experiencia</b>, donde los productos y servicios ya no son
                  diferenciales. Diseñar experiencias no sólo es construir diferenciación, también aporta la
                  principal fuente de <b>rentabilidad</b> de las compañías.<br />
                  Los profundos cambios en la sociedad de la información y en los hábitos de consumo están elevando
                  de forma acelerada los estándares de <b>exigencia de clientes y consumidores</b> en todos los sectores
                  económicos.<br />
                  Durante esta sesión, analizaremos esta realidad cambiante y cómo las empresas han de <b>reinventarse</b>
                  para seguir innovando y ofreciendo una experiencia que convenza y fidelice a sus clientes.<br />
                </p>
              </div>
            </Col>

          </Row>
        </CardBody>
      </div>
    );
  }
}
export default IntroduccionView;
