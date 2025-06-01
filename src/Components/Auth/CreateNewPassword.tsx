import { Link, useLocation, useNavigate } from "react-router-dom"
import AuthLayout from "../../Layout/AuthLayout"
import { RegisterCard, ScreenWrapper, StyledInput, SubmitButton } from "../Appstyle"
import { useEffect, useState } from "react"
import axios from "axios"

interface Props {}

function CreateNewPassword(props: Props) {
    const {} = props

    interface Pdata{
        password:string;
        cpassword:string;
        token:string;
        fotp:string;
    }

    const [pdata,setpdata] = useState<Pdata>({password:"",cpassword:"",token:"",fotp:""})
    const [err,seterr] = useState<string>("")

    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const token = queryParams.get("token");

    const navigate = useNavigate()

    useEffect(()=>{
        
        if (!token) {
           // If no token is present, redirect to register
           navigate("/register");
        }

        if(pdata.password==""||pdata.cpassword==""){
            seterr("fields are empty")
        }else if(pdata.password.length<6){
            seterr("password must be of at least 6")
        }else if(pdata.cpassword.length<6){
            seterr("confirm password must be of at least 6")
        }else{
            seterr("")
        }
    },[pdata])

    const HandleChange =(e:any)=>{
            setpdata({...pdata,[e.target.name]:e.target.value})
            console.log(pdata)
        }

     const Handleclick = ()=>{
            if(err==""){
                console.log(queryParams.get('token'))
            axios.post("http://localhost:3000/auth/newp",{...pdata,token:token},{withCredentials:true}).then((result)=>{
                console.log(result);
                navigate("/login")
            }).catch((err)=>{
                console.log(err)
            })
            }
        }

    return (
        <AuthLayout>
              <ScreenWrapper>
             <RegisterCard>
                <h1>Create New Password</h1>
                <div>OTP:<StyledInput onChange={HandleChange} name="fotp"></StyledInput></div>
                <div>Password:<StyledInput onChange={HandleChange} name="password"></StyledInput></div>
                <div>Confirm Password:<StyledInput onChange={HandleChange} name="cpassword"></StyledInput></div>
                <SubmitButton onClick={Handleclick}>Create New Password</SubmitButton>
                <div>Do not have a account click <Link to="/Register">Here</Link></div>
                <div style={{color:"red",textAlign:"center",padding:"4px"}}>{err}</div>
             </RegisterCard>
             </ScreenWrapper>
        </AuthLayout>
    )
}

export default CreateNewPassword
