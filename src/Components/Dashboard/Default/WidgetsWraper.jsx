import React from 'react';
import { Col, Row } from 'reactstrap';
import { Widgets2Data, Widgets2Data2 } from '../../../Data/DefaultDashboard';
import Widgets1 from '../../Common/CommonWidgets/Widgets1';
import Widgets2 from '../../Common/CommonWidgets/Widgets2';

const WidgetsWrapper = () => {

  const WidgetsData = {
    title: 'Photograhpers',
    gros: 50,
    total: 10_000,
    color: 'secondary',
    icon: 'cart',
  };

const WidgetsData2 = {
    title: 'Venues',
    gros: 20,
    total: 7000,
    color: 'warning',
    icon: 'return-box',
  };
  const WidgetsData3 = {
    title: 'Users',
    gros: 70,
    total: 4_200,
    color: 'primary',
    icon: 'tag',
  };
 const WidgetsData4 = {
    title: 'Locations',
    gros: 70,
    total: 5700,
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
