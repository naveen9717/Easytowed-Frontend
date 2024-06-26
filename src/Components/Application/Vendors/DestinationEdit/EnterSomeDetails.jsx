import React, { Fragment } from 'react';
import { Col, FormGroup, Label, Row } from 'reactstrap';
import { EnterSomeDetails } from '../../../../Constant';

const EnterSomeDetailsClass = ({ register, errors,data }) => {
  return (
    <Fragment>
      <Row>
        <Col>
          <FormGroup>
            <Label>About Us Vendor</Label>
            <textarea className='form-control' name='about' defaultValue={data?.about} placeholder="Tell Something about...." rows='3' {...register('about', { required: true })} />
            <span style={{ color: 'red' }}>{errors.about && 'Some Details is required'}</span>
          </FormGroup>
        </Col>
      </Row>
    </Fragment>
  );
};

export default EnterSomeDetailsClass;
