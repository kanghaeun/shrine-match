import { useState } from "react";
import styled from "styled-components";
import colors from "../styles/color";
import arrow_down from "../assets/arrow_down.png";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("한국어");

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <DropdownWrapper>
      <SelectedOption onClick={toggleDropdown}>
        {selectedOption}
        <DropdownIcon src={arrow_down} alt="dropdown" />
      </SelectedOption>
      {isOpen && (
        <OptionsList>
          {["한국어", "English", "日本語"].map((option, index) => (
            <Option
              key={index}
              onClick={() => selectOption(option)}
              role="button"
            >
              {option}
            </Option>
          ))}
        </OptionsList>
      )}
    </DropdownWrapper>
  );
}

export default Dropdown;

const DropdownWrapper = styled.div`
  position: relative;
  width: 120px;
`;

const SelectedOption = styled.div`
  padding: 10px;
  background-color: white;
  color: ${colors.button};
  border: 2px solid ${colors.button};
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropdownIcon = styled.img`
  height: 8px;
`;

const OptionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  background-color: white;
  border: 2px solid ${colors.button};
  border-radius: 5px;
  list-style: none;
  z-index: 10;
`;

const Option = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;
  color: ${colors.button};
  cursor: pointer;
  border-bottom: 1px solid ${colors.button};

  &:hover,
  ${({ isSelected }) =>
      isSelected &&
      `
    background-color: ${colors.button};
    border-bottom: 1px solid ${colors.button};
    color: white;
  `}
    &:last-child {
    border-bottom: none;
  }
`;
