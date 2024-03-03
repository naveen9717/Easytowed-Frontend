import React, { Fragment,useState,useEffect } from 'react';
import { Col, FormGroup, Label, Row,Form } from 'reactstrap';
import { UploadProjectFile } from '../../../../Constant';
import { Dropzone, FileMosaic } from "@dropzone-ui/react";
import { Controller } from "react-hook-form";
import Dropzones from 'react-dropzone-uploader';
import { DropzoneArea } from 'material-ui-dropzone';

const UploadProjectFileClass = ({ handleVenueImage,control,data }) => {
  const [fileInfos, setFileInfos] = useState([]);
  const [media, setMedia] = useState(JSON.parse(data.gallery));


  const getUploadParams = ({ meta }) => {
    return {
      url: 'https://httpbin.org/post',
    };
  };
  const [files, setFiles] = React.useState([]);
  const updateFiles = (incommingFiles) => {
    setFiles(incommingFiles);
  };
  // const handleChangeStatus = ({ meta, file }, status) => {
  // };
  // const handleSubmit = (files, allFiles) => {
  //     allFiles.forEach(f => f.remove());
  //     toast.success('Dropzone successfully submitted !');
  // };
  const handleChangeStatus = ({ meta, file }, status) => { 
    // console.log(status, meta, file) 
    if (status === 'headers_received') {
      // alert(`${meta.name} uploaded!`)
      setFileInfos([...fileInfos, file]);
      // result = {...fileInfos, meta };
      // console.log('selectedImages2',typeof(handleClick))
    } else if (status === 'aborted') {
      alert(`${meta.name}, upload failed...`)
    } else if (status === 'removed') {
      // alert(fileInfos.indexOf(meta.name));
      // removeProduct(meta.index)
      setFileInfos(fileInfos.filter((data, idx) => idx !== fileInfos.indexOf(file) ))
    }
  }
  
 
  useEffect(() => {
    // Only way to use a state for a function, because the setter function
    // can take a callback to set the new value
    // const value = localStorage.getItem("vendors");
 
    // setMedia(JSON.parse(data));

    // setmockDataTeam(Object.values(response.data));
    handleVenueImage(fileInfos);
  }, [fileInfos]);



  // console.log('fileInfos',fileInfos)
  // const DropzoneSubmit = (files, allFiles) => {
  //   console.log(files.map(f => f.meta))
  //   // {register('files',{ required: true })} 
  //   allFiles.forEach(f => f.remove())
  // }

  return (
    <Fragment>
      <Row>
        <Col>
          <FormGroup>
            <Label>Gallery</Label>

                                    <div className="dz-message needsclick">
                                        <DropzoneArea
                                          // initialFiles={["http://res.cloudinary.com/dgzkc2vjv/image/upload/v1707396746/Easytowed/Venues/thr0darewbgeqpqo3yb0.png","http://res.cloudinary.com/dgzkc2vjv/image/upload/v1707396747/Easytowed/Venues/nrize4r48l9b3tyfqhcr.jpg"]}
                                          initialFiles={media}
                                          onChange={(file) => setFileInfos(file)}
                                        />
                                  
            
                                    </div> 

          </FormGroup>
        </Col>
      </Row>
    </Fragment>
  );
};

export default UploadProjectFileClass;

