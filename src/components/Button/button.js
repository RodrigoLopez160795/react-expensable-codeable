import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { colors, typography } from "../../styles";

function typeStyles(type) {
  switch (type) {
    case "primary":
      return `
        background-color: ${colors.pink[600]};
        color: ${colors.white};
        &:hover {
          background-color: ${colors.pink[700]};
        }
        &:active {
          background-color: ${colors.pink[800]};
        }
        &:focus {
          outline: 2px solid ${colors.pink[800]};
        }
      `;

    case "secondary":
      return `
        background-color: ${colors.stone[500]};
        color: ${colors.white};
        &:hover {
          background-color: ${colors.stone[600]};
        }
        &:active {
          background-color: ${colors.stone[700]};
        }
        &:focus {
          outline: 2px solid ${colors.stone[700]};
        }
      `;

    default:
      break;
  }
}

function sizeStyles(size, rounded) {
  switch (size) {
    case "sm":
      return `
        padding: 0.5rem ${rounded ? "" : "0.75rem"};
        ${typography.text.sm}
        line-height: 1em;
      `;

    case "lg":
      return `
          padding: 0.875rem ${rounded ? "" : "1.5rem"};
          ${typography.text.lg}
          line-height: 1em;
        `;

    default:
      break;
  }
}

const StyledButton = styled.button`
  display: flex;
  width: ${({ isFullWidth }) => (isFullWidth ? "100%" : "fit-content")};
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem ${({ rounded }) => (rounded ? "0.75rem" : "1rem")};
  background-color: ${colors.gray[200]};
  border-radius: ${({ rounded }) => (rounded ? "999px" : "0.5rem")};
  color: ${colors.gray[900]};
  border: none;
  ${typography.text.md}
  line-height: 1em;
  cursor: pointer;
  &:hover {
    background-color: ${colors.gray[300]};
  }
  &:active {
    background-color: ${colors.gray[400]};
  }
  &:focus {
    outline: 2px solid ${colors.gray[400]};
  }
  &:disabled {
    opacity: 60%;
    cursor: not-allowed;
  }

  ${(props) => typeStyles(props.type)}
  ${(props) => sizeStyles(props.size, props.rounded)}
`;

function Button({ icon, children, ...props }) {
  return (
    <StyledButton {...props}>
      {icon}
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["sm", "lg"]),
  icon: PropTypes.element,
  isFullWidth: PropTypes.bool,
  children: PropTypes.string,
  onClick: PropTypes.func,
  rounded: PropTypes.bool,
};

export default Button;
