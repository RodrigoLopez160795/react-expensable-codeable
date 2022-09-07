import SidebarNavItem from "./sidebar-nav-item";
import { RiUser3Fill, RiHome2Fill } from "react-icons/ri";

const icons = {
  undefined: undefined,
  RiUser3Fill: <RiUser3Fill />,
  RiHome2Fill: <RiHome2Fill />,
};

export default {
  title: "SidebarNav/SidebarNav Item",
  component: SidebarNavItem,
  argTypes: {
    icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "select",
        labels: {
          RiUser3Fill: "User",
          RiHome2Fill: "Home",
        },
      },
    },
    onClick: { action: "onClick" },
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
      <SidebarNavItem {...args} />
    </div>
  );
};

export const Idle = Template.bind({});
Idle.args = {
  name: "Content Text",
  current: undefined,
  icon: undefined,
  href: undefined,
};

export const Current = Template.bind({});
Current.args = {
  name: "Content Text",
  current: true,
  icon: undefined,
  href: undefined,
};

export const IdleWithIcon = Template.bind({});
IdleWithIcon.args = {
  name: "Content Text",
  current: undefined,
  icon: "RiHome2Fill",
  href: undefined,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  name: "Content Text",
  current: true,
  icon: "RiHome2Fill",
  href: undefined,
};
