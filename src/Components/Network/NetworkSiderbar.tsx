import { Typography } from "@mui/material"
import { Sidebar, SidebarItem } from "./NetworkStyle"
import { useNavigate } from "react-router-dom"
import type { RootState } from "../../Redux/Store/Store";
import { useSelector } from "react-redux";

interface Props {}

function NetworkSiderbar(props: Props) {
    const {} = props
    const navigate  = useNavigate();
    const User = useSelector((state: RootState) => state.auth.User);

    return (
        <Sidebar>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Manage my network
          </Typography>
          <SidebarItem onClick={()=>(navigate("/connection"))}>👥 Connections <b>{User?.connections.length}</b></SidebarItem>
          <SidebarItem>📒 Contacts <b>193</b></SidebarItem>
          <SidebarItem>👤 Following & followers</SidebarItem>
          <SidebarItem>👥 Groups</SidebarItem>
          <SidebarItem>📅 Events <b>2</b></SidebarItem>
          <SidebarItem>📄 Pages <b>59</b></SidebarItem>
          <SidebarItem>📰 Newsletters <b>3</b></SidebarItem>
        </Sidebar>
    )
}

export default NetworkSiderbar
