import React, { useState } from "react";
import styled from "styled-components";
import ContactList from "./component/ContactList";
import Conversation from "./component/Conversation"
import img from "./public/welcome-placeholder.jpeg"


const Container = styled.div`
display : flex;
flex-direction: row;
height: 100vh;
width: 100%;
background: #f8f9fb;
`;
const Placeholder = styled.div`
flex: 3;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
font-size: 14px;
color: rgba(0, 0, 0, 0.45);
gap: 10px;
span{
  font-size: 32px;
  color: #525252;
}
`;

const ChatPlaceholder = styled.img`
width: 240px;
height: 240px;
border- radisu; 50%;
object-fit: contain;
`

function App() {
  const [ SelectedChat, setChat ] = useState();

  return (
    <Container>
      <ContactList setChat={setChat} />
      {SelectedChat ? (<Conversation SelectedChat={SelectedChat}/> )
      :( <Placeholder>
        <ChatPlaceholder src={img}/>
        <span>sambungkan ke handphone anda</span>
        konekan whatsapp ke handphonemu lalu kirimkan pesan
      </Placeholder>)}
    </Container>
  );
}

export default App;
