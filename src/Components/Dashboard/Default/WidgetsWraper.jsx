import React,{useState,useEffect } from 'react';
import { Col, Row } from 'reactstrap';
import { Widgets2Data, Widgets2Data2 } from '../../../Data/DefaultDashboard';
import Widgets1 from '../../Common/CommonWidgets/Widgets1';
import Widgets2 from '../../Common/CommonWidgets/Widgets2';
import axios from "axios";

const WidgetsWrapper = () => {
  const [venues, setVenues] = React.useState([]);
  const [photo, setPhoto] = React.useState([]);
  const [users, setUsers] = React.useState([]);



  useEffect(() => {
    axios.get(`${process.env.REACT_APP_NODE_BACKEND_URL}/api/venues/findall`).then((response) => {
      setVenues(Object.values(response.data));
    });
    axios.get(`${process.env.REACT_APP_NODE_BACKEND_URL}/api/photographers/findall`).then((response) => {
      setPhoto(Object.values(response.data));
    });
    axios.get(`${process.env.REACT_APP_NODE_BACKEND_URL}/api/users/findall`).then((response) => {
      setUsers(Object.values(response.data));
    });
  }, []);


  const WidgetsData = {
    title: 'Photograhpers',
    gros: 50,
    total: photo.length,
    color: 'secondary',
    icon: 'cart',
  };

const WidgetsData2 = {
    title: 'Venues',
    gros: 20,
    total: venues.length,
    color: 'warning',
    icon: 'return-box',
  };
  const WidgetsData3 = {
    title: 'Users',
    gros: 70,
    total: users.length,
    color: 'primary',
    icon: 'tag',
  };
 const WidgetsData4 = {
    title: 'Locations',
    gros: 70,
    total: 100,
    color: 'success',
    icon: 'rate',
  };
  return (
    <>
      <Col xl='4' sm='6' className='box-col-6'>
        <Row>
          <Col xl='12'>
            <Widgets1 data={WidgetsData} />
          </Col>
          <Col xl='12'>
            <Widgets1 data={WidgetsData2} />
          </Col>
        </Row>
      </Col>
      <Col  xl='4' sm='6' className='box-col-6'>
        <Row>
          <Col xl='12'>
            <Widgets1 data={WidgetsData3} />
          </Col>
          <Col xl='12'>
            <Widgets1 data={WidgetsData4} />
          </Col>
        </Row>
      </Col>
     
    </>
  );
};

export default WidgetsWrapper;
