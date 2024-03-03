import React, { Fragment,useState,useEffect,useContext } from 'react';
import { Col, Container, Form } from 'reactstrap';
import { Breadcrumbs } from '../../../../AbstractElements';
import EditMyProfile from './EditmyProfile';
import MyProfileEdit from './MyProfile';
import UserTable from './UserTable';
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { AuthContext } from "../../../../context/authContext";

const UsersEditContain = () => {
  const [mockDataTeam, setmockDataTeam] = useState('');
  const [isLoading, setIsLoading] = useState(true)
  // const { userId } = useParams();
  const { currentUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm();



  const onEditSubmit = (data) => {
      console.log('update-data',data)
  }

// console.log('userId',userId)
  const getUserFromApi = async() => {
    await axios.get(`${process.env.REACT_APP_NODE_BACKEND_URL}api/users/find/${currentUser.id}`)
    .catch(err => console.log(err))
    .then(resp => {
      setmockDataTeam(resp.data)
      setIsLoading(false)
    })
}
  useEffect(() => {
    getUserFromApi()
  }, [mockDataTeam]);

  const AddProject = (data) => {
    
      // project.addNewProject(data);
      console.log('updatedata',data)
          axios.put(`${process.env.REACT_APP_NODE_BACKEND_URL}api/users/update/${currentUser.id}`, data).then((response) => {
            console.log('response',response)
            toast.success(response.data);
          });
          
    //   axios.post('http://localhost:8800/api/venues/register').then((response) => {
    //   console.log(response.data);
    // });
 
  };

  return (
    <Fragment>
      <Breadcrumbs mainTitle='Edit Profile' parent='Users' title='Edit Profile' />
      <Container fluid={true}>
        <div className='edit-profile'>
        {
        isLoading ? isLoading : 
           <Form onSubmit={handleSubmit(AddProject)}>

              <MyProfileEdit register={register} errors={errors} data={mockDataTeam}/>
           </Form>
         }
            {/* <Col xl='8'>
              <EditMyProfile />
            </Col> */}
      
        </div>
      </Container>
    </Fragment>
  );
};
export default UsersEditContain;
