import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { AutoCompleteForm } from "../../styles";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const DailyEventsProjectForm = ({
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
    console.log("value label pairs=>", valueLabelpairs);
  }, [options, valueLabelpairs]);

  return (
    <AutoCompleteForm onSubmit={handleSubmit}>
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
      <input type='submit' value='Add to your Day' />
    </AutoCompleteForm>
  );
};

export default DailyEventsProjectForm;
