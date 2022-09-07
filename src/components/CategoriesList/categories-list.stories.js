import CategoriesList from "./categories-list";
import { BsFillCartFill } from "react-icons/bs";

export default {
  title: "Categories/Categories List",
  component: CategoriesList,
  argTypes: {
    data: { table: { disable: true } },
  },
};

const Template = (args) => {
  let data = new Array(args.numberOfChildren);
  data = Array.from(data).map((_e, index) => ({
    id: index,
    name: "Food",
    color: "#DB2777",
    amount: 500,
    Icon: BsFillCartFill,
  }));
  return <CategoriesList data={data} />;
};

export const CategoriesPage = Template.bind({});
CategoriesPage.args = {
  numberOfChildren: 10,
};
