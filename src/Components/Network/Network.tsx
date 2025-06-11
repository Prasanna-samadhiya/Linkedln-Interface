import {
  Box,
  Typography,
} from "@mui/material";
import {
  PageContainer,
  Sidebar,
  MainContent,
  SidebarItem,
  SuggestionList,
} from "./NetworkStyle";
import ShowUser from "./ShowUser/ShowUser";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import type { RootState } from "../../Redux/Store/Store";
import { useSelector } from "react-redux";
import Request from "./Request";

const NetworkPage = () => {

  const User = useSelector((state: RootState) => state.auth.User);
  const [user, setUser] = useState([]);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    async function GetAllUsers() {
      const res = await axios.get(`http://localhost:3000/connection/getnetworkuser/${User?._id}`);
      console.log(res.data);
      setUser(res.data.temp)
    }

    async function GetAllRequests() {
      const res = await axios.get(`http://localhost:3000/connection/getrequests/${User?._id}`);
      console.log(res.data);
      setRequests(res.data.newUsers);
    }

    GetAllUsers();
    GetAllRequests();
  }, [])

  return (
    <>
      <Navbar />
      <PageContainer>
        <Sidebar>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Manage my network
          </Typography>
          <SidebarItem>👥 Connections <b>895</b></SidebarItem>
          <SidebarItem>📒 Contacts <b>193</b></SidebarItem>
          <SidebarItem>👤 Following & followers</SidebarItem>
          <SidebarItem>👥 Groups</SidebarItem>
          <SidebarItem>📅 Events <b>2</b></SidebarItem>
          <SidebarItem>📄 Pages <b>59</b></SidebarItem>
          <SidebarItem>📰 Newsletters <b>3</b></SidebarItem>
        </Sidebar>

        <MainContent>
          <Box mb={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Invitations (2)
            </Typography>

            {requests.map((ele: any) => {
              return <Request
                name={ele.name}
                des={ele.description}
                image={ele.image}
                id={ele._id}
                removeRequest={(id: string) => {
                  setRequests((prev) => prev.filter((r: any) => r._id !== id));
                }} />
            })}
          </Box>

          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              People you may know
            </Typography>

            <SuggestionList>
              {user?.map((id: any) => (
                <ShowUser
                  id={id._id}
                  name={id.name}
                  degree="Btech CSE"
                  description={id.description}
                  mutualConnections="Sakshi and 47 other mutual connections"
                  avatarUrl={id.image}
                  button={id.button}
                />
              ))}
            </SuggestionList>
          </Box>
        </MainContent>
      </PageContainer>
    </>
  );
};

export default NetworkPage;
