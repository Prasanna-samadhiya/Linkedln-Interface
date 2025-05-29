import { Link } from "react-router-dom"
import { RegisterCard,ScreenWrapper,StyledInput, SubmitButton } from "../Appstyle"
import AuthLayout from "../../Layout/AuthLayout"
import { useEffect, useState } from "react";

interface Props {}

function Login(props: Props) {
    const {} = props

    
    interface Logindata {
            email:string;
            password:string;
    }

        const [Lata,SetLata] = useState<Logindata>({email:"",password:""})
        const [err,seterr] = useState<string>("")

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

    return (
        <AuthLayout>
              <ScreenWrapper>
             <RegisterCard>
                <h1>Login</h1>
                <div>Email:<StyledInput onChange={HandleChange} name="email"></StyledInput></div>
                <div>Password:<StyledInput onChange={HandleChange} name="password"></StyledInput></div>
                <SubmitButton>Login</SubmitButton>
                Do not have a account click <Link to="/Register">Here</Link>
                <div style={{color:"red",textAlign:"center",padding:"4px"}}>{err}</div>
             </RegisterCard>
             </ScreenWrapper>
        </AuthLayout>
    )
}

export default Login
