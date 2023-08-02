import DropdownTypes from "./types";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { useClickAway } from "react-use";
import { styled } from "styled-components";

const S = {
  Dropdown: styled.div<DropdownTypes.Styled>`
    width: max-content;
  `,
  WrapperDataDropdown: styled.div<DropdownTypes.StyledWrapperDataDropdown>`
    margin-top: 1em;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 1em;
    max-height: ${({ toggle, maxDataDropdownHeight }) =>
      toggle ? 0 : maxDataDropdownHeight};
    height: max-content;
    overflow: auto;
    transition: all
      ${({ toggle }) =>
        toggle ? "0.5s cubic-bezier(0, 1, 0, 1)" : "0.5s ease-in-out"};
  `,
};

const Dropdown = forwardRef<DropdownTypes.ExposeRef, DropdownTypes.Props>(
  (
    {
      autoClose = true,
      children,
      dataDropdown,
      maxDataDropdownHeight = "1000px",
      ...divProps
    },
    exposeRef
  ) => {
    const [states, setStates] = useState<DropdownTypes.States>({
      toggle: true,
    });
    const ref = useRef<HTMLDivElement>(null);

    const handleToggleDropdown = (next?: boolean) => {
      setStates((prev) => ({ ...prev, toggle: next ? next : !prev.toggle }));
    };

    useClickAway(ref, () => {
      if (!autoClose) {
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
        <S.WrapperDataDropdown
          toggle={states.toggle}
          maxDataDropdownHeight={maxDataDropdownHeight}
        >
          {dataDropdown}
        </S.WrapperDataDropdown>
      </S.Dropdown>
    );
  }
);

export default Dropdown;
