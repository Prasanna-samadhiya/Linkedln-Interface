import { Link, useLocation, useNavigate } from "react-router-dom"
import AuthLayout from "../../Layout/AuthLayout"
import { RegisterCard, ScreenWrapper, StyledInput, SubmitButton } from "./Appstyle"
import { useEffect, useState } from "react"
import axios from "axios"

function CreateNewPassword() {

    interface PasswordDatatype {
        password: string;
        cpassword: string;
        token: string;
        fotp: string;
    }

    const [PasswordData, SetPasswordData] = useState<PasswordDatatype>({ password: "", cpassword: "", token: "", fotp: "" })
    const [Err, SetErr] = useState<string>("")

    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const token = queryParams.get("token");

    const navigate = useNavigate()

    useEffect(() => {

        if (!token) {
            navigate("/register");
        }

        if (PasswordData.password == "" || PasswordData.cpassword == "") {
            SetErr("fields are empty")
        } else if (PasswordData.password.length < 6) {
            SetErr("password must be of at least 6")
        } else if (PasswordData.cpassword.length < 6) {
            SetErr("confirm password must be of at least 6")
        } else {
            SetErr("")
        }
    }, [PasswordData])

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetPasswordData({ ...PasswordData, [e.target.name]: e.target.value })
        console.log(PasswordData)
    }

    const Handleclick = () => {
        if (Err == "") {
            console.log(queryParams.get('token'))
            axios.post("http://localhost:3000/auth/newp", { ...PasswordData, token: token }, { withCredentials: true }).then((result) => {
                console.log(result);
                navigate("/login")
            }).catch((err) => {
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
                    <div style={{ color: "red", textAlign: "center", padding: "4px" }}>{Err}</div>
                </RegisterCard>
            </ScreenWrapper>
        </AuthLayout>
    )
}

export default CreateNewPassword
