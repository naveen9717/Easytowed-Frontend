import React, { Fragment, useContext,useEffect,useState } from 'react';
import { Card, CardBody, CardHeader, Form, FormGroup, Input, Label, Row,Col,CardFooter } from 'reactstrap';
import { H5, H4, H6, P, Image, Btn } from '../../../../AbstractElements';
import { Link } from 'react-router-dom';
import { MyProfile, Bio, Password, Website, Save } from '../../../../Constant';
import CustomizerContext from '../../../../_helper/Customizer';
import { EditProfile, Company, Username, UsersCountryMenu, AboutMe, UpdateProfile, FirstName, LastName, Address, EmailAddress, PostalCode, Country, City } from '../../../../Constant';
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from 'react-toastify';
import CryptoJS from 'crypto-js';

const MyProfileEdit =  ({ register,errors,data  }) => {

  const { layoutURL } = useContext(CustomizerContext);
  // const { register, handleSubmit, formState: { errors } } = useForm();
 
  // const AddProject = (data) => {
    
  //     // project.addNewProject(data);
  //     console.log('updatedata',data)
  //         // axios.put(`http://localhost:8800/api/users/update/`, data).then((response) => {
  //         //   console.log('response',response)
  //         //   toast.success(response.data);
  //         // });
          
  //   //   axios.post('http://localhost:8800/api/venues/register').then((response) => {
  //   //   console.log(response.data);
  //   // });
 
  // };

  // console.log('encrptedData',encrptedData)
  // console.log('decrptedData',decrptedData)


  return (
    <Fragment>
      <Row>
      <Col xl='4'>
      <Card>
        <CardHeader>
          <H4 attrH4={{ className: 'card-title mb-0' }}>{MyProfile}</H4>
          <div className='card-options'>
            <a className='card-options-collapse' href='#javascript'>
              <i className='fe fe-chevron-up'></i>
            </a>
            <a className='card-options-remove' href='#javascript'>
              <i className='fe fe-x'></i>
            </a>
          </div>
        </CardHeader>
        <CardBody>
            <Row className='mb-2'>
              <div className='profile-title'>
                <div className='media'>
                  <Image attrImage={{ className: 'img-70 m-0 rounded-circle', alt: '', src: `${data.profilePic}` }} />
                  <div className='media-body'>
                    <Link to={`${process.env.PUBLIC_URL}/app/users/userProfile/${layoutURL}`}>
                      <H5 attrH5={{ className: 'mb-1' }}>{data.name}</H5>
                    </Link>
                    <P>ADMIN</P>
                  </div>
                </div>
              </div>
            </Row>
            <FormGroup className='mb-3'>
              <H6 attrH6={{ className: 'form-label' }}>{Bio}</H6>
              <Input type='textarea' className='form-control' rows='5' defaultValue={data.bio} />
            </FormGroup>
            <FormGroup className='mb-3'>
              <Label className='form-label'>{EmailAddress}</Label>
              <Input className='form-control' placeholder='your-email@domain.com' defaultValue={data.email}/>
            </FormGroup>
            <FormGroup className='mb-3'>
              <Label className='form-label'>{Password}</Label>
              <Input className='form-control' type='password' defaultValue={data.plain_password} />
            </FormGroup>
         
        </CardBody>
      </Card>
      </Col>
      <Col xl='8'>
         

           <Card>
                <CardHeader>
                    <H4 attrH4={{ className: "card-title mb-0" }}>{EditProfile}</H4>
                    <div className="card-options">
                        <a className="card-options-collapse" href="#javascript">
                            <i className="fe fe-chevron-up"></i>
                        </a>
                        <a className="card-options-remove" href="#javascript">
                            <i className="fe fe-x"></i>
                        </a>
                    </div>
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col md="6">
                            <FormGroup className="mb-3"> <Label className="form-label">{Company}</Label>
                                <input className="form-control" type="text" name="company" defaultValue={data.company} placeholder="Company"  {...register("company", { required: true })} /><span style={{ color: "red" }}>{errors.company && 'Company is required'} </span>
                            </FormGroup>
                        </Col>
                        <Col sm="6" md="6">
                            <FormGroup> <Label className="form-label">{Username}</Label>
                                <input className="form-control" type="text" name="username" placeholder="Username" {...register("username", { required: false })} defaultValue={data.username}/><span style={{ color: "red" }}>{errors.username && 'Username is required'} </span>
                            </FormGroup>
                        </Col>
                        <Col sm="6" md="6">
                            <FormGroup> <Label className="form-label">{EmailAddress}</Label>
                                <input className="form-control" type="email" name="email" placeholder="Email" {...register("email", { required: true })} defaultValue={data.email}/><span style={{ color: "red" }}>{errors.email && 'EmailAddress is required'} </span>
                            </FormGroup>
                        </Col>
                        <Col sm="6" md="6">
                            <FormGroup> <Label className="form-label">{Password}</Label>
                                <input className="form-control" type="text" name="password" placeholder="password" {...register("password", { required: false })} defaultValue={data.plain_password}/><span style={{ color: "red" }}>{errors.password && 'Password is required'} </span>
                            </FormGroup>
                        </Col>
                        <Col sm="6" md="4">
                            <FormGroup> <Label className="form-label">Phone</Label>
                                <input className="form-control" type="number" name="phone" placeholder="Phone" {...register("phone", { required: false })} defaultValue={data.number}/><span style={{ color: "red" }}>{errors.number && 'Phone is required'} </span>
                            </FormGroup>
                        </Col>
                        <Col sm="6" md="4">
                            <FormGroup><Label className="form-label">Name</Label>
                                <input className="form-control" type="text" name="name" placeholder="Name" {...register("name", { required: false })} defaultValue={data.name}/><span style={{ color: "red" }}>{errors.name && 'Name is required'} </span>
                            </FormGroup>
                        </Col>
                        <Col sm="6" md="4">
                        <FormGroup> <Label className="form-label">{City}</Label>
                                <input className="form-control" type="text" name="city" placeholder="City" {...register("city", { required: false })} defaultValue={data.city}/><span style={{ color: "red" }}>{errors.city && 'City is required'} </span>
                            </FormGroup>
                        </Col>
                        
                        
                        <Col md="12">
                            <div> <Label className="form-label">{AboutMe}</Label>
                                <textarea type="textarea" className="form-control" rows="5" name="bio" placeholder="Enter About your description" defaultValue={data.bio} {...register("bio", { required: false })}/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                   <Col>
                    <div className='text-end'>
                      <br></br>
                     <Btn attrBtn={{ color: "primary", type: "submit" }} >{UpdateProfile}</Btn>
                    </div>
                   </Col>
              </Row>
                 
                </CardBody>
        
           </Card>
      </Col>
      </Row>
      
    </Fragment>
  );
};
export default MyProfileEdit;
