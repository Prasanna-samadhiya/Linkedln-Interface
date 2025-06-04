import { useEffect, useState } from 'react'
import AuthLayout from '../../Layout/AuthLayout'
import { RegisterCard, ScreenWrapper, StyledInput, SubmitButton } from './Appstyle'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Forget() {
    
    const [Email, SetEmail] = useState<string>("")
    const [Err, SetErr] = useState<string>("")

    const navigate = useNavigate()

    useEffect(() => {
        if (Email == "") {
            SetErr("Fields are empty")
        } else if (!Email.includes("@gmail.com")) {
            SetErr("Enter valid email")
        } else {
            SetErr("")
        }
    }, [Email])

    const HandleChange = (e: any) => {
        SetEmail(e.target.value)
        console.log(Email)
    }

    const Handleclick = () => {
        if (Err == "") {
            axios.post("http://localhost:3000/auth/forget", { email: Email }, { withCredentials: true }).then((result) => {
                const params = new URLSearchParams({ token: result.data.user.token });
                console.log(result.data.user.token);
                navigate(`/cpass?${params.toString()}`);

            }).catch((err) => {
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
                    <SubmitButton onClick={Handleclick}>Send OTP</SubmitButton>
                    <div>Do not have a account click <Link to="/Register">Here</Link></div>
                    <div style={{ color: "red", textAlign: "center", padding: "4px" }}>{Err}</div>
                </RegisterCard>
            </ScreenWrapper>
        </AuthLayout>
    )
}

export default Forget
