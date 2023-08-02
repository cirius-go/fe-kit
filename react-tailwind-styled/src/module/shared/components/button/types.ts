import { ButtonHTMLAttributes, ReactNode } from "react";

namespace ButtonTypes {
  export enum Variant {
    DEFAULT = "DEFAULT",
    PRIMARY = "PRIMARY",
  }

  export enum IconPosition {
    LEFT = "LEFT",
    RIGHT = "RIGHT",
  }

  export type Props = {
    variant?: Variant;
    icon?: ReactNode;
    iconPosition?: IconPosition;
  } & ButtonHTMLAttributes<HTMLButtonElement>;

  export type Styled = {
    variant?: Variant;
    iconPosition?: IconPosition;
  };
}

export default ButtonTypes;
