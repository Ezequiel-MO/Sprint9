import { useState, useEffect } from "react";

const useComputeTotalDays = (project) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalDays, setTotalDays] = useState(0);

  useEffect(() => {
    //update the state with the data extracted from the database
    if (project) {
      setStartDate(project.arrivalDay);
      setEndDate(project.departureDay);
    }
  }, [project]);

  useEffect(() => {
    //compute days between start and end date
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    setTotalDays(diffDays);
  }, [startDate, endDate]);

  return { totalDays };
};

export default useComputeTotalDays;
