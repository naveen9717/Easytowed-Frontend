import React, { Fragment } from 'react';
import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { Big, Comment, Issues, Medium, Resolved, Small } from '../../../../Constant';

const IssueClass = ({ register,errors  }) => {
    return (
        <Fragment>
            <Row>
                
                <Col sm="4">
                    <FormGroup>
                        <Label>Business Name</Label>
                        <input className="form-control" type="text" name="business_name" placeholder="Business Name" {...register('business_name')} />
                        <span style={{ color: 'red' }}>{errors.business_name && 'Business Name is required'}</span>
                    </FormGroup>
                </Col>

                <Col sm="4">
                <FormGroup>
                        <Label>Address</Label>
                        <input className="form-control" type="text" name="address" placeholder="Add Address" {...register('address')} />
                        <span style={{ color: 'red' }}>{errors.address && 'Address is required'}</span>

                    </FormGroup>
                </Col>
                <Col sm="4">
                <FormGroup>
                        <Label>Price</Label>
                        <input className="form-control" type="text" name="price" placeholder="Add Price" {...register('price')} />
                        <span style={{ color: 'red' }}>{errors.price && 'Price is required'}</span>

                    </FormGroup>
                </Col>
            </Row>
        </Fragment>
    );
};

export default IssueClass;