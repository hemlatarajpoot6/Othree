import React from "react";
import { Row, Col, Card, Container, UncontrolledCollapse, CardBody } from 'reactstrap';
import { Search } from 'react-feather';
import "./profile.css";
import { PlusCircleOutlined } from '@ant-design/icons';
import question from "../../assets/images/Leader-Question-e1559322511996 1.png";

const HelpSupport = () => {


    return (
        <React.Fragment>
            <Card className="mt-5 mb-0">
                <Container>
                    <Row>
                        <Col md={12}>
                            <Container>
                                <p className="pt-3 font-weight-bold">Knowledge Base, Self Service Support</p>
                                <h6 className="font-weight-bold">Help & Support</h6>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Card><hr className="m-0" />
            <Card className="mt-0">
                <Container>
                    <Row>
                        <Col md={12}>
                            <Container>
                                <p className="pt-3 font-weight-bold">Happy a question ?</p>
                                <form>
                                    <div className="input-group mb-5">
                                        <input type="text" className="form-control input-color" placeholder="Search..." />
                                        <Search className="bg-search text-white h-auto p-2" width={70} />
                                    </div>
                                </form>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy
                                    text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                            </Container>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Container>
                                <span className="d-flex pl-2 align-items-center justify-content-between border-bottom">
                                    <h6>Q. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                    <PlusCircleOutlined className="" id="toggler" />
                                </span>
                                <UncontrolledCollapse toggler="#toggler" defaultOpen={true}>
                                    <Card>
                                        <CardBody>
                                            <Row>
                                                <Col md={6}>
                                                    <ol>
                                                        <li className="mb-3">
                                                            <p className="mb-0"> Step</p>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                                            standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy

                                                        </li>
                                                        <li className="mb-3">
                                                            <p className="mb-0"> Step</p>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                                            standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy
                                                        </li>
                                                        <li>
                                                            <p className="mb-0"> Step</p>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                                            standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy

                                                        </li>
                                                    </ol>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="text-center">
                                                        <img src={question} alt="" height={200} />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </UncontrolledCollapse>
                                <span className="d-flex pl-2 align-items-center justify-content-between border-bottom">
                                    <h6>Q. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                    <PlusCircleOutlined className="" id="toggler1" />
                                </span>
                                <UncontrolledCollapse toggler="#toggler1">
                                    <Card>
                                        <CardBody>
                                            <Row>
                                                <Col md={6}>
                                                    <ol>
                                                        <li className="mb-3">
                                                            <p className="mb-0"> Step</p>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                                            standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy

                                                        </li>
                                                        <li className="mb-3">
                                                            <p className="mb-0"> Step</p>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                                            standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy
                                                        </li>
                                                        <li>
                                                            <p className="mb-0"> Step</p>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                                            standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy

                                                        </li>
                                                    </ol>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="text-center">
                                                        <img src={question} alt="" height={200} />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </UncontrolledCollapse>
                                <span className="d-flex pl-2 align-items-center justify-content-between border-bottom">
                                    <h6>Q. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                    <PlusCircleOutlined className="" id="toggler2" />
                                </span>
                                <UncontrolledCollapse toggler="#toggler2">
                                    <Card>
                                        <CardBody>
                                            <Row>
                                                <Col md={6}>
                                                    <ol>
                                                        <li className="mb-3">
                                                            <p className="mb-0"> Step</p>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                                            standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy

                                                        </li>
                                                        <li className="mb-3">
                                                            <p className="mb-0"> Step</p>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                                            standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy
                                                        </li>
                                                        <li>
                                                            <p className="mb-0"> Step</p>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                                            standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy

                                                        </li>
                                                    </ol>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="text-center">
                                                        <img src={question} alt="" height={200} />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </UncontrolledCollapse>
                                <span className="d-flex pl-2 align-items-center justify-content-between border-bottom">
                                    <h6>Q. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                    <PlusCircleOutlined className="" id="toggler2" />
                                </span>
                                <UncontrolledCollapse toggler="#toggler2">
                                    <Card>
                                        <CardBody>
                                            <Row>
                                                <Col md={6}>
                                                    <ol>
                                                        <li className="mb-3">
                                                            <p className="mb-0"> Step</p>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                                            standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy

                                                        </li>
                                                        <li className="mb-3">
                                                            <p className="mb-0"> Step</p>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                                            standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy
                                                        </li>
                                                        <li>
                                                            <p className="mb-0"> Step</p>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                                            standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy

                                                        </li>
                                                    </ol>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="text-center">
                                                        <img src={question} alt="" height={200} />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </UncontrolledCollapse>
                            </Container>
                        </Col>
                    </Row>

                </Container>
            </Card>
        </React.Fragment>
    )
};

export default HelpSupport;