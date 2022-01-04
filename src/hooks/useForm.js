import { useState } from "react";

const useForm = (initState) => {
  const [formData, setFormData] = useState(initState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => setFormData({ ...initState });

  return { ...formData, formData, handleChange, resetForm };
};

export default useForm;
