import { IonContent, IonHeader, IonPage } from "@ionic/react";
import { useEffect, useState } from "react";
import { Service } from "src/domain/types";
import { serviceEntityService } from "src/services/ServiceEntityService";

export const Services = () => {

    const [services, setServices] = useState<Service[] | undefined>(undefined)

    useEffect(() => {
        const getServicesFromAPI = async () => {
            const servicesFromAPI = (await serviceEntityService.getAll()).data
            setServices(servicesFromAPI);
        };
        getServicesFromAPI();
    }, [])

    return (
        <IonPage>
            <IonHeader>
                <h1 className="title">Services</h1>
            </IonHeader>
            <IonContent>
                {services && (
                    services?.map(service  => (
                        <p key={service._id}>{service.name}</p>
                    )))}
                {/* {services} */}
            </IonContent>
        </IonPage>
    )
}