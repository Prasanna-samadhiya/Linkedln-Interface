import Register from '../Components/Auth/Register';
import AuthLayout from '../Layout/AuthLayout'
import { ScreenWrapper } from '../Components/Appstyle';

interface Props {}

function Auth(props: Props) {
    const {} = props

    return (
        <AuthLayout>
            <ScreenWrapper>
                <h1>Linkedln</h1>
            <Register/>
            </ScreenWrapper>
        </AuthLayout>
    )
}

export default Auth;
