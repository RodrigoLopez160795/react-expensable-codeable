import CategoryCard from "../CategoryCard";
import PropTypes from "prop-types";
import { Wrapper } from "./styles";

function CategoriesList({ data, onAddTransaction, date }) {
  return (
    <Wrapper>
      {data.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          onAddTransaction={onAddTransaction}
          date={date}
        />
      ))}
    </Wrapper>
  );
}

CategoriesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default CategoriesList;
