import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from '../../Redux/Store/Store'

function ProtectedRoute() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.LoggedIn)
  const loading = useSelector((state: RootState) => state.auth.Loading)
  const User = useSelector((state: RootState) => state.auth.User)
  

  console.log("Protected route", isLoggedIn, "Loading:", loading)


  return loading ?<div>hi</div>:User?.email? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute