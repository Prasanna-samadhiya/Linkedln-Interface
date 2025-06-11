import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import {
  Container,
  ConnectionCard,
  AvatarImage,
  UserInfo,
  Name,
  Description,
  Meta,
  MessageButton,
  ConnectionsContainer,
  SortBar,
  SearchInput,
  RightPanel,
  AdCard,
  RetryButton,
} from "./ConnectionStyle";
import axios from "axios";
import type { RootState } from "../../Redux/Store/Store";
import { useSelector } from "react-redux";

// const connections = [
//   {
//     name: "Amit Baghel",
//     description: "Java Developer @ Sanvii Techmet | Spring Boot | Hibernate",
//     connectedDate: "June 11, 2025",
//     image: "/images/amit.jpg",
//   },
//   {
//     name: "Preet Vani",
//     description:
//       "AI and Data Science Student || Python and Tableau || Passionate about Machine Learning || Seeking Internship",
//     connectedDate: "May 28, 2025",
//     image: "/images/preet.jpg",
//   },
//   {
//     name: "Shreyansh Kashyap",
//     description: "Chameli Devi Group Of Institutions",
//     connectedDate: "May 28, 2025",
//     image: "/images/shreyansh.jpg",
//   },
//   {
//     name: "Navjeet Chouhan",
//     description: "C++ || MySQL || Python || Web Development || DSA",
//     connectedDate: "May 28, 2025",
//     image: "/images/navjeet.jpg",
//   },
//   {
//     name: "Ghanshyam Ringe",
//     description: "Python | My SQL | HTML | CSS | Javascript",
//     connectedDate: "May 28, 2025",
//     image: "/images/ghanshyam.jpg",
//   },
//   {
//     name: "Rishika Gupta",
//     description:
//       "LNCT Group of Colleges 🎓 | Full Stack Web Developer 🖥 | DSA Enthusiast 🚀",
//     connectedDate: "February 5, 2025",
//     image: "/images/rishika.jpg",
//   },
// ];

const Connection = () => {

  const User = useSelector((state: RootState) => state.auth.User);
  const [user, setUser] = useState([]);

  async function GetAllUsers() {
      const res = await axios.get(`http://localhost:3000/connection/getnetworkuser/${User?._id}`);
      console.log(res.data);
      setUser(res.data.temp)
    }

  useEffect(()=>{
     
    
    GetAllUsers();
  },[])

  return (
    <>
    <Navbar/>
    <Container>
      <ConnectionsContainer>
        <h2>896 connections</h2>
        <SortBar>
          <span>Sort by: Recently added ▾</span>
          <SearchInput type="text" placeholder="Search by name" />
          <a href="#">Search with filters</a>
        </SortBar>

        {user.map((user:any, index) => (
          <ConnectionCard key={index}>
            <AvatarImage src={user.image} alt={user.name} />
            <UserInfo>
              <Name>{user.name}</Name>
              <Description>{user.description}</Description>
              <Meta>connected on {user.connectedDate}</Meta>
            </UserInfo>
            <MessageButton>Message</MessageButton>
          </ConnectionCard>
        ))}
      </ConnectionsContainer>

      <RightPanel>
        <AdCard>
          <img
            src="/images/profile.jpg"
            alt="Profile"
            style={{ borderRadius: "50%", width: 60, height: 60 }}
          />
          <p>
            See who’s viewed your profile in the last <b>365</b> days
          </p>
          <RetryButton>Retry for free!</RetryButton>
        </AdCard>
      </RightPanel>
    </Container>
    </>
  );
};

export default Connection;
