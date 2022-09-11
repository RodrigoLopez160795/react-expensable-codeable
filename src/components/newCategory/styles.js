import { colors, fonts, typography } from "../../styles";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

export const Header = styled.div`
  display: flex;
  ${typography.head.sm}
  font-family:${fonts.secondary};
  justify-content:space-between;
`;

export const Pharagraph = styled.p`
  cursor: pointer;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const FormItem = styled.div`
  color: ${colors.gray[500]};
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-family: ${fonts.primary};
  ${typography.text.xs}
`;

export const Input = styled.input`
  border: 1px solid ${colors.gray[200]};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  padding: 8px 12px;
`;

export const RadioButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  max-width:272px;
`;
