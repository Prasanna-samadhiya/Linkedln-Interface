import { Link, useNavigate } from "react-router-dom";
import { ImageUploadWrapper, RegisterCard, ScreenWrapper, StyledInput, SubmitButton } from "./Appstyle";
import AuthLayout from "../../Layout/AuthLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import { Alert } from "@mui/material";

interface RegisterData {
  name: string;
  email: string;
  password: string;
  cpassword: string;
  file?: File;
}

function Register() {
  const [Rdata, SetRdata] = useState<RegisterData>({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [Err, setErr] = useState<string>();
  const [Registered, setRegistered] = useState<boolean>(false);
  const url = import.meta.env.VITE_BASE_URL;;

  useEffect(() => {
    if (Rdata.name === "" || Rdata.email === "" || Rdata.password === "" || Rdata.cpassword === "") {
      setErr("Fields are empty");
    } else if (typeof Rdata.name !== "string") {
      setErr("Enter valid name");
    } else if (!Rdata.email.includes("@gmail.com")) {
      setErr("Invalid email");
    } else if (Rdata.password.length < 6) {
      setErr("Password must be at least 6 characters");
    } else if (Rdata.cpassword.length < 6) {
      setErr("Confirmed password must be at least 6 characters");
    } else if (Rdata.password !== Rdata.cpassword) {
      setErr("Passwords do not match");
    } else {
      setErr("");
    }
  }, [Rdata]);

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    SetRdata((prev) => ({ ...prev, [name]: value }));
  };

  const HandleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      SetRdata((prev) => ({ ...prev, file }));
    }
  };

  const navigate = useNavigate();

  const Handleclick = async () => {
    console.log(Err)
    if (Err === "") {
      const formData = new FormData();
      formData.append("name", Rdata.name);
      formData.append("email", Rdata.email);
      formData.append("password", Rdata.password);
      formData.append("description", "New user from React"); // optional field
      if (Rdata.file) {
        formData.append("file", Rdata.file);
      }

      try {
        const result = await axios.post(`${url}/auth/register`, formData, {withCredentials: true });
       
        console.log(result);
        setRegistered(true);
        navigate("/verify");
      } catch (err) {
        console.error(err);
        setErr("Registration failed");
      }
    } else {
      console.warn("Form validation failed");
    }
  };

  return (
    <AuthLayout>
      <ScreenWrapper>
        {Registered && <Alert severity="success">Successfully Registered</Alert>}
        <RegisterCard>
          <h1>Register</h1>
          <div>
            Name:
            <StyledInput onChange={HandleChange} name="name" />
          </div>
          <div>
            Email:
            <StyledInput onChange={HandleChange} name="email" />
          </div>
          <div>
            Password:
            <StyledInput type="password" onChange={HandleChange} name="password" />
          </div>
          <div>
            Confirm Password:
            <StyledInput type="password" onChange={HandleChange} name="cpassword" />
          </div>
          <ImageUploadWrapper>
            Upload Profile Picture:
            <StyledInput type="file" name="file" onChange={HandleFileUpload} />
          </ImageUploadWrapper>

          <SubmitButton onClick={Handleclick}>Register</SubmitButton>

          <div style={{ marginTop: "10px" }}>
            Already registered? Log in <Link to="/Login">Here</Link>
          </div>
          <div style={{color:"red"}}>{Err}</div>
        </RegisterCard>
      </ScreenWrapper>
    </AuthLayout>
  );
}

export default Register;
