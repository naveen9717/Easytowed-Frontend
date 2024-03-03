import React, { Fragment, useState, useEffect, useContext } from "react";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Btn, H4, P } from "../AbstractElements";
import { EmailAddress, ForgotPassword, Password, RememberPassword, SignIn } from "../Constant";

import { useNavigate } from "react-router-dom";
import man from "../assets/images/dashboard/profile.png";
import CustomizerContext from "../_helper/Customizer";
import OtherWay from "./OtherWay";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../context/authContext";

const Signin = ({ selected }) => {

  const { login } = useContext(AuthContext);
  const [err, setErr] = useState(null);
  const [togglePassword, setTogglePassword] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
   
    try {
      await login(input);
      localStorage.setItem("login", JSON.stringify(true));
      navigate("/");
      // localStorage.setItem("Name", currentUser?.name);
      // toast.success("Successfully logged in!..");
    } catch (err) {
      setErr(err.response.data);
      toast.error("You enter wrong password or email!..");
    }
  };

  console.log('user',currentUser)
  localStorage.setItem("Name", currentUser?.name);
  // const [email, setEmail] = useState("test@gmail.com");
  // const [password, setPassword] = useState("test123");
  // const [togglePassword, setTogglePassword] = useState(false);
  // const history = useNavigate();
  // const { layoutURL } = useContext(CustomizerContext);

  // const [value, setValue] = useState(localStorage.getItem("profileURL" || man));
  // const [name, setName] = useState(localStorage.getItem("Name"));

  // useEffect(() => {
  //   localStorage.setItem("profileURL", man);
  //   localStorage.setItem("Name", "Emay Walter");
  // }, [value, name]);

  // const loginAuth = async (e) => {
  //   e.preventDefault();
  //   setValue(man);
  //   setName("Emay Walter");
  //   if (email === "test@gmail.com" && password === "test123") {
  //     localStorage.setItem("login", JSON.stringify(true));
  //     history(`${process.env.PUBLIC_URL}/dashboard/default/${layoutURL}`);
  //     toast.success("Successfully logged in!..");
  //   } else {
  //     toast.error("You enter wrong password or username!..");
  //   }
  // };

  return (
    <Fragment>
      <Container fluid={true} className="p-0 login-page">
        <Row>
          <Col xs="12">
            <div className="login-card">
              <div className="login-main login-tab">
                <Form className="theme-form">
                  <H4>{selected === "simpleLogin" ? "" : "Sign In With Simple Login"}</H4>
                  <P>{"Enter your email & password to login"}</P>
                  <FormGroup>
                    <Label className="col-form-label">{EmailAddress}</Label>
                    <Input className="form-control" type="email" name="email" onChange={handleChange} />
                  </FormGroup>
                  <FormGroup className="position-relative">
                    <Label className="col-form-label">{Password}</Label>
                    <div className="position-relative">
                      <Input className="form-control" type={togglePassword ? "text" : "password"}  name="password" onChange={handleChange}  />
                      <div className="show-hide" onClick={() => setTogglePassword(!togglePassword)}>
                        <span className={togglePassword ? "" : "show"}></span>
                      </div>
                    </div>
                  </FormGroup>
                  <div className="position-relative form-group mb-0">
                    <div className="checkbox">
                      <Input id="checkbox1" type="checkbox" checked/>
                      <Label className="text-muted" for="checkbox1">
                        {RememberPassword}
                      </Label>
                    </div>
                    <a className="link" href="#javascript">
                      {ForgotPassword}
                    </a>
                    <Btn attrBtn={{ color: "primary", className: "d-block w-100 mt-2", onClick: (e) => handleLogin(e) }}>{SignIn}</Btn>
                  </div>
                  {/* <OtherWay /> */}
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </Fragment>
  );
};

export default Signin;
