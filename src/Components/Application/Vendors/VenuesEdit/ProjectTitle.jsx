import React, { Fragment,useState } from 'react';
import { Col, FormGroup,  Label, Row } from 'reactstrap';

const dataList = [
    {
      name: "5 Star",
      code: "DL"
    },
    {
      name: "4 Star",
      code: "Noida"
    },
    {
        name: "3 Star",
        code: "Noida"
    },
    {
        name: "Resorts",
        code: "Noida"
    },
    {
        name: "Farm Houses",
        code: "Noida"
    },
    {
        name: "Heritage Properties",
        code: "Noida"
    }
  ];
const ProjectTitleClass = ({ register, errors,data }) => {

    const [venuetype, setVenueType] = useState("");

  const handleFromCountries = (e) => {
    const city = dataList.find(
      (city) => city.name === e.target.value
    );
    setVenueType(city.name);
  };
    return (
        <Fragment>
            <Row>
            <Col sm="3">
                   <FormGroup>
                        <Label>Name</Label>
                        <input className="form-control" type="text" name="name" defaultValue={data?.name} placeholder="Name" {...register('name',{ required: true })} />
                        <span style={{ color: 'red' }}>{errors.name && 'Name is required'}</span>
                    </FormGroup>
                </Col>
                <Col sm="3">
                <FormGroup>
                        <Label>Venue Type</Label>
                
                        <select type="select" name="type" defaultValue={data?.type} className="form-control input-air-primary digits" {...register("type", { validate: (value) => value !== data.type })}  onChange={(e) => handleFromCountries(e)}>
                        <option value="blank">Choose Venue Type</option>
                        {dataList.map((city, key) => (
                          <option key={key} title={city.code} value={city.name}>
                             {city.name}
                         </option>
                        ))}
                        </select>
                    </FormGroup>
                </Col>
                <Col sm="3">
                <FormGroup>
                        <Label>Email</Label>
                        <input className="form-control" type="email" name="email" defaultValue={data?.email} placeholder="Add Email" {...register('email',{ required: true })} />
                        <span style={{ color: 'red' }}>{errors.email && 'Email is required'}</span>
                    </FormGroup>
                    
                </Col>
                <Col sm="3">
                    <FormGroup>
                        <Label>Mobile Number</Label>
                        <input className="form-control" type="text" name="number" defaultValue={data?.number} placeholder="Add Phone Number" {...register('phone',{ required: true })} />
                        <span style={{ color: 'red' }}>{errors.phone && 'Mobile No is required'}</span>
                    </FormGroup>
                </Col>
                
            </Row>
        </Fragment>
    );
};

export default ProjectTitleClass;