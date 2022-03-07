import React, { useState } from 'react';
import { Row, Col, Card, CardBody, Form, Label, Input, FormGroup, Button, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import addImage from '../../assets/images/corporate-company-logo-design-template-2402e0689677112e3b2b6e0f399d7dc3_screen 1.png';
import "./company.css";
import { PlusCircleOutlined, MinusCircleOutlined, EnvironmentOutlined, UploadOutlined, FormOutlined } from '@ant-design/icons';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Upload } from 'antd';


const AddCompany = () => {
    // const position = [51.505, -0.09]


    let [num, setNum] = useState(12);
    let [building, setBuilding] = useState(12);
    let [wings, setWings] = useState(12);
    let [floor, setFloor] = useState(12);
    let [room, setRoom] = useState(12);

    let incNum = () => {
        if (num < 20) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }

    let buildinChange =(e)=>{
        setBuilding(e.target.value);
    }
    let buildingIncrement = () =>{
        if (building < 20) {
            setBuilding(Number(building) + 1);
        }
    };
    let buildingDecrement = () =>{
        if (building > 0) {
            setBuilding(building - 1);
        }
    }
    let wingsChange =(e)=>{
        setWings(e.target.value);
    }
    let wingsIncrement = () =>{
        if (wings < 20) {
            setWings(Number(wings) + 1);
        }
    };
    let wingsDecrement = () =>{
        if (wings > 0) {
            setWings(wings - 1);
        }
    }
    let floorChange =(e)=>{
        setFloor(e.target.value);
    }
    let floorIncrement = () =>{
        if (floor < 20) {
            setFloor(Number(floor) + 1);
        }
    };
    let floorDecrement = () =>{
        if (floor > 0) {
            setFloor(floor - 1);
        }
    }
    let roomChange =(e)=>{
        setRoom(e.target.value);
    }
    let roomIncrement = () =>{
        if (room < 20) {
            setRoom(Number(room) + 1);
        }
    };
    let roomDecrement = () =>{
        if (room > 0) {
            setRoom(room - 1);
        }
    }

    // function onChange(date, dateString) {
    //     console.log(date, dateString);
    // }

    // const handleFileSelected = (e) => {
    //     const files = Array.from(e.target.files)
    //     console.log("files:", files)
    //   }

    return (
        <React.Fragment>
            <Card className='mt-4'>
                <CardBody>
                    <Row className='my-3 mx-1 px-2 pt-3 corporate'>
                        <Col sm={6} md={4} >
                            <div className='text-center border-right border-dark'>
                                <img src={addImage} alt="" height="250" />
                                <div className='image-edit'>
                                <FormOutlined className='text-edit' />
                                </div>
                                <p>Company logo</p>
                            </div>
                        </Col>
                        <Col sm={6} md={8}>
                            <Form>
                                <FormGroup row>
                                    <Label for="exampleEmail" sm={2}>Campus</Label>
                                    <Col sm={10}>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="Number of Campus" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="exampleEmail" sm={2}>Building</Label>
                                    <Col sm={10}>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="Number of Building" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="exampleEmail" sm={2}>Wings</Label>
                                    <Col sm={10}>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="Number of Wings" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="exampleEmail" sm={2}>Floor</Label>
                                    <Col sm={10}>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="Number of Floor" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="exampleEmail" sm={2}>Room</Label>
                                    <Col sm={10}>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="Number of Room" />
                                    </Col>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                    <Row className='p-2'>
                        <Col md={4}>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleSelect" className='font-weight-bold'>Time Zone</Label>
                                    <Input type="select" name="select" id="exampleSelect" className='select-background'>
                                        <option>select</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col md={4}>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleSelect" className='font-weight-bold'>Currency</Label>
                                    <Input type="select" name="select" id="exampleSelect" className='select-background'>
                                        <option>select</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col md={4}>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleSelect" className='font-weight-bold'>Holiday Calendar</Label>
                                    <Input
                                        className='select-background'
                                        type="date"
                                        dateformat="dd/mm/yyyy"
                                        placeholder='Select'
                                        defaultValue="Select"
                                    />
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                    <Row className='p-2'>
                        <Col md={3}>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleSelect" className='font-weight-bold'>Weather Feed Location</Label>
                                    <InputGroup>
                                    <Input type='select' placeholder='select' name="select" id="exampleSelect">
                                    <option>select</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        
                                        </Input>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                            <EnvironmentOutlined />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col md={3}>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleSelect" className='font-weight-bold'>Size in Sqft</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>select</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col md={3}>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleSelect" className='font-weight-bold'>Occupancy of People</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>select</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col md={3}>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleSelect" className='font-weight-bold'>Green certifications</Label>
                                    <InputGroup>
                                    <input placeholder='Upload' disabled />
                                    <Upload>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                            <UploadOutlined />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        </Upload>
                                    </InputGroup>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                    <div className='select-background p-2 shadow-sm rounded'>
                        <h6 className='pb-3 pt-2 font-weight-bold'>Billing/Main Office Space </h6>
                        <Row>
                            <Col md={8}>
                                <Form>
                                    <FormGroup className='align-items-center'>
                                        <Label for="exampleEmail" className='font-weight-bold'>Address*</Label>
                                        <Input type="email" name="email" id="exampleEmail" placeholder=" Zenith Technology, near red cross" />
                                    </FormGroup>
                                </Form>
                            </Col>
                            <Col md={4}>
                                <Form>
                                    <FormGroup className='align-items-center'>
                                        <Label for="exampleEmail" className='font-weight-bold'>Campus</Label>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="Electronic Complex" />
                                    </FormGroup>
                                </Form>
                            </Col>
                            <Col md={3}>
                                <Form>
                                    <FormGroup className='align-items-center'>
                                        <Label for="exampleEmail" className='font-weight-bold'>Building</Label>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="Emaster" />
                                    </FormGroup>
                                </Form>
                            </Col>
                            <Col md={3}>
                                <Form>
                                    <FormGroup className='align-items-center'>
                                        <Label for="exampleEmail" className='font-weight-bold'>Floors</Label>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="1st" />
                                    </FormGroup>
                                </Form>
                            </Col>
                            <Col md={3}>
                                <Form>
                                    <FormGroup className='align-items-center'>
                                        <Label for="exampleEmail" className='font-weight-bold'>Wings(Zone)</Label>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="East" />
                                    </FormGroup>
                                </Form>
                            </Col>
                            <Col md={3}>
                                <Form>
                                    <FormGroup className='align-items-center'>
                                        <Label for="exampleEmail" className='font-weight-bold'>Rooms</Label>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="101" />
                                    </FormGroup>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                    <div className='corporate pl-5 mt-3 py-3'>
                        <h6 className='font-weight-bold'>Space Detail informantion</h6>
                        <p>Number of space with specification</p>
                        <Row>
                            <Col md={2} className="d-flex align-items-center pr-0 pl-0 col-size">
                                <Label for="exampleEmail" className="label-text">Campus </Label>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <span className="input-group-text bg-white hover-zoom-minus">
                                            <MinusCircleOutlined onClick={decNum} className="bg-white" />
                                        </span>
                                    </InputGroupAddon>
                                    <input type="text" class="form-control text-center" value={num} onChange={handleChange} />
                                    <InputGroupAddon addonType="prepend">
                                        <span className="input-group-text bg-white hover-zoom">
                                            <PlusCircleOutlined onClick={incNum} />
                                        </span>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Col>
                            <Col md={2} className="d-flex align-items-center pr-0 col-size">
                                <Label for="exampleEmail" className='label-text'>Building</Label>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <span className="input-group-text bg-white hover-zoom-minus">
                                            <MinusCircleOutlined onClick={buildingDecrement} />
                                        </span>
                                    </InputGroupAddon>
                                    <input type="text" class="form-control text-center" value={building} onChange={buildinChange} />
                                    <InputGroupAddon addonType="prepend">
                                        <span className="input-group-text bg-white hover-zoom">
                                            <PlusCircleOutlined onClick={buildingIncrement} />
                                        </span>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Col>
                            <Col md={2} className="d-flex align-items-center pr-0 col-size">
                                <Label for="exampleEmail" className='label-text'>Wings</Label>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <span className="input-group-text bg-white hover-zoom-minus">
                                            <MinusCircleOutlined onClick={wingsDecrement} />
                                        </span>
                                    </InputGroupAddon>
                                    <input type="text" class="form-control text-center" value={wings} onChange={wingsChange} />
                                    <InputGroupAddon addonType="prepend">
                                        <span className="input-group-text bg-white hover-zoom">
                                            <PlusCircleOutlined onClick={wingsIncrement} />
                                        </span>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Col>
                            <Col md={2} className="d-flex align-items-center pr-0 col-size">
                                <Label for="exampleEmail" className='label-text'>Floor</Label>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <span className="input-group-text bg-white hover-zoom-minus">
                                            <MinusCircleOutlined onClick={floorDecrement} />
                                        </span>
                                    </InputGroupAddon>
                                    <input type="text" class="form-control text-center" value={floor} onChange={floorChange} />
                                    <InputGroupAddon addonType="prepend">
                                        <span className="input-group-text bg-white hover-zoom">
                                            <PlusCircleOutlined onClick={floorIncrement} />
                                        </span>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Col>
                            <Col md={2} className="d-flex align-items-center pr-0 col-size">
                                <Label for="exampleEmail" className='label-text'>Room</Label>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <span className="input-group-text bg-white hover-zoom-minus">
                                            <MinusCircleOutlined onClick={roomDecrement} />
                                        </span>
                                    </InputGroupAddon>
                                    <input type="text" class="form-control text-center" value={room} onChange={roomChange} />
                                    <InputGroupAddon addonType="prepend">
                                        <span className="input-group-text bg-white hover-zoom">
                                            <PlusCircleOutlined onClick={roomIncrement} />
                                        </span>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Col>
                        </Row>
                        <div className='mt-5 float-right'>
                            <Button className='btn-conpany px-4 py-2 font-weight-bold'>Submit</Button>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    );
};


export default AddCompany;
