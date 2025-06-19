import { useEffect, useRef, useState } from "react";
import {
  ChatContainer,
  Sidebar,
  SearchBar,
  SearchInput,
  FilterTabs,
  ChatList,
  ChatItem,
  ChatDetails,
  ChatName,
  ChatPreview,
  AdSection,
  AdBox,
  RetryButton,
  MainChatArea,
  MessageSection,
  SearchArea,
} from "./ChatStyle";

import { Avatar, Badge, Chip, Typography } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";
import type { RootState } from "../../Redux/Store/Store";
import axios from "axios";
import FramedAvatar from "../DashBoard/FrameImage";
import MainChat from "./MainChatArea";
import SearchIcon from '@mui/icons-material/Search';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface User {
  _id: string;
  name: string;
  image: string;
  unseenCount?: number;
}

const Chat = () => {
  const User = useSelector((state: RootState) => state.auth.User);
  const [user, setUser] = useState<User[]>([]);
  const [ClickedUser, setClickedUser] = useState({ name: "", description: "", image: "", id: "",status:"" });
  const [search, setSearch] = useState("");
  const [searcheduser, setSearchedUser] = useState<User[]>([]);
  const [unseenCounts, setUnseenCounts] = useState<{ [userId: string]: number }>({});
  const wsRef = useRef<WebSocket | null>(null);
  const clickedUserRef = useRef(ClickedUser);
  const url = import.meta.env.VITE_BASE_URL;
  const socketurl = import.meta.env.VITE_SOCKET_URL;

  function handleIncomingMessage(message: { from_id: string }) {
    const currentClickedUser = clickedUserRef.current;
    console.log("from:", message);
    console.log("Current ID:", currentClickedUser);
    if (currentClickedUser.id !== message.from_id) {
      console.log("hi")
      setUnseenCounts((prev) => ({
        ...prev,
        [message.from_id]: (prev[message.from_id] || 0) + 1,
      }));
    }
  }


  async function GetAllUsers() {
    try {
      const res = await axios.get(`${url}/connection/showconnections/${User?._id}`);
      setUser(res.data.connections);
    } catch (err) {
      console.error("Failed to fetch users", err);
    }
  }

  function HandleClick(name: string, description: string, image: string, id: string,status:string) {
    setClickedUser({ name, description, image, id,status });

    setUnseenCounts((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });

    setUser((prevUsers) =>
      prevUsers.map((user) =>
        user._id === id ? { ...user, unseenCount: 0 } : user
      )
    );
  }

  function HandleChange(e: any) {

    console.log(e.target.value);
    setSearch(e.target.value);

    console.log(e.target.value);
    if (e.target.value === "") {
      setSearchedUser([]);
      return;
    }

    let temp = [...user];

    temp = temp.filter((ele: any) => {
      console.log(ele.name.toLowerCase().includes(e.target.value), "ele")
      if (ele.name.toLowerCase().includes(e.target.value)) {
        return true
      } else {
        return false
      }
    }
    );
    console.log(temp, "temp")
    setSearchedUser([...temp]);

  }

  useEffect(() => {
    GetAllUsers();

    const websocket = new WebSocket(socketurl);

    websocket.onopen = () => {
      console.log("WebSocket connected");
      websocket.send(JSON.stringify({
        type: "connection",
        _id: User?._id,
        name: User?.name,
      }));
      wsRef.current = websocket;
    };

    websocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data)
      if (data.type === "sendmessage" && data.content && data.from !== User?._id) {
        handleIncomingMessage({ from_id: data.from });
      }

    };

    websocket.onerror = (err) => {
      console.error("❌ WebSocket error:", err);
    };

    return () => {
      websocket.close()
      wsRef.current = null;
    };
  }, [User?._id]);

  useEffect(() => {
    clickedUserRef.current = ClickedUser;
  }, [ClickedUser]);

  return (
    <>
      <Navbar />
      <ChatContainer>
        <MessageSection>
          <div style={{ width: "939 px" }}>
            <SearchBar>
              <Typography variant="h6" sx={{ mx: "10px" }}>Messaging</Typography>
              <SearchArea>
                <SearchIcon sx={{ color: 'gray' }} />
                <SearchInput placeholder="Search connections..." onChange={HandleChange} />
              </SearchArea>
            </SearchBar>
            <FilterTabs>
              <Chip label="Focused" sx={{ backgroundColor: "white", border: "2px solid black" }} />
              <Chip label="Jobs" sx={{ backgroundColor: "white", border: "2px solid black" }} />
              <Chip label="Unread" sx={{ backgroundColor: "white", border: "2px solid black" }} />
              <Chip label="Connections" sx={{ backgroundColor: "white", border: "2px solid black" }} />
              <Chip label="InMail" sx={{ backgroundColor: "white", border: "2px solid black" }} />
              <Chip label="Starred" sx={{ backgroundColor: "white", border: "2px solid black" }} />
            </FilterTabs>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Sidebar>
              <ChatList>
                {search === "" ?
                  user?.map((ele: any) => (
                    <ChatItem key={ele._id}>
                      <FramedAvatar image={ele.image} frame={ele?.status} size={48} />
                      <ChatDetails onClick={() => HandleClick(ele.name, ele.description, ele.image, ele._id,ele.status)}>
                        <ChatName>
                          {ele.name}
                        </ChatName>
                        <ChatPreview>Hello Prasanna! Hope...</ChatPreview>
                      </ChatDetails>
                      <Badge badgeContent={ele.unseenCount + unseenCounts[ele._id] || ele.unseenCount} color="primary" />
                    </ChatItem>
                  )) :
                  searcheduser?.map((ele: any) => (
                    <ChatItem key={ele._id}>
                      <FramedAvatar image={ele.image} frame={ele.image} size={48} />
                      <ChatDetails onClick={() => HandleClick(ele.name, ele.description, ele.image, ele._id,ele.status)}>
                        <ChatName>{ele.name}</ChatName>
                        <ChatPreview>Hello Prasanna! Hope...</ChatPreview>
                      </ChatDetails>
                    </ChatItem>
                  ))
                }
              </ChatList>
            </Sidebar>

            {ClickedUser.id == "" ?
              <MainChatArea>
                <DotLottieReact
                  src="https://lottie.host/791821db-2a63-4bf8-8a88-cbc5a0664648/ylzycEwfPK.lottie"
                  loop
                  autoplay
                />
              </MainChatArea>
              :
              <MainChat
                name={ClickedUser.name}
                description={ClickedUser.description}
                image={ClickedUser.image}
                id={ClickedUser.id}
                status={ClickedUser.status}
                onIncomingMessage={handleIncomingMessage}
                socket={wsRef.current}
              />
            }
          </div>
        </MessageSection>

        <AdSection>
          <AdBox>
            <Avatar src="https://randomuser.me/api/portraits/men/75.jpg" sx={{ width: 56, height: 56, margin: "0 auto 12px" }} />
            <Typography variant="body2" color="textSecondary" mb={1}>
              See who’s viewed your profile in the last <b>365</b> days
            </Typography>
            <RetryButton variant="outlined">Retry for free!</RetryButton>
          </AdBox>
        </AdSection>
      </ChatContainer>
    </>
  );
};

export default Chat;