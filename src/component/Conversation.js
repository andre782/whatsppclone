import styled from "styled-components";
import jpg from "../profile/SharedScreenshot.jpg"
import { SearchContainer, SearchInput } from "./ContactList";
import { messagesList } from "../Data";
import EmojiPicker from 'emoji-picker-react';
import { useState } from "react";


const Container = styled.div`
display: flex;
flex-direction: column;
height: 100%;
flex: 2;
background: #f6f7f8;
`;

const ProfileHeader = styled.div`
display: flex;
flex-direction: row;
background-color: #ededed;
padding: 16px;
align-items: center;
gap: 10px
`;

const ProfileImage = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`;

const ChatBox = styled.div`
display: flex;
background: #f0f0f0;
padding: 10px;
align-items: center;
bottom: 0;
`;

const EmojiImage = styled.img`
width: 30px;
height: 28px;
opacity: 0.4;
cursor: pointer;
margin-left: 10px;
`;

const MessageContainer = styled.div`
display: flex;
flex-direction: column;
height: 100%;
background: #e5ddd6 ;
`;

const MessageDiv = styled.div`
justify-content: ${props => props.Kamu ? 'flex-end':'fles-start' };
display: flex;
margin: 5px 16px;
`;

const Meesage = styled.div`
background: ${props => props.Kamu ? '#daf8cb':'white' };
max-width: 50%;
color: #303030;
padding: 8px 10px;
font-size: 14px;
border-radius: 4px;
`;

const initialMessagesList = [
    {
      Id: 0,
      messageType: "TEXT",
      text: "Hello",
      senderID: 0,
      addedOn: "02:04",
    },
    {
      Id: 1,
      messageType: "TEXT",
      text: "Hi there",
      senderID: 1,
      addedOn: "02:05",
    },
    // Add more initial messages as needed
  ];

const ConversationComponent = (props) => {
    const {SelectedChat} = props;
    const [text, setText] = useState("");
    const [pickerVisible, togglePicker ] = useState(false);
    const [messagesList, setMessagesList] = useState(initialMessagesList);


    const onEmojiClick = (event, emojiObj) => {
        setText(text + emojiObj.emoji);
        togglePicker(false);
      };

      const onEnterpress = (event) => {
        if (event.key === "Enter") {
          const updatedMessagesList = [...messagesList];
          updatedMessagesList.push({
            Id: 0,
            messageType: "TEXT",
            text,
            senderID: 0,
            addedOn: "02:04",
          });
          setMessagesList(updatedMessagesList);
        }
      };
      
    return (
        <Container>
            <ProfileHeader >
            <ProfileImage src={jpg}/>
                {SelectedChat.name}
            </ProfileHeader>
            <MessageContainer>
                {messagesList.map((messageData) => (
                    <MessageDiv Kamu={messageData.senderID === 0}>
                        <Meesage Kamu={messageData.senderID === 0}>{[messageData.text]}</Meesage>
                    </MessageDiv>
                ))}

            </MessageContainer>
            <ChatBox>
                <SearchContainer>
                    {pickerVisible && (
                <EmojiPicker onEmojiClick={onEmojiClick}/>)}
                    <EmojiImage src={"/data.svg"} onClick={()=>togglePicker(!pickerVisible)}/>
                    <SearchInput placeholder="ketikan sebuah pesan" value={text} onKeyDown={onEnterpress}
                    onChange={(e)=> setText(e.target.value)} />
                </SearchContainer>
            </ChatBox>
        </Container>
    )
}

export default ConversationComponent;