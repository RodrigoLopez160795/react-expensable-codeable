import styled from "@emotion/styled";
import { colors, typography } from "../../styles";

export const Wrapper = styled.div`
  border-radius: 0.5rem;
  border: 2px solid ${({ color }) => color};
  padding: 1rem;
  display: flex;
  gap: 1rem;
  max-width: 200px;
  /* min-width: 200px; */
  background-color: ${colors.white};
  cursor: pointer;
`;

export const CategoryName = styled.p`
  ${typography.text.sm}
  color: ${colors.gray[500]};
  font-weight: 600;
`;

export const CategoryAmount = styled.div`
  display: flex;
  gap: 0.25rem;
  ${typography.head.sm}
  font-weight: 600;
  color: ${colors.gray[900]};
`;
