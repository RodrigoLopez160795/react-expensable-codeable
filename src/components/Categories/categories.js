import { useEffect, useState } from "react";
import apiFetch from "../../services/api-fetch";
import PropTypes from "prop-types";
import { getMonthlyData } from "./utils";
import CategoriesList from "../CategoriesList";
import styled from "@emotion/styled";
import { colors, typography } from "../../styles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`;

const TotalAmount = styled.p`
  ${typography.head.lg}
  color: ${colors.red[500]};
`;

const TotalLabel = styled.p`
  ${typography.text.sm}
  font-weight: 500;
  color: ${colors.gray[500]};
`;

function Categories({ date, type }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const monthlyData = getMonthlyData(categories, date, type);
  const total = monthlyData.reduce((acc, cur) => acc + cur.amount, 0);

  useEffect(() => {
    setLoading(true);
    setError(null);
    apiFetch("categories")
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, []);

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Wrapper>
      <TotalWrapper>
        <TotalAmount>$ {Intl.NumberFormat("en-US").format(total)}</TotalAmount>
        <TotalLabel>
          Total {type === "expense" ? "Expenses" : "Income"}
        </TotalLabel>
      </TotalWrapper>
      <CategoriesList data={monthlyData} />
    </Wrapper>
  );
}

Categories.propTypes = {
  date: PropTypes.shape({
    year: PropTypes.number,
    month: PropTypes.number,
  }),
  type: PropTypes.oneOf(["income", "expense"]),
};

export default Categories;
