import CircleIcon from "../CircleIcon";
import * as Styled from "./styles";
import PropTypes, { func } from "prop-types";
import Calculator from "../Calculator/calculator";
import { useState } from "react";
import StyledBackground from "../Background/background";


function CategoryCard({ category, onAddTransaction, date }) {
  const { id, name, color, Icon, amount } = category;
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }

  return (
    <>
      <Styled.Wrapper color={color} onClick={handleClick}>
        <CircleIcon Icon={Icon} size="lg" color={color} />
        <div>
          <Styled.CategoryName>{name}</Styled.CategoryName>
          <Styled.CategoryAmount>
            <span>$</span>
            <span>{Intl.NumberFormat("en-US").format(amount)}</span>
          </Styled.CategoryAmount>
        </div>
      </Styled.Wrapper>
      {show && (
        <StyledBackground>
          <Calculator
            category={{ id, name, color, icon: Icon }}
            onClose={handleClick}
            onAddTransaction={onAddTransaction}
            date={date}
          />
        </StyledBackground>
      )}
    </>
  );
}

CategoryCard.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  Icon: PropTypes.func,
  amount: PropTypes.number,
};

export default CategoryCard;
