import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { AiOutlinePlus } from "react-icons/ai";
import { colors } from "../../styles";

const Input = styled.input`
  appearance: none;
  background-color: ${(props) => props.background};
  border-radius: 50px;
  cursor: pointer;
  height: 40px;
  width: 40px;
  &:checked {
    border: 2px solid ${colors.white};
    outline: 1px solid ${(props) => props.background};
  }
`;

const Label= styled.label`
display:flex;
justify-content:center;
align-items:center;
`
const RadioInput = ({ value, name,...props }) => {
  return <Input type="radio" {...props} value={value} name={name} />
};

RadioInput.propTypes = {
  background: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default RadioInput;
