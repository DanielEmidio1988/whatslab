import { Main } from "./appStyled"
import { useState } from "react"
import Header from "./components/Header/Header";
import Chatbox from "./components/Chatbox/Chatbox"
import Footer from "./components/Footer/Footer"

function App() {

  const [messages, setMessages] = useState([]) //Onde armazenará o valor das mensagens enviadas para o chatbox
  const [person, setPerson] = useState("") //Onde armazena o nome da pessoa que envia a mensagem
  

  return (
    <div>
      <Main>
      <Header
      person={person}
      setPerson={setPerson}/>
      <Chatbox
      messages={messages}
      setMessages={setMessages}/>
      <Footer
      person={person}
      messages={messages}
      setMessages={setMessages}/>
      </Main>
   
     
    </div>
  );
}

export default App;
