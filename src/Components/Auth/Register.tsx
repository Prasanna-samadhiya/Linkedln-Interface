import { Link, useNavigate } from "react-router-dom"
import { RegisterCard,ScreenWrapper,StyledInput, SubmitButton } from "../Appstyle"
import AuthLayout from "../../Layout/AuthLayout"
import { useEffect, useState } from "react"
import axios from "axios"
import { Alert } from "@mui/material"

interface Props {}

function Register(props: Props) {
    const {} = props
    interface Registerdata {
        name:string;
        email:string;
        password:string;
        cpassword:string;
    }
    const [Rdata,SetRdata] = useState<Registerdata>({name:"",email:"",password:"",cpassword:""})
    const [err,seterr] = useState<string>()
    const [registered,setregistered] = useState<boolean>()

    useEffect(()=>{
        console.log(typeof Rdata.name)
        if(Rdata.name==""||Rdata.email==""||Rdata.password==""||Rdata.cpassword==""){
           seterr("Fields are empty")
        }else if(typeof Rdata.name != 'string'){
           seterr("Enter valid name")
        }else if(!Rdata.email.includes("@gmail.com")){
           seterr("Invalid email")
        }else if(Rdata.password.length<6){
           seterr("enter password of at least 6 length")
        }else if(Rdata.cpassword.length<6){
           seterr("enter confirmed password of at least 6 length")
        }
        else if(Rdata.password!=Rdata.cpassword){
           seterr("passwords does not match")
        }else{
            seterr("")
        }
    },[Rdata])

    const HandleChange =(e:any)=>{
        SetRdata({...Rdata,[e.target.name]:e.target.value})
        console.log(Rdata)
    }

    const navigate = useNavigate();

    const Handleclick = ()=>{
            axios.post("http://localhost:3000/auth/register",Rdata,{withCredentials:true}).then((result)=>{
                console.log(result);
                setregistered(true);
                navigate("/verify");
            }).catch((err)=>{
                console.log(err)
            })
        }

    return (
        <div>
            <AuthLayout>
              <ScreenWrapper>
               <div>{registered?<Alert>Registered</Alert>:null}</div>
             <RegisterCard>
                <h1>Register</h1>
                <div>Name:<StyledInput onChange={HandleChange} name="name"></StyledInput></div>
                <div>Email:<StyledInput onChange={HandleChange} name="email"></StyledInput></div>
                <div>Password:<StyledInput onChange={HandleChange} name="password"></StyledInput></div>
                <div>Confirm Password:<StyledInput onChange={HandleChange} name="cpassword"></StyledInput></div>
                <SubmitButton onClick={Handleclick}>Register</SubmitButton>
                Alredy registered log in <Link to="/Login">Here</Link>
                <div style={{color:"red",textAlign:"center",padding:"4px"}}>{err}</div>
             </RegisterCard>
             </ScreenWrapper>
             </AuthLayout>
        </div>
    )
}

export default Register
