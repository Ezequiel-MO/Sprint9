import { useHistory } from "react-router-dom";

const DashboardCardLogic = (slug) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`${slug}`);
  };
  return { handleClick };
};

export default DashboardCardLogic;
