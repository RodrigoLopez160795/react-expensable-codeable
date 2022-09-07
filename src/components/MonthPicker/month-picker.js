import styled from "@emotion/styled";
import { colors } from "../../styles";
import Button from "../Button";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const MonthContainer = styled(Button)`
  cursor: default;
  min-width: 136px;
  &:hover {
    background-color: ${colors.gray[200]};
  }
`;

function MonthPicker({ onLeftClick, onRightClick, label = "Label" }) {
  return (
    <Wrapper>
      <Button
        size="sm"
        rounded
        icon={<FiChevronLeft />}
        onClick={onLeftClick}
      />
      <MonthContainer size="sm" as="div">
        {label}
      </MonthContainer>
      <Button
        size="sm"
        rounded
        icon={<FiChevronRight />}
        onClick={onRightClick}
      />
    </Wrapper>
  );
}

export default MonthPicker;
