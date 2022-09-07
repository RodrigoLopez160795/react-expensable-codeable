import CircleIcon from "../CircleIcon";
import * as Styled from "./styles";
import PropTypes from "prop-types";

function CategoryCard({ name, color, Icon, amount }) {
  return (
    <Styled.Wrapper color={color}>
      <CircleIcon Icon={Icon} size="lg" color={color} />
      <div>
        <Styled.CategoryName>{name}</Styled.CategoryName>
        <Styled.CategoryAmount>
          <span>$</span>
          <span>{Intl.NumberFormat("en-US").format(amount)}</span>
        </Styled.CategoryAmount>
      </div>
    </Styled.Wrapper>
  );
}

CategoryCard.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  Icon: PropTypes.func,
  amount: PropTypes.number,
};

export default CategoryCard;
