import { Link, useNavigate } from "react-router-dom"
import { RegisterCard, ScreenWrapper, StyledInput, SubmitButton } from "./Appstyle"
import AuthLayout from "../../Layout/AuthLayout"
import { useEffect, useState } from "react";
import axios from "axios";
import { Alert } from "@mui/material";
import { loggedinSuccess } from "../../Redux/Slices/AuthSlice";
import { useDispatch } from "react-redux";

function Login() {

    interface LoginDataType {
        email: string;
        password: string;
    }

    const [LoginData, SetLdata] = useState<LoginDataType>({ email: "", password: "" })
    const [Err, SetErr] = useState<string>("")
    const [LoggedIn, SetLogged] = useState<boolean>(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (LoginData.email == "" || LoginData.password == "") {
            SetErr("Fields are empty")
        } else if (!LoginData.email.includes("@gmail.com")) {
            SetErr("Invalid email")
        } else {
            SetErr("")
        }
    }, [LoginData])

    const HandleChange = (e: any) => {
        SetLdata({ ...LoginData, [e.target.name]: e.target.value })
        console.log(LoginData)
    }

    const HandleClick = () => {
        if (Err == "") {
            axios.post("http://localhost:3000/auth/login", LoginData, { withCredentials: true }).then((result) => {
                console.log(result);
                SetLogged(true);
                dispatch(loggedinSuccess({User:{LoggedIn:true,User:result.data.user},Link:result.data.link}));
                navigate("/profile");
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    return (
        <AuthLayout>
            <ScreenWrapper>
                <div>{LoggedIn ? <Alert>Logged In</Alert> : null}</div>
                <RegisterCard>
                    <h1>Login</h1>
                    <div>Email:<StyledInput onChange={HandleChange} name="email"></StyledInput></div>
                    <div>Password:<StyledInput onChange={HandleChange} name="password"></StyledInput></div>
                    <SubmitButton onClick={HandleClick}>Login</SubmitButton>
                    <div>Do not have a account click <Link to="/Register">Here</Link></div>
                    <div>Forgot your password click <Link to="/forgot">Here</Link></div>
                    <div style={{ color: "red", textAlign: "center", padding: "4px" }}>{Err}</div>
                </RegisterCard>
            </ScreenWrapper>
        </AuthLayout>
    )
}

export default Login
