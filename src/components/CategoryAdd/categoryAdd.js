import styled from "@emotion/styled";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { colors } from "../../styles";
import StyledBackground from "../Background/background";
import NewCategory from "../newCategory/newCategory";

const StlyedDiv = styled.div`
  border: 2px dashed #a8a29e;
  border-radius: 8px;
  cursor: pointer;
  max-width: 200px;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CategoryAdd = () => {
  const [showModal, setShowModal] = useState(false);

  function handleShow(){
    setShowModal(!showModal);
  }
  return (
    <>
      <StlyedDiv onClick={handleShow}>
        <AiOutlinePlus size={"2em"} color={`${colors.gray[400]}`} />
      </StlyedDiv>
      {showModal && <StyledBackground>
        <NewCategory handleClick={handleShow}/>
      </StyledBackground>}
    </>
  );
};

export default CategoryAdd;
