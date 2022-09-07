import { BiCategoryAlt } from "react-icons/bi";
import { BsReceiptCutoff } from "react-icons/bs";
import { GiTargeted } from "react-icons/gi";
import SidebarNav from "./sidebar-nav";

const navigation = [
  { name: "Categories", href: "#", icon: <BiCategoryAlt />, current: true },
  {
    name: "Transactions",
    href: "#",
    icon: <BsReceiptCutoff />,
    current: false,
  },
  { name: "Budgets", href: "#", icon: <GiTargeted />, current: false },
];

export default {
  title: "SidebarNav/SidebarNav",
  component: SidebarNav,
  argTypes: {
    onItemClick: { action: "onItemClick" },
  },
};

const Template = (args) => {
  return (
    <div
      style={{
        maxWidth: "240px",
        border: "1px solid gray",
        padding: "0.5rem",
      }}
    >
      <SidebarNav {...args} />
    </div>
  );
};

export const SidebarNavExample = Template.bind({});
SidebarNavExample.args = {
  initialNavigation: navigation,
};
