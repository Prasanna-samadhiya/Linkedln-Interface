import React, { useEffect, useState } from "react";
import {
  ModalContainer,
  ModalHeader,
  ModalInput,
  UserList,
  SendButtonWrapper,
  SendButton,
} from "./SentModalStyle";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ShowSentUser from "./ShowSentUser";

interface User {
  _id: string;
  name: string;
  description: string;
  image: string;
  status: string;
  statusColor?: string;
}

interface SentModalProps {
  open: boolean;
  name: string;
  onClose: () => void;
  users: User[];
}

const SentModal: React.FC<SentModalProps> = ({ open, name, onClose, users }) => {
  const [searcheduser, setSearchedUser] = useState<User[]>();
  const [selectedUserIds, setSelectedUserIds] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  function HandleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    if (value === "") {
      setSearchedUser([]);
      return;
    }

    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(value)
    );
    setSearchedUser(filtered);
  }

  const toggleUserSelection = (userId: string) => {
    setSelectedUserIds((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  useEffect(() => {
    console.log(selectedUserIds)
  }, [selectedUserIds])


  const userList = search === "" ? users : searcheduser ?? [];

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ outline: "none" }}>
        <ModalContainer>
          <ModalHeader>
            <span>Send {name}’s Post</span>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </ModalHeader>

          <ModalInput placeholder="Type a name" onChange={HandleChange} />

          <UserList>
            {userList.map((user, index) => (
              <ShowSentUser
                key={user._id}
                index={index}
                image={user.image}
                status={user.status}
                name={user.name}
                description={user.description}
                selected={selectedUserIds.includes(user._id)}
                onClick={() => toggleUserSelection(user._id)}
              />
            ))}
          </UserList>

          <SendButtonWrapper>
            <SendButton>Send</SendButton>
          </SendButtonWrapper>
        </ModalContainer>
      </Box>
    </Modal>
  );
};

export default SentModal;
