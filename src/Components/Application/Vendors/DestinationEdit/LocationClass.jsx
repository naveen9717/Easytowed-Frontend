import React, { Fragment,useState } from 'react';
import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { Big, Comment, Issues, Medium, Resolved, Small } from '../../../../Constant';
import Select from 'react-select';


const dataList = [
    {
      name: "Delhi",
      code: "DL",
      locality: [
        "Central Delhi",
        "East Delhi",
        "New Delhi",
        "North Delhi",
        "North East Delhi",
        "North West Delhi",
        "Shahdara",
        "South Delhi",
        "South East Delhi",
        "South West Delhi",
        "West Delhi"
      ]
    },
    {
      name: "Noida",
      code: "Noida",
      locality: [
        "Sector 44",
        "Sector 18",
        "Sector 22",
        "Sector 62",
        "Sector 144"
      ]
    }
  ];

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
const LocationClass = ({ register,errors,data  }) => {

    const [fromCities, setFromCities] = useState("");
    const [fromLocality, setFromLocality] = useState([]);

  const handleFromCountries = (e) => {
    const city = dataList.find(
      (city) => city.name === e.target.value
    );
    setFromCities(city.name);
    setFromLocality(city.locality);
  };

  // console.log('data',data)
    return (
        <Fragment>
            <Row>
            <Col sm="4">
                    <FormGroup>
                        <Label>Outside Decor Available</Label>
                        <select type="select" name="isDecor" defaultValue={data.isDecor} className="form-control input-air-primary digits" {...register('isDecor')} >
                        {options.map((option, key) => (
                          <option key={key} title={option.code} value={option.code}>
                             {option.name}
                         </option>
                        ))}
                        </select>
                         <span style={{ color: 'red' }}>{errors.isActive && 'isDecor is required'}</span>
                    </FormGroup>
                </Col>
                
                <Col sm="4">
                    <FormGroup>
                        <Label>IsActive</Label>
                        <select type="select" name="isCatering" defaultValue={data.isCatering} className="form-control input-air-primary digits" {...register('isCatering')} >
                        {options.map((option, key) => (
                          <option key={key} title={option.code} value={option.code}>
                             {option.name}
                         </option>
                        ))}
                        </select>
                         <span style={{ color: 'red' }}>{errors.isActive && 'isCatering is required'}</span>
                    </FormGroup>
                </Col>
                <Col sm="4">
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

export default LocationClass;