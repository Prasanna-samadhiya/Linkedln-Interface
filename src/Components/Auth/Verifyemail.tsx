import { Link, useNavigate } from "react-router-dom"
import { RegisterCard, ScreenWrapper, StyledInput, SubmitButton } from "./Appstyle"
import AuthLayout from "../../Layout/AuthLayout"
import { useEffect, useState } from "react";
import axios from "axios";
import { Alert } from "@mui/material";

function Verify() {

    interface Verificationdata {
        email: string;
        otp: string;
    }

    const [VerifyData, SetVerifyData] = useState<Verificationdata>({ email: "", otp: "" });
    const [Verified, SetVerified] = useState<boolean>(false);
    const url = import.meta.env.VITE_BASE_URL;
    const [Err, SetErr] = useState<string>("");
    const navigate = useNavigate();

    useEffect(() => {
        if (VerifyData.email == "" || VerifyData.otp == "") {
            SetErr("Fields are empty")
        }else{
            SetErr("")
        }
    }, [VerifyData])

    const HandleChange = (e: any) => {
        SetVerifyData({ ...VerifyData, [e.target.name]: e.target.value })
    }
    console.log(VerifyData)

    const Handleclick = () => {
        if (Err == "") {
            axios.post(`${url}/auth/verifyotp`, VerifyData, { withCredentials: true }).then((result) => {
                console.log(result);
                SetVerified(true)
                navigate("/login")
            }).catch((err) => {
                console.log(err)
            })
        } else {
            console.log("err occured",Err,VerifyData)
        }
    }

    return (
        <AuthLayout>
            <ScreenWrapper>
                <div>{Verified ? <Alert>Email Verified</Alert> : null}</div>
                <RegisterCard>
                    <h1>Verify Email</h1>
                    <div>Email:<StyledInput onChange={HandleChange} name="email"></StyledInput></div>
                    <div>OTP:<StyledInput onChange={HandleChange} name="otp"></StyledInput></div>
                    <SubmitButton onClick={Handleclick}>Verify</SubmitButton>
                    Already Verified? click <Link to="/Login">Here</Link>
                </RegisterCard>
            </ScreenWrapper>
        </AuthLayout>
    )
}

export default Verify
