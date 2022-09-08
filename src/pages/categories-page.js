import styled from "@emotion/styled";
import { format, getMonth, getYear } from "date-fns";
import Categories from "../components/Categories/categories";
import MonthPicker from "../components/MonthPicker";
import { typography } from "../styles";
import { useParams, useSearchParams } from "react-router-dom";

const Title = styled.h1`
  ${typography.head.sm}
  font-weight: 600;
`;

function CategoriesPage() {
  let params = useParams();

  //?year=2023&month=0
  const [searchParams, setSearchParams] = useSearchParams({
    year: getYear(new Date()),
    month: getMonth(new Date()),
  });

  const type = params.type || "expense";

  const date = {
    year: Number(searchParams.get("year")),
    month: Number(searchParams.get("month")),
  };

  const handleRightClick = () => {
    const newMonth = date.month + 1;
    if (newMonth > 11) {
      setSearchParams({ year: date.year + 1, month: 0 });
    } else {
      setSearchParams({ year: date.year, month: newMonth });
    }
  };

  const handleLeftClick = () => {
    const newMonth = date.month - 1;
    if (newMonth < 0) {
      setSearchParams({ year: date.year - 1, month: 11 });
    } else {
      setSearchParams({ year: date.year, month: newMonth });
    }
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
