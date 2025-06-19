import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import {
  Container,
  ConnectionCard,
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
import FramedAvatar from "../DashBoard/FrameImage";

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
  const Link = useSelector((state: RootState) => state.auth.Link);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState([]);
  const [searcheduser, setSearchedUser] = useState([]);
  const url = import.meta.env.VITE_BASE_URL;

  async function GetAllUsers() {
    const res = await axios.get(`${url}/connection/showconnections/${User?._id}`);
    console.log(res.data);
    setUser(res.data.connections);
  }

  function HandleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.toLowerCase();
    setSearch(value);
  
    console.log(e.target.value);
    if (e.target.value === "") {
      setSearchedUser([]);
      return;
    }
       
    let temp = [...user];
   
    temp = temp.filter((ele: any) =>{
      console.log(ele.name.toLowerCase().includes(value),"ele")
      if(ele.name.toLowerCase().includes(value)){
        return true
      }else{
        return false
      }}
    );
     console.log(temp,"temp")
    setSearchedUser([...temp]);
   
  }

   console.log(searcheduser,"searched");
  useEffect(() => {


    GetAllUsers();
  }, [])

  return (
    <>
      <Navbar />
      <Container>
        <ConnectionsContainer>
          <h2>{User?.connections.length} Connections</h2>
          <SortBar>
            <span>Sort by: Recently added ▾</span>
            <SearchInput type="text" placeholder="Search by name" onChange={HandleChange} />
            <a href="#">Search with filters</a>
          </SortBar>

          {  search === ""?
            user.map((user: any, index) => (
              <ConnectionCard key={index}>
                <FramedAvatar image={user.image} frame={User?.status} size={60} />
                <UserInfo>
                  <Name>{user.name}</Name>
                  <Description>{user.description}</Description>
                  <Meta>connected</Meta>
                </UserInfo>
                <MessageButton>Message</MessageButton>
              </ConnectionCard>
            )) :
            searcheduser.map((user: any, index) => (
              <ConnectionCard key={index}>
                <FramedAvatar image={user.image} frame={User?.status} size={60} />
                <UserInfo>
                  <Name>{user.name}</Name>
                  <Description>{user.description}</Description>
                  <Meta>connected</Meta>
                </UserInfo>
                <MessageButton>Message</MessageButton>
              </ConnectionCard>
            ))
          }
        </ConnectionsContainer>

        <RightPanel>
          <AdCard>
            <FramedAvatar image={Link} frame={User?.status} size={60} />
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
