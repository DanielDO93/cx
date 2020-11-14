import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import objetivo from "../../assets/img/cx/objetivo.png";

class ObjetivoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Objetivo</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12" sm="12" md="6" lg="6">
              <div className="align-middle animated rubberBand delay-0s">
                <p className="cajaA1 text-center">
                  Dar a conocer las tendencias y retos de hoy en la industria
                  para que el personal de CCS estemos en el mismo camino hacía
                  la renovación y actualización de la empresa.
                </p>
              </div>
            </Col>
            <Col xs="12" sm="12" md="6" lg="6">
            <img
                src={objetivo}
                // style={{ width: 500 }}
                alt="objetivo"
                className="img-fluid bordeImagen animated  bounceInRight delay-2s"
              />
            
            </Col>
          </Row>
        </CardBody>
      </div>
    );
  }
}
export default ObjetivoView;
