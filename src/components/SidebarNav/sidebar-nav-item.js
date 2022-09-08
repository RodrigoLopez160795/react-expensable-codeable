import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { colors, typography } from "../../styles";
import { NavLink } from "react-router-dom";

// const currentStyles = (current) => {
//   if (current) {
//     return `
//     background-color: ${colors.pink[400]};
//     color: ${colors.white};
//     &:hover {
//       background-color: ${colors.pink[400]};
//     }
//     `;
//   }
// };

const StyledNavLink = styled(NavLink)`
  padding: 0.5rem;
  display: flex;
  gap: 0.75rem;
  text-decoration: none;
  ${typography.text.md};
  color: ${colors.gray[600]};
  font-weight: 500;
  align-items: center;
  border-radius: 0.375rem;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: ${colors.pink[100]};
  }
  &:focus {
    outline: 1px solid ${colors.pink[500]};
  }
  &:visited {
    color: ${colors.gray[600]};
  }
`;

function SidebarNavItem({ name, icon, ...rest }) {
  return (
    <StyledNavLink
      {...rest}
      style={({ isActive }) => {
        if (!isActive) return;
        return {
          backgroundColor: colors.pink[400],
          color: colors.white,
          "&:hover": {
            backgroundColor: colors.pink[400],
          },
          "&:visited": {
            color: colors.white,
          },
        };
      }}
    >
      {icon}
      {name}
    </StyledNavLink>
  );
}

SidebarNavItem.propTypes = {
  current: PropTypes.bool,
  name: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func,
};

export default SidebarNavItem;
