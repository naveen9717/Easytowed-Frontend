import React, { Fragment,useState } from 'react';
import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { Big, Comment, Issues, Medium, Resolved, Small } from '../../../../Constant';
import Select from 'react-select';


const dataList = [
    {
      name: "Delhi",
      code: "DL",
      localities: [
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
      localities: [
        "Sector 44",
        "Sector 18",
        "Sector 22",
        "Sector 62",
        "Sector 144"
      ]
    }
  ];
const LocationClass = ({ register,errors  }) => {

    const [fromCities, setFromCities] = useState("");
    const [fromLocality, setFromLocality] = useState([]);

  const handleFromCountries = (e) => {
    const city = dataList.find(
      (city) => city.name === e.target.value
    );
    setFromCities(city.name);
    setFromLocality(city.localities);
  };
    return (
        <Fragment>
            <Row>
                <Col sm="6">
                <FormGroup>
                        <Label>City</Label>
                
                        <select type="select" name="city" className="form-control input-air-primary digits" {...register('city')}  onChange={(e) => handleFromCountries(e)}>
                        <option value="blank">Choose Your City</option>
                        {dataList.map((city, key) => (
                          <option key={key} title={city.code} value={city.name}>
                             {city.name}
                         </option>
                        ))}
                        </select>
                    </FormGroup>
                </Col>
                
                <Col sm="6">
                    <FormGroup>
                        <Label>Locality</Label>
                          <select type="select" name="locality" className="form-control input-air-primary digits" {...register('locality')}>
                          {fromLocality.map((locality, key) => (
                            <option key={key} title="" value={locality}>
                                {locality}
                            </option>
                          ))}
                        </select>
                    </FormGroup>
                </Col>
            </Row>
        </Fragment>
    );
};

export default LocationClass;