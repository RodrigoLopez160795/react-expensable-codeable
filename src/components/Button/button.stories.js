import { RiUser3Fill, RiHome2Fill } from "react-icons/ri";
import Button from "./button";

const icons = {
  undefined: undefined,
  RiUser3Fill: <RiUser3Fill />,
  RiHome2Fill: <RiHome2Fill />,
};

export default {
  title: "Button",
  component: Button,
  argTypes: {
    icon: {
      options: Object.keys(icons), // An array of serializable values
      mapping: icons, // Maps serializable option values to complex arg values
      control: {
        typeButton: "select", // Type 'select' is automatically inferred when 'options' is defined
        labels: {
          RiUser3Fill: "User",
          RiHome2Fill: "Home",
        },
      },
    },
    typeButton: {
      options: [undefined, "primary", "secondary"],
    },
    size: {
      options: [undefined, "sm", "lg"],
    },
    onClick: { action: "onClick" },
  },
};

const Template = (args) => {
  return (
    <div
      style={{
        maxWidth: "400px",
        border: "1px solid black",
        padding: "1rem",
        backgroundColor: "#FEFEFE",
        borderRadius: "1rem",
      }}
    >
      <Button {...args}>{args.children}</Button>
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
  typeButton: "primary",
  size: undefined,
  icon: undefined,
  disabled: undefined,
  isFullWidth: undefined,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Button",
  typeButton: "secondary",
  size: undefined,
  icon: undefined,
  disabled: undefined,
  isFullWidth: undefined,
};

export const Small = Template.bind({});
Small.args = {
  children: "Button",
  typeButton: undefined,
  size: "sm",
  icon: undefined,
  disabled: undefined,
  isFullWidth: undefined,
};

export const Large = Template.bind({});
Large.args = {
  children: "Button",
  typeButton: undefined,
  size: "lg",
  icon: undefined,
  disabled: undefined,
  isFullWidth: undefined,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: "Button",
  typeButton: undefined,
  size: undefined,
  icon: "RiUser3Fill",
  disabled: undefined,
  isFullWidth: undefined,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Button",
  typeButton: undefined,
  size: undefined,
  icon: undefined,
  disabled: true,
  isFullWidth: undefined,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  children: "Button",
  typeButton: undefined,
  size: undefined,
  icon: undefined,
  disabled: undefined,
  isFullWidth: true,
};
