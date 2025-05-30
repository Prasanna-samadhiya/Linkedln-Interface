import { Link } from "react-router-dom"
import { RegisterCard,ScreenWrapper,StyledInput, SubmitButton } from "../Appstyle"
import AuthLayout from "../../Layout/AuthLayout"
import { useEffect, useState } from "react";
import axios from "axios";
import { Alert } from "@mui/material";

interface Props {}

function Login(props: Props) {
    const {} = props

    
    interface Logindata {
            email:string;
            password:string;
    }

        const [Lata,SetLata] = useState<Logindata>({email:"",password:""})
        const [err,seterr] = useState<string>("")
        const [loggedin,setlogged] = useState<boolean>(false)

        useEffect(()=>{
            if(Lata.email==""||Lata.password==""){
               seterr("Fields are empty")
            }else if(!Lata.email.includes("@gmail.com")){
               seterr("Invalid email")
            }else{
                seterr("")
            }
        },[Lata])
    
        const HandleChange =(e:any)=>{
            SetLata({...Lata,[e.target.name]:e.target.value})
            console.log(Lata)
        }

        const Handleclick = ()=>{
            axios.post("http://localhost:3000/auth/login",Lata,{withCredentials:true}).then((result)=>{
                console.log(result);
                setlogged(true)
            }).catch((err)=>{
                console.log(err)
            })
        }

    return (
        <AuthLayout>
              <ScreenWrapper>
                <div>{loggedin?<Alert>Logged In</Alert>:null}</div>
             <RegisterCard>
                <h1>Login</h1>
                <div>Email:<StyledInput onChange={HandleChange} name="email"></StyledInput></div>
                <div>Password:<StyledInput onChange={HandleChange} name="password"></StyledInput></div>
                <SubmitButton onClick={Handleclick}>Login</SubmitButton>
                Do not have a account click <Link to="/Register">Here</Link>
                <div style={{color:"red",textAlign:"center",padding:"4px"}}>{err}</div>
             </RegisterCard>
             </ScreenWrapper>
        </AuthLayout>
    )
}

export default Login
