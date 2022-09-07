import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { colors } from "../../styles";

const custom = {
  padding: {
    sm: "0.5rem",
    md: "0.625rem",
    lg: "0.75rem",
  },
  iconSize: {
    sm: "1rem",
    md: "1.25rem",
    lg: "1.5rem",
  },
};
const Wrapper = styled.div`
  border-radius: 50%;
  padding: ${(props) => custom.padding[props.size]};
  background-color: ${(props) => (props.inverted ? colors.white : props.color)};
  color: ${(props) => (props.inverted ? props.color : colors.white)};
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
`;

export default function CircleIcon({
  size = "md",
  color,
  Icon,
  inverted = false,
}) {
  return (
    <Wrapper size={size} color={color} inverted={inverted}>
      <Icon size={custom.iconSize[size]} />
    </Wrapper>
  );
}

CircleIcon.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  color: PropTypes.string,
  Icon: PropTypes.func,
  inverted: PropTypes.bool,
};
