import { useState } from "react"
import { FooterMain } from "./footerStyled"
import mic from "../../assets/microphone.svg"
import smile from "../../assets/smiley.svg"
import paperclip from "../../assets/paperclip.svg"

function Footer(props){

    const [message,setMessage] = useState("") //Onde receberei o valor de mensagem

//Função que permite digitar na caixa de mensagem
    function onChangeInput(event){
        setMessage(event.target.value)
    }

//Função para puxar o evento do teclado
    function oneKeyDownInput(event){
        if(event.key === "Enter"){
            //Crio a cópia do meu array de mensagens
            const novaMessage = [...props.messages]

            //Objeto que identifica quem é a pessoa que esta mandando a mensagem
            const novaPessoaMensagem = {
                idDoAutor: Date.now(),
                nomeDoAutor: props.person,
                mensagemDoAutor:message,
                horario: new Date().toLocaleString("pt-BR", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true
                }) 
            }
            
            //Envio a mensagem digitada no array copiado
            novaMessage.push(novaPessoaMensagem)
            
            //Atualizo(Seto) o array de mensagens com a informação do array copiado
            props.setMessages(novaMessage)
            setMessage("")
        }
    }

    return(
        <FooterMain>
            <div>
                <a href="#">
                    <img src={smile} alt="smile icon"/>
                </a>

                <input
                    type={"text"}
                    value={message}
                    onChange={onChangeInput}
                    onKeyDown={oneKeyDownInput} 
                />

                <a href="#">
                    <img src={paperclip} alt="paperclip icon"/>
                </a>
            </div>
            <div>
                <a href="#"> 
                    <img src={mic} alt="microfone"/>
                </a>
            </div>
        </FooterMain>
    )
}

export default Footer