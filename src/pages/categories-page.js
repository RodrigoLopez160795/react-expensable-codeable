import styled from "@emotion/styled";
import { format, getMonth, getYear } from "date-fns";
import Categories from "../components/Categories/categories";
import MonthPicker from "../components/MonthPicker";
import { typography } from "../styles";
import { useParams } from "react-router-dom";
import { useLocalSearchParams } from "../hooks";

const Title = styled.h1`
  ${typography.head.sm}
  font-weight: 600;
`;

function CategoriesPage() {
  let params = useParams();

  const [searchParams, setSearchParams] = useLocalSearchParams("initialDate", {
    year: getYear(new Date()),
    month: getMonth(new Date()),
  });

  const type = params.type || "expense";

  const date = {
    year: Number(searchParams.get("year")),
    month: Number(searchParams.get("month")),
  };

  const handleRightClick = () => {
    const month = date.month + 1 > 11 ? 0 : date.month + 1;
    const year = month === 0 ? date.year + 1 : date.year;

    setSearchParams({ year, month });
  };

  const handleLeftClick = () => {
    const month = date.month - 1 < 0 ? 11 : date.month - 1;
    const year = month === 11 ? date.year - 1 : date.year;

    setSearchParams({ year, month });
  };

  return (
    <div>
      <Title>Categories</Title>
      <MonthPicker
        label={format(new Date(date.year, date.month), "MMMM yyyy")}
        onRightClick={handleRightClick}
        onLeftClick={handleLeftClick}
      />
      <Categories {...{ date, type }} />
    </div>
  );
}

export default CategoriesPage;
