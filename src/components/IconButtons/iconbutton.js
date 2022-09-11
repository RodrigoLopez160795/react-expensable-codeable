import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { useState } from "react";
import { AiFillBank, AiFillCar} from "react-icons/ai";
import {BsFillCartFill, BsGiftFill} from "react-icons/bs";
import {GiGraduateCap, GiHealthNormal} from "react-icons/gi";
import {IoLogoGameControllerB} from "react-icons/io";
import {RiBillFill} from "react-icons/ri";
import { colors } from "../../styles";


const StyledDiv = styled.div`
  background-color:${(props)=> props.current? colors.gray[600] : colors.white};
  border-radius:50px;
  cursor: pointer;
  height: 48px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function selectIcon(icon,current=false){
  current = current=== true ? "white" : "gray";
  switch(icon){
    case "AiFillBank": return <AiFillBank color={current} size="2em"/>;
    case "BsFillCartFill": return <BsFillCartFill color={current} size="2em"/>;
    case "GiHealthNormal": return <GiHealthNormal color={current} size="2em"/>;
    case "IoLogoGameControllerB": return <IoLogoGameControllerB color={current} size="2em"/>;
    case "RiBillFill": return <RiBillFill color={current} size="2em"/>;
    case "GiGraduateCap": return <GiGraduateCap color={current} size="2em"/>;
    case "AiFillCar": return <AiFillCar color={current} size="2em"/>;
    case "BsGiftFill": return <BsGiftFill color={current} size="2em"/>;
  }
}

const IconButton = ({ icon,current}) => {
  function handleCurrent(){
    let selectedButton;
    const buttons = document.querySelectorAll(".js-icon-button");
    buttons.forEach((button) => {
     button.addEventListener("click",()=>{
      console.log(button)
      button.dataset.current = true;
     })
     button.dataset.current = false;
      // console.log(button);
    })
    // console.log(selectedButton);
  }
  handleCurrent();
  return <StyledDiv data-current={current} className="js-icon-button">{selectIcon(icon)}</StyledDiv>;
};

export default IconButton;
