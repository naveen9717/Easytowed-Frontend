import React, { Fragment,useState,useEffect } from 'react';
import { Col, FormGroup, Label, Row,Form } from 'reactstrap';
import { UploadProjectFile } from '../../../../Constant';
import { Dropzone, FileMosaic } from "@dropzone-ui/react";
import { Controller } from "react-hook-form";
import Dropzones from 'react-dropzone-uploader';
import { DropzoneArea } from 'material-ui-dropzone';

const UploadProjectFileClass = ({ handleVenueImage,control }) => {
  const [fileInfos, setFileInfos] = useState([]);

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
   
  }
  
  useEffect(() => {
    // Only way to use a state for a function, because the setter function
    // can take a callback to set the new value
    handleVenueImage(fileInfos);
  }, [fileInfos]);

  console.log('fileInfos',fileInfos)
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
        
            {/* <Dropzone onChange={updateFiles} value={files} >
            {files.map((file) => (
             <FileMosaic {...file} preview />
             ))}
           </Dropzone> */}
   

                                    <div className="dz-message needsclick">
                                      <DropzoneArea
                                          // initialFiles={["http://res.cloudinary.com/dgzkc2vjv/image/upload/v1707396746/Easytowed/Venues/thr0darewbgeqpqo3yb0.png","http://res.cloudinary.com/dgzkc2vjv/image/upload/v1707396747/Easytowed/Venues/nrize4r48l9b3tyfqhcr.jpg"]}
                                          filesLimit={20}
                                          onChange={(file) => setFileInfos(file)}
                                        />
                                    </div> 
                              

       {/* <Controller
            control={control}
            name={"picture"}
            rules={{ required: "Recipe picture is required" }}
            render={({ field: { value, onChange, ...field } }) => {
              return (
                <input
                  {...field}
                  value={value?.fileName}
                  onChange={(event) => {
                    onChange(event.target.files);
                  }}
                  type="file"
                  id="picture"
                  multiple
                />
              );
            }}
          /> */}
            {/* <input className="form-control" type="file" name="gallery"   placeholder="Gallery" {...register('gallery')} multiple/> */}

          </FormGroup>
        </Col>
      </Row>
    </Fragment>
  );
};

export default UploadProjectFileClass;

