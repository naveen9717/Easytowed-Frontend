import React, { Fragment,useState } from 'react';
import { Col, FormGroup, Label, Row } from 'reactstrap';
import { ClientName } from '../../../../Constant';


const options = [
    {
      name: "Yes",
      code: "yes"
    },
    {
        name: "No",
        code: "no"
    }
  ];

const ClientNameClass = ({ register, errors,data }) => {

    const [selected, setSelected] = useState("");

    const handleFromCountries = (e) => {
      const sel = options.find(
        (option) => option.name === e.target.value
      );
      setSelected(options.name);
    };
    return (
        <Fragment>
             <Row>
                <Col sm="3">
                    <FormGroup>
                        <Label>Wedding Price Veg</Label>
                        <input className="form-control" type="text" name="wedding_price_veg" defaultValue={data?.wedding_price_veg} placeholder="Add Wedding Price Veg" {...register('wedding_price_veg',{ required: true })} />
                        <span style={{ color: 'red' }}>{errors.wedding_price_veg && 'Price is required'}</span>
                    </FormGroup>
                </Col>
                <Col sm="3">
                    <FormGroup>
                        <Label>Wedding Price Non Veg</Label>
                        <input className="form-control" type="number" name="wedding_price_nonveg" defaultValue={data?.wedding_price_nonveg} placeholder="Add Wedding Price Non Veg" {...register('wedding_price_nonveg',{ required: true })} />
                        <span style={{ color: 'red' }}>{errors.wedding_price_nonveg && 'Price is required'}</span>
                    </FormGroup>
                </Col>
                <Col sm="2">
                    <FormGroup>
                        <Label>Engagement Price Veg</Label>
                        <input className="form-control" type="text" name="engagement_price_veg" defaultValue={data?.engagement_price_veg} placeholder="Add Engage. Price Veg" {...register('engagement_price_veg',{ required: true })} />
                        <span style={{ color: 'red' }}>{errors.engagement_price_veg && 'Price is required'}</span>
                    </FormGroup>
                </Col>
                <Col sm="2">
                    <FormGroup>
                        <Label>Engagement Price Non Veg</Label>
                        <input className="form-control" type="text" name="engagement_price_nonveg" defaultValue={data?.engagement_price_nonveg} placeholder="Add Engage. Price NonVeg" {...register('engagement_price_nonveg',{ required: true })} />
                        <span style={{ color: 'red' }}>{errors.engagement_price_nonveg && 'Price is required'}</span>
                    </FormGroup>
                </Col>
                <Col sm="2">
                    <FormGroup>
                        <Label>IsActive</Label>
                        <select type="select" name="isActive" defaultValue={data.isActive} className="form-control input-air-primary digits" {...register('isActive')} >
                        {options.map((option, key) => (
                          <option key={key} title={option.code} value={option.code}>
                             {option.name}
                         </option>
                        ))}
                        </select>
                         <span style={{ color: 'red' }}>{errors.isActive && 'Price is required'}</span>
                    </FormGroup>
                </Col>
            </Row>
        </Fragment>
    );
};

export default ClientNameClass;