import styled from "styled-components";
import { contactList } from "../Data";
import { MdOutlineGroups2 } from "react-icons/md";
import { AiOutlineEllipsis } from "react-icons/ai";
import foto from "../profile/SharedScreenshot.jpg"


const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
`;

const ProfileInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
  padding: 15px;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const SearchBox = styled.div`
dislay: flex;
background: #f6f6f6;
padding: 10px;
`;

export const SearchContainer = styled.div`
display: flex;
flex-direction: row;
background : white;
border-radius: 16px;
width: 100%;
padding: 25px 0;
`

const SearchIcon = styled.img`
width: 28px;
height: 28px;
padding-left: 10px;
`;

export const SearchInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding-left: 15px;
  font-size: 17px;
  margin-left: 10px;

  &::placeholder {
    color: #A9A9A9;
  }
`;

const ContactItem = styled.div `
  display: flex;
  flex-direction : row;
  border-bottom: 1px solid #f2f2f2;
  background: white;
  cursor: pointer;
  padding: 15px 12px;
  :hover{
    background: #ebebeb;
  }
`;



const ProfileIcon = styled(ProfileImage)`
width : 38px;
height: 38px;
`;

const ContactName = styled.span`
width: 100%;
font-size: 16px;
color: black;
`;

const MessageText = styled.span `
width: 20%;
font-size: 14px;
margin-top: 3px;
color: rgba (0,0,0,0.8);
`;

const ContactInfo = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin: 0 10px;
`

const ContactComponent =(props) => {
  const { userData,setChat } = props;
  return <ContactItem onClick={()=>setChat(userData)}>
    <ProfileImage src={userData.profilePic}/>
    <ContactInfo>
      <ContactName>{userData.name}</ContactName>
      <MessageText>Frontend Dev</MessageText>
    </ContactInfo>
    <MessageText>01:00 am</MessageText>
  </ContactItem>
};

const ContactList = (props) => {
  return (
    <Container>
      <ProfileInfoDiv>
        <ProfileImage src={foto} />
      </ProfileInfoDiv>
      <SearchBox>
        <SearchContainer>
          <SearchIcon src={"/search-icon.svg"}/>
          <SearchInput placeholder="cari atau mulai chat baru"/>
        </SearchContainer>
      </SearchBox>
      {contactList.map((userData)=>( 
      <ContactComponent userData={userData} setChat={props.setChat}/>
      
      ))}
    </Container>
  );
}

export default ContactList;