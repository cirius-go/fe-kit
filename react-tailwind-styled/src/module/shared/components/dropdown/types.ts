import { HTMLAttributes, ReactNode } from "react";

namespace DropdownTypes {
  export type Props = {
    autoClose?: boolean;
    contentDropdown?: ReactNode;
    dataDropdown?: ReactNode;
    maxDataDropdownHeight?: string;
  } & HTMLAttributes<HTMLDivElement>;

  export type States = {
    toggle: boolean;
  };

  // INFO: for 2 ways databindings
  export type ExposeRef = {
    toggle: (next?: boolean) => void;
  };

  export type Styled = {
    toggle: boolean;
  };

  export type StyledWrapperDataDropdown = {
    toggle: boolean;
    maxDataDropdownHeight: string;
  };
}

export default DropdownTypes;
