import {
  Container,
  CoverPhoto,
  EditCoverButton,
  AvatarWrapper,
  EditAvatarIcon,
  ProfileInfoSection,
  ButtonsRow,
  SectionCard,
  SectionTitle,
  SectionContent,
  FrameSVG,
  FramedAvatarWrapper,
} from './Profilestyle';
import { Avatar, Button, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../Redux/Store/Store';
import Experience from './Experience';
import Education from './Education';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { updateUserField } from '../../Redux/Slices/AuthSlice';
import EditAboutModal from './EditAboutModal';
import EditNameModal from './EditNameModal';
import EditExperienceModal from './EditExperineceModal';
import EditEducationModal from './EditEducationModal';
import Certification from './Certification';
import Skill from './Skill';
import EditCertificationModal from './EditCertificationModal';
import EditSkillModal from './EditSkillModal';
import Navbar from '../Navbar/Navbar';
import EditCoverModal from './ImageModal';

const Profile = () => {

  const User = useSelector((state: RootState) => state.auth.User);
  const loading = useSelector((state: RootState) => state.auth.Loading);
  console.log("User:", User, loading);
  if (User) <div>no user</div>
  const Link = useSelector((state: RootState) => state.auth.Link);
  const [ExperienceArr, SetExperienceArr] = useState(User?.experience || []);
  const [EducationArr, SetEducationArr] = useState(User?.education || []);
  const [certificationsArr, setCertificationsArr] = useState(User?.certification || []);
  const [skillsArr, setSkillsArr] = useState(User?.skills || []);
  const [name, setname] = useState("");
  const [about, setabout] = useState("");
  const [openCertificationModal, setOpenCertificationModal] = useState(false);
  const [openCoverModal, setOpenCoverModal] = useState(false);
  const [openSkillModal, setOpenSkillModal] = useState(false);
  const [openExperienceModal, setOpenExperienceModal] = useState(false);
  const [openNameModal, setOpenNameModal] = useState(false);
  const [openAboutModal, setOpenAboutModal] = useState(false);
  const [openEducationModal, setOpenEducationModal] = useState(false);
  const dispatch = useDispatch();

  console.log("User:", User);
  console.log("Link:", Link);

  useEffect(() => {
    SetExperienceArr(ExperienceArr);
    SetEducationArr(EducationArr);
    setCertificationsArr(certificationsArr);
    console.log(name, about)
    console.log('Updated experienceArr:', ExperienceArr);
    console.log(EducationArr);

    const GetUserDetails = async () => {
      await axios.get(`http://localhost:3000/user/getuser/${User?._id}`).then((response) => {
        console.log(response.data)
        setSkillsArr(response.data.user.skills);
        setCertificationsArr(response.data.user.certification);
        SetEducationArr(response.data.user.education);
        SetExperienceArr(response.data.user.experience);


      }).catch((err) => {
        console.log(err.message);
      });
    }

    GetUserDetails();
  }, [User, Link, User?._id]);

  // const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (!file) return;

  //   const formData = new FormData();
  //   formData.append("file", file);  

  //   try {
  //     const userId = User?._id; 

  //     await axios.put(
  //       `http://localhost:3000/user/updateimage/${userId}`,
  //       formData
  //     ).then((response) => {
  //       console.log("success:", response.data);
  //       SetUploaded(true);
  //       dispatch(updateProfileImage(response.data.presignedurl));
  //     }).catch((err) => {
  //       console.log(err.message);
  //     });

  //     // console.log("Upload successful:", response.data);

  //     // Optionally update state/UI with new image URL
  //     // setImageUrl(response.data.imageUrl);

  //   } catch (error: any) {
  //     console.error("Error uploading image:", error.response?.data || error.message);
  //   }
  // };

  return (
    <>
      <Navbar />
      <Container>
        <CoverPhoto src={Link} alt="Profile" sx={{ width: 1490, height: 400 }}>
          <EditCoverButton startIcon={<EditIcon />}>Edit Cover</EditCoverButton>
        </CoverPhoto>
        <EditCoverModal open={openCoverModal} onClose={() => setOpenCoverModal(false)} />
        <AvatarWrapper>
          <FramedAvatarWrapper>
            <Avatar
              src={Link}
              alt="Profile"
              sx={{ width: 100, height: 100 }}
            />
            {(User?.frame === 'open' || User?.frame === 'hiring') && (
              <FrameSVG width="100" height="100" viewBox="0 0 100 100">
                <defs>
                  <path
                    id="textCircle"
                    d="M 50,50 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
                  />
                </defs>

                {/* Stroke Layer */}
                <text
                  stroke={User.frame === 'open' ? 'green' : 'blue'}
                  strokeWidth="2"
                  fill="none"
                  fontSize="8"
                  fontWeight="bold"
                >
                  <textPath href="#textCircle" startOffset="50%" textAnchor="middle">
                    {User.frame === 'open' ? '#OPENTOWORK' : 'HIRING'}
                  </textPath>
                </text>

                {/* Fill Layer */}
                <text fill="white" fontSize="8" fontWeight="bold">
                  <textPath href="#textCircle" startOffset="50%" textAnchor="middle">
                    {User.frame === 'open' ? '#OPENTOWORK' : 'HIRING'}
                  </textPath>
                </text>
              </FrameSVG>
            )}
          </FramedAvatarWrapper>

          <EditAvatarIcon onClick={() => setOpenCoverModal(true)}>
            <EditIcon fontSize="small" />
          </EditAvatarIcon>
        </AvatarWrapper>


        <ProfileInfoSection>
          <Typography variant="h5" fontWeight={600}>
            <SectionTitle>
              <div>
                {User?.name}
              </div>
              <EditIcon sx={{ cursor: 'pointer' }} onClick={() => setOpenNameModal(true)} />
              <EditNameModal
                open={openNameModal}
                onClose={() => setOpenNameModal(false)}
                initialValue={User?.name || ''}
                onSave={(val) => {
                  console.log("Updated Name:", val);
                  setname(val);
                  console.log(name)
                  dispatch(updateUserField({ field: 'name', value: val }));
                  setOpenNameModal(false);
                }}
              />
            </SectionTitle>
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">Frontend Developer at XYZ Corp</Typography>

          <ButtonsRow>
            <Button variant="contained" color="primary">Connect</Button>
            <Button variant="outlined" color="primary">Message</Button>
          </ButtonsRow>
        </ProfileInfoSection>

        {/* About Section */}
        <SectionCard>
          <SectionTitle><div>About</div>
            <EditIcon style={{ cursor: "pointer" }} onClick={() => setOpenAboutModal(true)} />
            <EditAboutModal
              open={openAboutModal}
              onClose={() => setOpenAboutModal(false)}
              initialValue={User?.name || ''}
              onSave={(val) => {
                console.log("Save Name", val);
                dispatch(updateUserField({ field: 'description', value: val }));
                setabout(val)
              }}
            />
          </SectionTitle>
          <SectionContent>
            {User?.description}
          </SectionContent>
        </SectionCard>

        <SectionCard>
          <SectionTitle><div>Experience</div>
            <EditIcon
              sx={{ cursor: 'pointer' }}
              onClick={() => setOpenExperienceModal(true)} />
            <EditExperienceModal
              open={openExperienceModal}
              onClose={() => setOpenExperienceModal(false)}
              initialValue={{ company: '', joining: '', leaving: '', description: '' }}
              onSave={(newExperience) => {
                SetExperienceArr((prev: any) => [...prev, newExperience]);
                dispatch(updateUserField({ field: 'experience', value: ExperienceArr }));
                setOpenExperienceModal(false);
              }}
              experienceArr={ExperienceArr}
            />

          </SectionTitle>
          {ExperienceArr ? ExperienceArr.map((ele: any) => {
            return <Experience
              title={ele.company}
              joining={ele.joining}
              leaving={ele.leaving}
              description={ele.description}
            />

          }) : <div>No Expriences added</div>}
        </SectionCard>

        {/* Education Section */}
        <SectionCard>
          <SectionTitle><div>Education</div> <EditIcon onClick={() => setOpenEducationModal(true)} /></SectionTitle>
          {EducationArr ? EducationArr.map((ele: any) => {
            return <Education title={ele.title} description={ele.description} />
          }) : <div>No Education Added</div>}
          <EditEducationModal
            open={openEducationModal}
            onClose={() => setOpenEducationModal(false)}
            initialValue={{ title: '', description: '' }}
            onSave={(newEducation) => {
              SetEducationArr((prev: any) => [...prev, newEducation]);
              setOpenEducationModal(false);
            }}
            educationArr={EducationArr}
          />
        </SectionCard>
        <SectionCard>
          <SectionTitle><div>Certifications</div> <EditIcon onClick={() => setOpenCertificationModal(true)} /></SectionTitle>
          {certificationsArr.map((cert: any) => (
            <Certification
              name={cert.name}
              organisation={cert.organisation}
            />
          ))}
          <EditCertificationModal
            open={openCertificationModal}
            onClose={() => setOpenCertificationModal(false)}
            initialValue={{ name: '', organisation: '' }}
            onSave={(newCertification) => {
              setCertificationsArr((prev: any) => [...prev, newCertification]);
              setOpenCertificationModal(false);
            }}
            certificationArr={certificationsArr}
          />
        </SectionCard>
        <SectionCard>
          <SectionTitle><div>Skills</div> <EditIcon onClick={() => setOpenSkillModal(true)} /></SectionTitle>
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            {skillsArr.map((skill: any) => (
              <Skill
                name={skill}
              />
            ))}
          </div>
          <EditSkillModal
            open={openSkillModal}
            onClose={() => setOpenSkillModal(false)}
            initialValue="hibro"
            onSave={(newSkill) => {
              console.log("skills", newSkill)
              setSkillsArr((prev: string[]) => [...prev, newSkill]);
              setOpenSkillModal(false);
            }}
            skillArr={skillsArr}
          />
        </SectionCard>

      </Container>
    </>
  );
};

export default Profile;
