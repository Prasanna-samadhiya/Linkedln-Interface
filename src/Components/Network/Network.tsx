import { Box,Typography} from "@mui/material";
import { PageContainer,MainContent,SuggestionList,InvitationCard,PeopleContainer} from "./NetworkStyle";
import ShowUser from "./ShowUser/ShowUser";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import type { RootState } from "../../Redux/Store/Store";
import { useSelector } from "react-redux";
import Request from "./Request";
import Animation from "./Animation";
import NetworkSiderbar from "./NetworkSiderbar";

const NetworkPage = () => {

  const User = useSelector((state: RootState) => state.auth.User);
  const [user, setUser] = useState([]);
  const [requests, setRequests] = useState([]);
  const url = import.meta.env.VITE_BASE_URL;
  

  useEffect(() => {
    async function GetAllUsers() {
      const res = await axios.get(`${url}/connection/getnetworkuser/${User?._id}`);
      console.log(res.data);
      setUser(res.data.temp);
    }

    async function GetAllRequests() {
      const res = await axios.get(`${url}/connection/getrequests/${User?._id}`);
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
        <NetworkSiderbar/>

        <MainContent>
          <Box mb={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Invitations ({requests.length})
            </Typography>

            {requests.length==0?
            <InvitationCard>No pending Invitations</InvitationCard>
            :
            requests.map((ele: any) => {
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

          <PeopleContainer>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              People you may know
            </Typography>

            <SuggestionList>
              {user.length==0?
              <Animation/>
              :
              user?.map((id: any) => (
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
          </PeopleContainer>
        </MainContent>
      </PageContainer>
    </>
  );
};

export default NetworkPage;
