import React, { Fragment, useContext,useState } from 'react';
import { Breadcrumbs, Btn } from '../../../../AbstractElements';
import ProjectContext from '../../../../_helper/Project';
import { Add, Cancel } from '../../../../Constant';
import ProjectTitleClass from './ProjectTitle';
import IssueClass from './IssueClass';
import LocationClass from './LocationClass';
import EnterSomeDetailsClass from './EnterSomeDetails';
import UploadProjectFileClass from './UploadProjectFile';
import { useNavigate, Link } from 'react-router-dom';
import { useForm,Controller } from 'react-hook-form';
import { Container, Row, Col, Card, CardBody, Form } from 'reactstrap';
import CustomizerContext from '../../../../_helper/Customizer';
import axios from "axios";
import { toast } from 'react-toastify';


const AddPhotographer = () => {
  const history = useNavigate();
  const { layoutURL } = useContext(CustomizerContext);
  const project = useContext(ProjectContext);
  const [selectedImages, setSelectedImages] = useState([]);
  const [files, setFiles] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm();

  function handleVenueImage(data) {
    setSelectedImages(data);
    console.log('handleVenueImage',data)
    // setFiles([])
  }

  console.log('selectedImages',selectedImages)
  const AddProject = async(data) => {
    setFiles([]);
    console.log('data',data)
    // const userData = {
    //   email: data.email,
    //   password: data.password
   if(selectedImages){
    for (let i = 0; i < selectedImages.length; i++){
      const file = selectedImages[i];
      const formData  = new FormData ();
      formData.append("file", file);
      formData.append("upload_preset",`${process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET}`);
      formData.append("cloud_name", `${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}`);
      formData.append("folder", `Easytowed/Photographers/`);

      // await fetch(`https://api.cloudinary.com/v1_1/dgzkc2vjv/image/upload`,
      // {
      //   method: "POST",
      //   body: formData,
      // }).then(resp => resp.json())
      // .then(datas => {
      // console.log('cloudinarydata',datas)
      // setFiles([...files,datas.url])
      // })
      // .catch(err => console.log(err))
      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );
        const res = await response.json();
        files.push(res.secure_url);
        console.log('cloudinarydata',res)
      } catch (error) {
        console.log(error)
      }
    }

  }

  console.log('selectedImages,files',selectedImages.length+','+files.length)
    if (files.length === selectedImages.length) {
      data.images = files;
      console.log('files',files)
      console.log('final-data',data)
      // project.addNewProject(data);
      // console.log('updatedata',data)
          axios.post(`${process.env.REACT_APP_NODE_BACKEND_URL}/api/photographers/register`, data).then((response) => {
            console.log('response',response)
            toast.success(response.data);
          });
          
    //   axios.post('http://localhost:8800/api/venues/register').then((response) => {
    //   console.log(response.data);
    // });
      // history(`${process.env.PUBLIC_URL}/venues-list/${layoutURL}`);
    } 
  };

  return (
    <Fragment>
      <Breadcrumbs parent='Photographers' title='Photographer Create' mainTitle='Photographer Create' />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardBody>
                <Form className='theme-form' onSubmit={handleSubmit(AddProject)}>
                  <ProjectTitleClass register={register} errors={errors} />
                  <IssueClass register={register} errors={errors}/>
                  <LocationClass register={register} errors={errors}/>
                  <EnterSomeDetailsClass register={register} errors={errors} />
                  <UploadProjectFileClass handleVenueImage={handleVenueImage} control={control} />
                  <Row>
                    <Col>
                      <div className='text-end'>
                        <Btn attrBtn={{ color: 'success', className: 'me-3' }}>{Add}</Btn>
                        <Link to={`${process.env.PUBLIC_URL}/app/project/project-list`}>
                          <Btn attrBtn={{ color: 'danger' }}>{Cancel}</Btn>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default AddPhotographer;
