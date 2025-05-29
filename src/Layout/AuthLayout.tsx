import type React from "react";
import type { ReactNode } from "react"



interface AuthLay{
    children:ReactNode;
}

const AuthLayout:React.FC<AuthLay> = ({children})=> {
  //to apply  any styles that apply to the page
  return (
      <div>
        {children}
      </div>  
    )
}

export default AuthLayout
