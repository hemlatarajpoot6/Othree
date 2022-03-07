import React, {useState} from 'react';
import { Row, Col, Card, CardBody, Input, UncontrolledDropdown, Button, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
// import { BsToggleOn } from "react-icons/BsToggleOn";
// import * as FeatherIcon from 'react-feather';
import { FormOutlined, DeleteOutlined, PlusOutlined, DownloadOutlined, FilterOutlined, DownOutlined } from '@ant-design/icons';
// import { Button } from 'antd';
// import { MDBCol } from "mdbreact";
import "./company.css";
import { Link } from 'react-router-dom';


// import PageTitle from '../../components/PageTitle';

const records = [
    {
        id: 1,
        name: 'Juana',
        email: 'Singavera',
        phone: '+1 (872) 560-2324',
        role: 'Manager',
        permission: 'non',
        status: <div className='custom-control custom-switch'>
            <input
                type='checkbox'
                className='custom-control-input'
                id='customSwitches'
                readOnly
            />
            <label className='custom-control-label' htmlFor='customSwitches'>
            </label>
        </div>,
        action: <><FormOutlined className='text-edit mr-1 border-right border-dark pr-2' /><DeleteOutlined className='text-edit' /></>,
    },
    {
        id: 2,
        name: 'Juana',
        email: 'Singavera',
        phone: '+1 (872) 560-2324',
        role: 'Manager',
        permission: 'non',
        status: <div className='custom-control custom-switch'>
            <input
                type='checkbox'
                className='custom-control-input'
                id='customSwitchesChecked'
                defaultChecked
            />
            <label className='custom-control-label' htmlFor='customSwitchesChecked'>
            </label>
        </div>,
        action: <><FormOutlined className='text-edit mr-1 border-right border-dark pr-2' /><DeleteOutlined className='text-edit' /></>,
    },
    {
        id: 3,
        name: 'Juana',
        email: 'Singavera',
        phone: '+1 (872) 560-2324',
        role: 'Manager',
        permission: 'non',
        status: <div className='custom-control custom-switch'>
            <input
                type='checkbox'
                className='custom-control-input'
                id='customSwitchesChecked1'
                defaultChecked
            />
            <label className='custom-control-label' htmlFor='customSwitchesChecked1'>
            </label>
        </div>,
        action: <><FormOutlined className='text-edit mr-1 border-right border-dark pr-2' /><DeleteOutlined className='text-edit' /></>,
    },
    {
        id: 4,
        name: 'Juana',
        email: 'Singavera',
        phone: '+1 (872) 560-2324',
        role: 'Manager',
        permission: 'non',
        status: <div className='custom-control custom-switch'>
            <input
                type='checkbox'
                className='custom-control-input'
                id='customSwitches3'
                readOnly
            />
            <label className='custom-control-label' htmlFor='customSwitches3'>
            </label>
        </div>,
        action: <><FormOutlined className='text-edit mr-1 border-right border-dark pr-2' /><DeleteOutlined className='text-edit' /></>,
    },
    {
        id: 5,
        name: 'Juana',
        email: 'Singavera',
        phone: '+1 (872) 560-2324',
        role: 'Manager',
        permission: 'non',
        status: <div className='custom-control custom-switch'>
            <input
                type='checkbox'
                className='custom-control-input'
                id='customSwitches5'
                readOnly
            />
            <label className='custom-control-label' htmlFor='customSwitches5'>
            </label>
        </div>,
        action: <><FormOutlined className='text-edit mr-1 border-right border-dark pr-2' /><DeleteOutlined className='text-edit' /></>,
    },
    {
        id: 6,
        name: 'Juana',
        email: 'Singavera',
        phone: '+1 (872) 560-2324',
        role: 'Manager',
        permission: 'non',
        status: <div className='custom-control custom-switch'>
            <input
                type='checkbox'
                className='custom-control-input'
                id='customSwitches5'
                readOnly
            />
            <label className='custom-control-label' htmlFor='customSwitches5'>
            </label>
        </div>,
        action: <><FormOutlined className='text-edit mr-1 border-right border-dark pr-2' /><DeleteOutlined className='text-edit' /></>,
    },
];

const columns = [
    {
        dataField: 'name',
        text: <>
        <UncontrolledDropdown color="light" light expand="lg" setActiveFromChild>
          <DropdownToggle tag="a" className="nav-link text-muted mb-2" caret>
          Name<DownOutlined className='dropdown-arrow ml-2' />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a" href="/blah" active>Link</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
            <input className="form-control py-2 border-right-0 border corporate" type="search" placeholder='Search' id="example-search-input" />
        </>,
        sort: true,
    },
    {
        dataField: 'email',
        text: <>
        <UncontrolledDropdown color="light" light expand="lg" setActiveFromChild>
          <DropdownToggle tag="a" className="nav-link text-muted mb-2" caret>
          Email<DownOutlined className='dropdown-arrow ml-2' />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a" href="/blah" active>Link</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
            <input className="form-control py-2 border-right-0 border corporate" type="search" placeholder='Search' id="example-search-input" />
        </>,
        sort: true,
    },
    {
        dataField: 'phone',
        text: <>
        <UncontrolledDropdown color="light" light expand="lg" setActiveFromChild>
          <DropdownToggle tag="a" className="nav-link text-muted mb-2" caret>
          Phone<DownOutlined className='dropdown-arrow ml-2' />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a" href="/blah" active>Link</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
            <input className="form-control py-2 border-right-0 border corporate" type="search" placeholder='Search' id="example-search-input" />
        </>,
        sort: true,
    },
    {
        dataField: 'role',
        text: <>
        <UncontrolledDropdown color="light" light expand="lg" setActiveFromChild>
          <DropdownToggle tag="a" className="nav-link text-muted mb-2" caret>
          Role<DownOutlined className='dropdown-arrow ml-2' />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a" href="/blah" active>Link</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
            <input className="form-control py-2 border-right-0 border corporate" type="search" placeholder='Search' id="example-search-input" />
        </>,
        sort: true,
    },
    {
        dataField: 'permission',
        text: <>
        <UncontrolledDropdown color="light" light expand="lg" setActiveFromChild>
          <DropdownToggle tag="a" className="nav-link text-muted mb-2" caret>
          Permission<DownOutlined className='dropdown-arrow ml-2' />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a" href="/blah" active>Link</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
            <input className="form-control py-2 border-right-0 border corporate" type="search" placeholder='Search' id="example-search-input" />
        </>,
        sort: true,
    },
    {
        dataField: 'status',
        text: <>
        <UncontrolledDropdown color="light" light expand="lg" setActiveFromChild>
          <DropdownToggle tag="a" className="nav-link text-muted mb-2" caret>
          Status<DownOutlined className='dropdown-arrow ml-2' />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a" href="/blah" active>Link</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
            <input className="form-control py-2 border-right-0 border invisible" type="search" placeholder='Search' id="example-search-input" />
        </>,
        sort: true,
    },
    {
        dataField: 'action',
        text: <>
        <UncontrolledDropdown color="light" light expand="lg" setActiveFromChild>
          <DropdownToggle tag="a" className="nav-link text-muted mb-2" caret>
          Action<DownOutlined className='dropdown-arrow ml-2' />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a" href="/blah" active>Link</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
            <input className="form-control py-2 border-right-0 border invisible" type="search" placeholder='Search' id="example-search-input" />
        </>,
        sort: true,
    },
];


const sizePerPageRenderer = ({ options, currSizePerPage, onSizePerPageChange }) => (
    <React.Fragment>
        <label className="d-inline mr-1">Show</label>
        <Input type="select" name="select" id="no-entries" className="custom-select custom-select-sm d-inline col-1"
            defaultValue={currSizePerPage}
            onChange={(e) => onSizePerPageChange(e.target.value)}>
            {options.map((option, idx) => {
                return <option key={idx}>{option.text}</option>
            })}
        </Input>
        <label className="d-inline ml-1">entries</label>
    </React.Fragment>
);



const CustomToggleList = ({
    columns,
    onColumnToggle,
    toggles
}) => (
    <>

        <UncontrolledDropdown>
            <DropdownToggle tag="button" className="highactive btn bg-white btn-white border border-dark pl-2">Filters<FilterOutlined className='p-2' /></DropdownToggle>
            <DropdownMenu>
                {columns.map(column => ({
                    ...column,
                    toggle: toggles[column.dataField]
                }))
                    .map(column => (
                        <DropdownItem key={column.dataField} onClick={() => onColumnToggle(column.dataField)}>
                            {column.toggle && <i className='uil uil-check'></i>}
                            <span className="ml-2">{column.dataField}</span>
                        </DropdownItem>
                    ))
                }
            </DropdownMenu>
        </UncontrolledDropdown>
    </>
);

const TableWithColumnToggle = () => {
    // const history = useHistory();
    // const onAddcompany=()=>{
    //     history.push('/tables/basic')
    // }

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
        console.log("color....", isActive)
    };

    function rowClassNameFormat(row, rowIdx) {
        // row is whole row object
        // rowIdx is index of row
        return { backgroundColor: rowIdx % 2 === 0 ? 'red' : 'blue' };
      }

    return (
        <Card>
            <CardBody>
                <ToolkitProvider
                    keyField="id"
                    data={records}
                    columns={columns}
                    search
                    columnToggle

                >
                    {props => (
                        <div>
                            <Row>
                                <Col md={12}>
                                    <div className='d-flex float-right'>
                                        <Button className={isActive ? 'highactive' : 'btn-conpany text-white text-center p-0'} onClick={toggleClass}><Link to='/tables/basic' className='text-white pl-2'>Add Company <PlusOutlined className='add-company' /></Link></Button>
                                        <Button className='highactive btn mx-3 bg-white text-dark text-center'><Link className='text-dark pl-2'>Export CSV<DownloadOutlined className='add-company' /></Link></Button>
                                        <CustomToggleList {...props.columnToggleProps} />
                                    </div>
                                </Col>
                            </Row>

                            <BootstrapTable
                            trStyle={rowClassNameFormat}
                                {...props.baseProps}
                                bordered={false}
                                pagination={paginationFactory({ sizePerPage: 5, sizePerPageRenderer: sizePerPageRenderer, sizePerPageList: [{ text: '5', value: 5, }, { text: '10', value: 10 }, { text: '25', value: 25 }, { text: 'All', value: records.length }] })}
                                wrapperClasses="table-responsive"
                                classes='text-center'
                            />
                        </div>
                    )}
                </ToolkitProvider>
            </CardBody>
        </Card>
    );
};

const ListOfCompany = () => {
    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={4}>
                    <h3>Company Management</h3>
                </Col>
                <Col md={8}>
                    {/* <ToolkitProvider
                    keyField="id"
                    data={records}
                    columns={columns}
                    search
                    columnToggle
                    
                >
                    {props => (
                        <div>
                            <Row>
                                <Col>
                                    <CustomToggleList {...props.columnToggleProps} />
                                </Col>
                            </Row>
                        </div>
                    )}
                </ToolkitProvider> */}
                </Col>
            </Row>
            <Row>
                <Col>
                    <TableWithColumnToggle />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default ListOfCompany;
