import React, { Fragment } from 'react';
import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { Doing, Done, ProgressLevel, ProjectRate, ProjectStatus } from '../../../../Constant';

const ProjectRateClass = ({ register,errors }) => {
    return (
        <Fragment>
             <Row>
                <Col sm="6">
                    <FormGroup>
                        <Label>Guest Range</Label>
                        <input className="form-control" type="text" name="guest_range" placeholder="Add Guest Range" {...register('guest_range',{required:true})} />
                        <span style={{ color: 'red' }}>{errors.guest_range && 'Guest Range is required'}</span>
                    </FormGroup>
                </Col>
                <Col sm="6">
                    <FormGroup>
                        <Label>No of Halls</Label>
                        <input className="form-control" type="number" name="halls" placeholder="Add No of Halls" {...register('halls',{required:true})} />
                        <span style={{ color: 'red' }}>{errors.halls && 'Halls Number is required'}</span>
                    </FormGroup>
                </Col>
            </Row>
        </Fragment>
    );
};

export default ProjectRateClass;