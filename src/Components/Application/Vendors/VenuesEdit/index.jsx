import React, { Fragment, useContext,useState,useEffect } from 'react';
import { Breadcrumbs, Btn } from '../../../../AbstractElements';
import ProjectContext from '../../../../_helper/Project';
import { Add, Cancel } from '../../../../Constant';
import ProjectTitleClass from './ProjectTitle';
import ClientNameClass from './ClientName';
import ProjectRateClass from './ProjectRate';
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
import { useParams } from 'react-router-dom';

const VenuesEdit = () => {
  const history = useNavigate();
  const { layoutURL } = useContext(CustomizerContext);
  const project = useContext(ProjectContext);
  const [selectedImages, setSelectedImages] = useState([]);
  const [mockDataTeam, setmockDataTeam] = useState('');
  const [isLoading, setIsLoading] = useState(true)

  const [files, setFiles] = useState([]);
  const { userId } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm();

  function handleVenueImage(data) {
    setSelectedImages(data);
  }

  const getVenueFromApi = async() => {
    await axios.get(`${process.env.REACT_APP_NODE_BACKEND_URL}/api/venues/profile/${userId}`)
    .catch(err => console.log(err))
    .then(resp => {
      setmockDataTeam(resp.data)
      setIsLoading(false)
    })
}
 useEffect(() => {
  getVenueFromApi()
  }, [mockDataTeam]);

  const AddProject = async(data) => {
    setFiles([]);
   
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
      formData.append("folder", `Easytowed/Venues/`);

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
      console.log('update-data',data)
      // project.addNewProject(data);
      // console.log('updatedata',data)
          axios.put(`${process.env.REACT_APP_NODE_BACKEND_URL}/api/venues/update/${userId}`, data).then((response) => {
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
      <Breadcrumbs parent='Venues' title='Venue Edit' mainTitle='Venue Edit' />
      <Container fluid={true}>
        <Row>
        {
        isLoading ? isLoading :  <Col sm='12'>
        <Card>
          <CardBody>
            <Form className='theme-form' onSubmit={handleSubmit(AddProject)}>
              <ProjectTitleClass register={register} errors={errors} data={mockDataTeam}/>
              <IssueClass register={register} errors={errors} data={mockDataTeam}/>
              <LocationClass register={register} errors={errors} data={mockDataTeam}/>
              <ProjectRateClass register={register} errors={errors} data={mockDataTeam}/>
              <ClientNameClass register={register} errors={errors} data={mockDataTeam} />
              <EnterSomeDetailsClass register={register} errors={errors} data={mockDataTeam}/>
              <UploadProjectFileClass handleVenueImage={handleVenueImage} control={control} data={mockDataTeam}/>
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
      }
         
        </Row>
      </Container>
    </Fragment>
  );
};

export default VenuesEdit;
