import CategoryCard from "./category-card";
import { BsFillCartFill } from "react-icons/bs";
import { RiUser3Fill, RiHome2Fill } from "react-icons/ri";
import { colors } from "../../styles";

const icons = {
  RiUser3Fill,
  RiHome2Fill,
  BsFillCartFill,
};

export default {
  title: "Categories/Category Card",
  component: CategoryCard,
  argTypes: {
    Icon: {
      options: Object.keys(icons), // An array of serializable values
      mapping: icons, // Maps serializable option values to complex arg values
      control: {
        type: "select", // Type 'select' is automatically inferred when 'options' is defined
        labels: {
          RiUser3Fill: "user",
          RiHome2Fill: "home",
          BsFillCartFill: "cart",
        },
      },
    },
  },
};

const Template = (args) => <CategoryCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Groceries",
  color: colors.pink[600],
  Icon: BsFillCartFill,
  amount: 500,
};
