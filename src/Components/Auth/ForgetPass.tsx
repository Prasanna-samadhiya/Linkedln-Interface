import { useEffect, useState } from 'react'
import AuthLayout from '../../Layout/AuthLayout'
import { RegisterCard, ScreenWrapper, StyledInput, SubmitButton } from '../Appstyle'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

interface Props {}

function Forget(props: Props) {
    const {} = props

    const [email,setemail] = useState<string>("")
    const [err,seterr] = useState<string>("")

    const navigate = useNavigate()

    useEffect(()=>{
         if(email==""){
            seterr("Fields are empty")
         }else if(!email.includes("@gmail.com")){
            seterr("Enter valid email")
         }else{
            seterr("")
         }
    },[email])

    const HandleChange =(e:any)=>{
            setemail(e.target.value)
            console.log(email)
        }

     const Handleclick = ()=>{
            if(err==""){
            axios.post("http://localhost:3000/auth/forget",{email:email},{withCredentials:true}).then((result)=>{
                const params = new URLSearchParams({token:result.data.user.token});
                console.log(result.data.user.token);
                navigate(`/cpass?${params.toString()}`);
                
            }).catch((err)=>{
                console.log(err)
            })
            }
        }

    return (
        <AuthLayout>
              <ScreenWrapper>
             <RegisterCard>
                <h1>Forgot Password</h1>
                <div>Email:<StyledInput onChange={HandleChange} name="email"></StyledInput></div>
                <SubmitButton onClick={Handleclick}>Login</SubmitButton>
                <div>Do not have a account click <Link to="/Register">Here</Link></div>
                <div style={{color:"red",textAlign:"center",padding:"4px"}}>{err}</div>
             </RegisterCard>
             </ScreenWrapper>
        </AuthLayout>
    )
}

export default Forget
