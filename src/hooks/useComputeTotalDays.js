import { useState, useEffect } from "react";

const useComputeTotalDays = (project) => {
  const [totalDays, setTotalDays] = useState(0);

  useEffect(() => {
    if (project) {
      const start = new Date(project.arrivalDay);
      const end = new Date(project.departureDay);
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
      setTotalDays(diffDays);
    }
  }, [project]);

  return { totalDays };
};

export default useComputeTotalDays;
