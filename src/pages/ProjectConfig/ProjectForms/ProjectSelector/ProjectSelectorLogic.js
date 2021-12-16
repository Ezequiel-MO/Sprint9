import { useEffect, useState } from "react";

const ProjectSelectorLogic = (options) => {
  const [valueLabels, setValueLabels] = useState([]);

  useEffect(() => {
    const newValueLabels = options?.map((option) => {
      return { value: option.name, label: option.name };
    });
    setValueLabels(newValueLabels);
  }, [options]);
  return { valueLabels };
};

export default ProjectSelectorLogic;
