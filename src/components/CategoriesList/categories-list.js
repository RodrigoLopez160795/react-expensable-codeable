import CategoryCard from "../CategoryCard";
import PropTypes from "prop-types";
import { Wrapper } from "./styles";
import CategoryAdd from "../CategoryAdd";

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
      <CategoryAdd/>
    </Wrapper>
  );
}

CategoriesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default CategoriesList;
