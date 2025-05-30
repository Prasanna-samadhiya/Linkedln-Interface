import { Link, useNavigate } from "react-router-dom"
import { RegisterCard,ScreenWrapper,StyledInput, SubmitButton } from "../Appstyle"
import AuthLayout from "../../Layout/AuthLayout"
import { useEffect, useState } from "react";
import axios from "axios";
import { Alert } from "@mui/material";

interface Props {}

function Verify(props: Props) {
    const {} = props

    
    interface Vdata {
            email:string;
            otp:string;
    }

        const [Vata,SetVata] = useState<Vdata>({email:"",otp:""})
        const [verified,setverified] = useState<boolean>(false)
        const navigate = useNavigate();

        useEffect(()=>{
            
        },[])
    
        const HandleChange =(e:any)=>{
            SetVata({...Vata,[e.target.name]:e.target.value})
        }
        console.log(Vata)

        const Handleclick = ()=>{
            axios.post("http://localhost:3000/auth/verifyotp",Vata,{withCredentials:true}).then((result)=>{
                console.log(result);
                setverified(true)
                navigate("/login")
            }).catch((err)=>{
                console.log(err)
            })
        }

    return (
        <AuthLayout>
              <ScreenWrapper>
                <div>{verified?<Alert>Email Verified</Alert>:null}</div>
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
