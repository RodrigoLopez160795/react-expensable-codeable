import * as Styled from "./styles";
import PropTypes from "prop-types";
import Button from "../Button/button";
import RadioInput from "../radioInput/radioInput";
import { colors } from "../../styles";
import IconButton from "../IconButtons/iconbutton";
import { useRef } from "react";


const NewCategory = ({ handleClick }) => {
  function handleSubmit(e) {
    e.preventDefault();
    const [name, color,...values] = e.target.elements;
    console.log(name.value);
    console.log(color.value)
  }

  // function handleClick({target}){
  //   console.log(selectedIcon)
  // }

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <p>New Category</p>
        <Styled.Pharagraph onClick={handleClick}>X</Styled.Pharagraph>
      </Styled.Header>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.FormItem>
          <label htmlFor="Name">NAME</label>
          <Styled.Input id="Name" name="name" />
        </Styled.FormItem>
        <Styled.FormItem>
          <label htmlFor="Color">COLOR</label>
          <Styled.RadioButtons>
            <RadioInput
              background={colors.red[500]}
              name="color"
              value={colors.red[500]}
              defaultChecked
            />
            <RadioInput
              background={colors.orange[500]}
              name="color"
              value={colors.orange[500]}
            />
            <RadioInput
              background={colors.yellow[500]}
              name="color"
              value={colors.yellow[500]}
            />
            <RadioInput
              background={colors.green[500]}
              name="color"
              value={colors.green[500]}
            />
            <RadioInput
              background={colors.teal[500]}
              name="color"
              value={colors.teal[500]}
            />
            <RadioInput
              background={colors.cyan[500]}
              name="color"
              value={colors.cyan[500]}
            />
            <RadioInput
              background={colors.light_blue[500]}
              name="color"
              value={colors.light_blue[500]}
            />
            <RadioInput
              background={colors.blue[500]}
              name="color"
              value={colors.blue[500]}
            />
          </Styled.RadioButtons>
        </Styled.FormItem>
        <Styled.FormItem>
            <label htmlFor="icon">ICON</label>
            <Styled.RadioButtons>
                <IconButton icon="AiFillBank" current={true}/>
                <IconButton icon="BsFillCartFill" current={false}/>
                <IconButton icon="GiHealthNormal" current={false}/>
                <IconButton icon="IoLogoGameControllerB" current={false}/>
                <IconButton icon="RiBillFill" current={false}/>
                <IconButton icon="GiGraduateCap" current={false}/>
                <IconButton icon="AiFillCar" current={false}/>
                <IconButton icon="BsGiftFill" current={false}/>
            </Styled.RadioButtons>
        </Styled.FormItem>
        <Button
          typeButton={"primary"}
          size={"sm"}
          isFullWidth={true}
          type="submit"
        >
          Create
        </Button>
      </Styled.Form>
    </Styled.Wrapper>
  );
};

NewCategory.propTypes = {
  handleClick: PropTypes.func,
};

export default NewCategory;
