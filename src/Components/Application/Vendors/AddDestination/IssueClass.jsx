import React, { Fragment } from 'react';
import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { Big, Comment, Issues, Medium, Resolved, Small } from '../../../../Constant';

const IssueClass = ({ register,errors  }) => {
    return (
        <Fragment>
            <Row>
                
                <Col sm="4">
                    <FormGroup>
                        <Label>Number of Room</Label>
                        <input className="form-control" type="text" name="room" placeholder="Number of Room" {...register('room',{required:true})} />
                        <span style={{ color: 'red' }}>{errors.business_name && 'Business Name is required'}</span>
                    </FormGroup>
                </Col>

                <Col sm="4">
                <FormGroup>
                        <Label>Address</Label>
                        <input className="form-control" type="text" name="address" placeholder="Add Address" {...register('address',{required:true})} />
                        <span style={{ color: 'red' }}>{errors.address && 'Address is required'}</span>

                    </FormGroup>
                </Col>
                <Col sm="4">
                <FormGroup>
                        <Label>2 Days package for 150 people including mehendi+ sangeet + haldi + wedding</Label>
                        <input className="form-control" type="text" name="price" placeholder="Add Price" {...register('price',{required:true})} />
                        <span style={{ color: 'red' }}>{errors.price && 'Price is required'}</span>

                    </FormGroup>
                </Col>
            </Row>
        </Fragment>
    );
};

export default IssueClass;