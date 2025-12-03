import { useEffect, useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import Loader from "../components/UI/Loader/Loader";
import type { IService } from "../utils/interfaces";
import { getAllServices } from "../api/service";
import { useAppDispatch } from "../storage/hooks";
import { setAlertAC } from "../storage/alertSlice";

const ServicesPage = () => {
  const [services, setServices] = useState<IService[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const getServices = async () => {
    setIsLoading(true);
    try {
      const response = await getAllServices({});
      setServices(response);
    } catch (error) {
      dispatch(setAlertAC({ mode: 'error', text: 'Failed to load services.' }));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <MainLayout>
      <h1>Services Page</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {services.map((service) => (
            <li key={service.id}>{service.title}</li>
          ))}
        </ul>
      )}
    </MainLayout>
  );
};

export default ServicesPage;
