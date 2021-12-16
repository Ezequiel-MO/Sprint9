import { useEffect, useState } from "react";
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
  const [valueLabels, setValueLabels] = useState([]);

  useEffect(() => {
    const newValueLabels = options?.map((option) => {
      return { value: option.name, label: option.name };
    });
    setValueLabels(newValueLabels);
  }, [options]);

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
