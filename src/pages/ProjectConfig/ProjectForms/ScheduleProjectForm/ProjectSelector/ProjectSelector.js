import { useEffect } from "react";
import { Icon } from "@iconify/react";
import { AutoCompleteDiv } from "../../styles";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const ProjectSelector = ({
  icon,
  name,
  placeholder,
  options,
  storeSelectedValues,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  let valueLabelpairs = [];
  useEffect(() => {
    for (let i = 0; i < options?.length; i++) {
      valueLabelpairs.push({
        value: options[i].name,
        label: options[i].name,
      });
    }
    console.log(valueLabelpairs);
  }, [options, valueLabelpairs]);

  return (
    <AutoCompleteDiv>
      <label>
        <Icon icon={icon} width='28' />
      </label>
      <Select
        components={makeAnimated()}
        name={name}
        options={valueLabelpairs}
        noOptionsMessage={() => "No options selected :("}
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
