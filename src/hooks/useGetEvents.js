import { useAxiosFetch } from "./useAxiosFetch";
import { useEffect, useState } from "react";
import { baseURL } from "../api/axios";

const useGetEvents = () => {
  const [eventOptions, setEventOptions] = useState([]);
  const {
    data: { events: eventData },
  } = useAxiosFetch(`${baseURL}/events`);
  useEffect(() => {
    setEventOptions(eventData);
  }, [eventData]);

  return { eventOptions };
};

export default useGetEvents;
