import { useEffect } from "react";
import { Icon } from "@iconify/react";
import { AutoCompleteDiv } from "../styles";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const ProjectSelector = ({
  icon,
  name,
  placeholder,
  options,
  storeSelectedValues,
}) => {
  let valueLabels = [];
  useEffect(() => {
    for (let i = 0; i < options?.length; i++) {
      valueLabels.push({
        value: options[i].name,
        label: options[i].name,
      });
    }
    console.log(valueLabels);
  }, [options, valueLabels]);

  return (
    <AutoCompleteDiv>
      <label>
        <Icon icon={icon} width='28' />
      </label>
      <Select
        components={makeAnimated()}
        name={name}
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
