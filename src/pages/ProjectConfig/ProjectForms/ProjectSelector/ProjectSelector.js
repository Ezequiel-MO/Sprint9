import { Icon } from "@iconify/react";
import { AutoCompleteDiv } from "../styles";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import ProjectSelectorLogic from "./ProjectSelectorLogic";

const ProjectSelector = ({
  icon,
  name,
  placeholder,
  options,
  storeSelectedValues,
  value,
}) => {
  const { valueLabels } = ProjectSelectorLogic(options);
  return (
    <AutoCompleteDiv>
      <label>
        <Icon icon={icon} width='28' />
      </label>
      <Select
        components={makeAnimated()}
        name={name}
        value={value}
        options={valueLabels}
        noOptionsMessage={() => "No options left to select :("}
        placeholder={placeholder}
        isSearchable
        isClearable
        isMulti
        onChange={storeSelectedValues}
      />
    </AutoCompleteDiv>
  );
};

export default ProjectSelector;
