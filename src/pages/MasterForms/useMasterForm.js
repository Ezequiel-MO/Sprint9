import { useState, useEffect } from "react";
import { baseAPI } from "../../api/axios";
import useGetVendors from "../../hooks/useGetVendor";
import { checkForDuplicates } from "../ProjectConfig/utils/utils";

const useMasterForm = (fileInput, cat) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [textContent, setTextContent] = useState([]);
  const [introduction, setIntroduction] = useState([]);
  const [typeOfVendor, setTypeOfVendor] = useState({});
  const [coords, setCoords] = useState({
    latitude: "",
    longitude: "",
  });

  const { vendorOptions } = useGetVendors(cat);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTypeOfVendor({ ...typeOfVendor, [name]: value });
  };

  const handleCoordsChange = (e) => {
    const { name, value } = e.target;
    setCoords({ ...coords, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const stringifiedChecked = JSON.stringify(checked);
    setTypeOfVendor({ ...typeOfVendor, [name]: stringifiedChecked });
  };

  const handleTextIntroduction = (e) => {
    setIntroduction([e.target.value]);
  };

  const handleTextDescription = (e) => {
    setTextContent([e.target.value]);
  };

  useEffect(() => {
    const formData = new FormData();

    for (const key in typeOfVendor) {
      formData.append(key, typeOfVendor[key]);
    }
    formData.append("textContent", JSON.stringify(textContent));
    formData.append("introduction", JSON.stringify(introduction));
    const coordsArray = Object.values(coords);
    formData.append("coordinates", JSON.stringify(coordsArray));
    for (let i = 0; i < fileInput.current.files.length; i++) {
      formData.append("images", fileInput.current.files[i]);
    }
    if (formIsValid) {
      baseAPI
        .post(`/${cat}`, formData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  }, [formIsValid]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const vendorOptionNames = vendorOptions?.map((vendor) => vendor.name);
    const codeIsDuplicated = checkForDuplicates(
      typeOfVendor["name"],
      vendorOptionNames
    );
    if (codeIsDuplicated) {
      alert("Duplicate Vendor");
    } else {
      setFormIsValid(!codeIsDuplicated);
    }
  };

  return {
    handleChange,
    handleSubmit,
    handleTextIntroduction,
    handleTextDescription,
    handleCheckboxChange,
    handleCoordsChange,
    typeOfVendor,
    introduction,
    textContent,
  };
};

export default useMasterForm;
