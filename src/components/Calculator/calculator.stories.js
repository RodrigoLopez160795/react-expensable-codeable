import { colors } from "../../styles";
import Calculator from "./calculator";
import { BsFillCartFill } from "react-icons/bs";

export default {
  title: "Calculator/Calculator",
  component: Calculator,
  argTypes: {
    handleDigitClick: { action: "handleDigitClick" },
  },
};

const category = {
  color: colors.red[500],
  name: "Groceries",
  icon: BsFillCartFill,
};

const Template = (args) => (
  <div style={{ padding: "1rem" }}>
    <Calculator {...args} />
  </div>
);

export const Test = Template.bind({});
Test.args = {
  category,
};
