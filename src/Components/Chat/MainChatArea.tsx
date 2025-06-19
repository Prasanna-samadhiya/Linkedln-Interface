import { Divider, Typography } from "@mui/material";
import {
  ChatHeader,
  ChatInput,
  ChatInputWrapper,
  ChatMessages,
  MainChatArea,
  MessageBubble,
  SendIconWrapper,
  UserInfo,
} from "./ChatStyle";
import FramedAvatar from "../DashBoard/FrameImage";
import type { RootState } from "../../Redux/Store/Store";
import { useSelector } from "react-redux";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useRef, useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import axios from "axios";
import dayjs from "dayjs";

interface Props {
  name: string;
  description: string;
  image: string;
  id: string;
  onIncomingMessage: any;
  status:string
  socket: WebSocket | null;
}

interface Message {
  content: string;
  fromSelf: boolean;
  time: string;
  date: string;
  seen?: boolean;
  messageid?: string;
  reciver?: string;
}

function MainChat(props: Props) {
  const { name, description, image, id, socket,status } = props;

  const User = useSelector((state: RootState) => state.auth.User);
  const Link = useSelector((state: RootState) => state.auth.Link);
  const url = import.meta.env.VITE_BASE_URL;
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  // const wsRef = useRef<WebSocket | null>(null);
  const chatMessagesRef = useRef<HTMLDivElement>(null);

  function HandleMessage() {
    const ws = socket;

    if (!id || !User?._id || !message.trim()) {
      console.warn("Missing id/User/message when trying to send message.",id,User?._id,messages);
      return;
    }

    if (ws && ws.readyState === WebSocket.OPEN) {
      const now = new Date();
      const msgObj = {
        type: "sendmessage",
        from_id: User?._id,
        to_id: id,
        content: message,
      };

      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      const formattedDate = now.toISOString();

      ws.send(JSON.stringify(msgObj));

      setMessages((prev) => [
        ...prev,
        {
          content: message,
          fromSelf: true,
          time: formattedTime,
          date: formattedDate,
        },
      ]);

      setMessage("");
    }
  }

  function HandleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMessage(e.target.value);
  }

  async function GetMessages() {
    try {
      const res = await axios.get(
        `${url}/chat/messages/${User?._id}/${id}`
      );
      const fetchedMessages = res.data.messages;

      const formattedMessages = fetchedMessages.map((msg: any) => {
        return {
          content: msg.content,
          fromSelf: msg.senderid === User?._id,
          time: msg.formattedTime,
          date: msg.createdAt,
          seen: msg.seen,
          messageid: msg.id,
          reciver: msg.recieverid
        };
      });
      console.log("Formatted Message:", formattedMessages)
      setMessages(formattedMessages);

      const unseenMessages = formattedMessages.filter((msg: any) => !msg.fromSelf && !msg.seen).map((msg: any) => ({
        messageid: msg.messageid,
        reciver: msg.reciver,
      }));

      console.log(unseenMessages.length, socket, socket?.readyState, WebSocket.OPEN)

      if (unseenMessages.length > 0 && socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({
          type: "seen",
          userid: User?._id,
          messages: unseenMessages
        }));
      }
    } catch (error) {
      console.log("Error fetching messages:", error);
    }
  }

  useEffect(() => {
    GetMessages();
  }, [User?._id, User?.name, id]);

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop =
        chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (!socket) return;

    const handleMessage = (event: MessageEvent) => {
      console.log(JSON.parse(event.data))
      const data = JSON.parse(event.data);
      if (data.type === "sendmessage" && data.from === id) {
        const now = new Date();
        const formattedTime = now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });

        const formattedDate = now.toISOString();

        setMessages((prev) => [
          ...prev,
          {
            content: data.content,
            fromSelf: false,
            time: formattedTime,
            date: formattedDate,
          },
        ]);
      }
    };

    socket.addEventListener("message", handleMessage);

    // Clean up on unmount or chat change
    return () => {
      socket.removeEventListener("message", handleMessage);
    };
  }, [socket, id]);

  const renderMessages = () => {
    let lastDate = "";

    return messages.map((msg, index) => {
      const currentDate = dayjs(msg.date).format("MMM DD, YYYY");
      const showDateDivider = currentDate !== lastDate;
      lastDate = currentDate;

      return (
        <div key={index}>
          {showDateDivider && (
            <Divider sx={{ my: 2 }}>
              <Typography variant="caption" color="text.secondary">
                {currentDate}
              </Typography>
            </Divider>
          )}
          <MessageBubble alignRight={msg.fromSelf}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <FramedAvatar
                image={msg.fromSelf ? Link || "" : image}
                frame={msg.fromSelf ? User?.status || "" : status}
                size={45}
              />
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "18px",
                  }}
                >
                  <strong style={{ paddingLeft: "10px" }}>
                    {msg.fromSelf ? User?.name : name}
                  </strong>
                  <CircleIcon sx={{ width: 6, height: 6, mx: 1 }} />
                  <div>{msg.time}</div>
                </div>
                <div
                  style={{ margin: "10px", fontSize: "17px", padding: "0" }}
                >
                  {msg.content}
                </div>
              </div>
            </div>
          </MessageBubble>
        </div>
      );
    });
  };

  return (
    <MainChatArea>
      <ChatHeader>
        <FramedAvatar image={image} frame={status} size={48} />
        <UserInfo>
          <Typography variant="h6" fontWeight={600}>
            {name}
          </Typography>
          <Typography>{description}</Typography>
        </UserInfo>
      </ChatHeader>

      <ChatMessages ref={chatMessagesRef}>{renderMessages()}</ChatMessages>

      <ChatInputWrapper>
        <ChatInput
          placeholder="Write a message..."
          value={message}
          onChange={HandleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") HandleMessage();
          }}
        />
        <SendIconWrapper>
          <SendIcon sx={{ mx: 2 }} onClick={HandleMessage} />
        </SendIconWrapper>
      </ChatInputWrapper>
    </MainChatArea>
  );
}

export default MainChat;
