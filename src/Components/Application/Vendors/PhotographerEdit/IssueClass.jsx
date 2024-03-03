import React, { Fragment } from 'react';
import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { Big, Comment, Issues, Medium, Resolved, Small } from '../../../../Constant';

const IssueClass = ({ register,errors,data  }) => {
    return (
        <Fragment>
            <Row>
                <Col sm="4">
                <FormGroup>
                        <Label>Address</Label>
                        <input className="form-control" type="text" name="address" defaultValue={data?.address} placeholder="Add Address" {...register('address',{ required: true })} />
                        <span style={{ color: 'red' }}>{errors.address && 'Address is required'}</span>

                    </FormGroup>
                </Col>
                
                <Col sm="4">
                    <FormGroup>
                        <Label>Business Name</Label>
                        <input className="form-control" type="text" name="business_name" defaultValue={data?.business_name} placeholder="Business Name" {...register('business_name',{ required: true })} />
                        <span style={{ color: 'red' }}>{errors.business_name && 'Business Name is required'}</span>
                    </FormGroup>
                </Col>
                <Col sm="4">
                    <FormGroup>
                        <Label>Price</Label>
                        <input className="form-control" type="text" name="price" defaultValue={data?.price} placeholder="Price" {...register('price',{ required: true })} />
                        <span style={{ color: 'red' }}>{errors.price && 'Price Name is required'}</span>
                    </FormGroup>
                </Col>
            </Row>
        </Fragment>
    );
};

export default IssueClass;