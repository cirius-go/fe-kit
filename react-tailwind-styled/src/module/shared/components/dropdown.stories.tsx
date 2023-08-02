import "index.css";
import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./dropdown";
import Button from "./button";
import { useRef } from "react";
import DropdownTypes from "./dropdown/types";

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const WithButtonInside: Story = {
  args: {
    children: <Button>Inner button</Button>,
  },
};

const dataDropdown = [<Button>dropdown 1</Button>, <Button>dropdown 2</Button>];

const WithDataChildrenComponent = (args: DropdownTypes.Props) => {
  const dropdownRef = useRef<DropdownTypes.ExposeRef>(null);

  const handleOnClickInnerButton = () => {
    if (!dropdownRef.current) {
      return;
    }

    dropdownRef.current.toggle();
  };

  return (
    <Dropdown ref={dropdownRef} {...args}>
      <Button onClick={handleOnClickInnerButton}>Dropdown</Button>
    </Dropdown>
  );
};

export const WithDataChildren: Story = {
  render: WithDataChildrenComponent,
  args: {
    dataDropdown: dataDropdown,
  },
};
const dataDropdownLong = [
  <Button>dropdown super long long text</Button>,
  <Button>
    dropdown super long long text, dropdown super long long text, dropdown super
    long long text
  </Button>,
];
export const WithDataChildrenSuperLongLongText: Story = {
  render: WithDataChildrenComponent,
  args: {
    dataDropdown: dataDropdownLong,
  },
};
