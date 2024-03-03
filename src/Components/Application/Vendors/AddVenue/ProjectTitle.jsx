import React, { Fragment } from 'react';
import { Col, FormGroup,  Label, Row } from 'reactstrap';

const ProjectTitleClass = ({ register, errors }) => {
    return (
        <Fragment>
            <Row>
            <Col sm="4">
                   <FormGroup>
                        <Label>Name</Label>
                        <input className="form-control" type="text" name="name" placeholder="Name" {...register('name')} />
                        <span style={{ color: 'red' }}>{errors.name && 'Name is required'}</span>
                    </FormGroup>
                </Col>
                <Col sm="4">
                <FormGroup>
                        <Label>Email</Label>
                        <input className="form-control" type="email" name="email" placeholder="Add Email" {...register('email')} />
                        <span style={{ color: 'red' }}>{errors.email && 'Email is required'}</span>
                    </FormGroup>
                    
                </Col>
                <Col sm="4">
                    <FormGroup>
                        <Label>Mobile Number</Label>
                        <input className="form-control" type="text" name="number" placeholder="Add Phone Number" {...register('phone')} />
                        <span style={{ color: 'red' }}>{errors.phone && 'Mobile No is required'}</span>
                    </FormGroup>
                </Col>
                
            </Row>
        </Fragment>
    );
};

export default ProjectTitleClass;