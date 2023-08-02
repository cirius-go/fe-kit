import tw from "tailwind-styled-components";
import DropdownTypes from "./types";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { useClickAway } from "react-use";

const S = {
  Dropdown: tw.div<DropdownTypes.Styled>``,
  Container: tw.div``,
};

const Dropdown = forwardRef<DropdownTypes.ExposeRef, DropdownTypes.Props>(
  ({ preventAutoClose, children, ...divProps }, exposeRef) => {
    const [states, setStates] = useState<DropdownTypes.States>({
      toggle: true,
    });
    const ref = useRef<HTMLDivElement>(null);

    const handleToggleDropdown = (next: boolean) => {
      setStates((prev) => ({ ...prev, toggle: next }));
    };

    useClickAway(ref, () => {
      if (preventAutoClose) {
        return;
      }

      handleToggleDropdown(true);
    });

    useImperativeHandle(exposeRef, () => {
      return {
        toggle: handleToggleDropdown,
      };
    });

    return (
      <S.Dropdown ref={ref} toggle={states.toggle} {...divProps}>
        {children}
        <S.Container></S.Container>
      </S.Dropdown>
    );
  }
);

export default Dropdown;
