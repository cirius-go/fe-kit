import "index.css";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./button";
import ButtonTypes from "./button/types";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: ButtonTypes.Variant.PRIMARY,
    children: "button",
  },
};

export const Icon: Story = {
  args: {
    variant: ButtonTypes.Variant.DEFAULT,
    children: "button",
    icon: "<ic>",
    iconPosition: ButtonTypes.IconPosition.RIGHT,
  },
};
