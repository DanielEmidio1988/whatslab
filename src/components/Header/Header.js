import fotoperfil from "../../assets/fotoperfil.jpg"
import phone from "../../assets/phone.svg"
import camera from "../../assets/video-cam.svg"
import hamburguer from "../../assets/hamburger.svg"
import { MainHeader, MainPerson, Icons } from "./headerStyled"
import {useState} from "react"

function Header(props){

    function onChangePerson(event){
        props.setPerson(event.target.value)
    }

    return(
        <MainHeader>
            
            <MainPerson>
                <img src={fotoperfil} alt="imagem perfil"/>                
                <div>
                <select
                    value={props.person}
                    onChange={onChangePerson}>
                    <option value=""></option>
                    <option value="eu">Eu</option>
                    <option value="cassia">Cassia</option>
                    <option value="cristiano">Cristiano</option>
                    <option value="pedro">Pedro</option>
                    <option value="aline">Aline</option>
                </select>
                <p>Online</p>
                </div>
            </MainPerson>
            
            
            <Icons>
                <img src={phone} alt="phone"/>
                <img src={camera} alt="camera"/>
                <img src={hamburguer} alt="hamburguer"/>
            </Icons>
        </MainHeader>
    )
}

export default Header