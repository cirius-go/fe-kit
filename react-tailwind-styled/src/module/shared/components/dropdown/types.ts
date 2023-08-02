import { HTMLAttributes, ReactNode } from "react";

namespace DropdownTypes {
  export type Props = {
    preventAutoClose?: boolean;
    contentDropdown?: ReactNode;
  } & HTMLAttributes<HTMLDivElement>;

  export type States = {
    toggle: boolean;
  };

  export type ExposeRef = {
    toggle: (next: boolean) => void;
  };

  export type Styled = {
    toggle: boolean;
  };
}

export default DropdownTypes;
