import { IonBadge, IonButton, IonContent, IonHeader, IonInput, IonPage, IonSelect, IonSelectOption } from "@ionic/react";
import { useForm } from "react-hook-form"
import { SERVICE_CATEGORY } from "src/domain/enums";
import { serviceEntityService } from "src/services/ServiceEntityService";
import { translationService } from "src/services/TranslationService";
import { IServiceForm } from "src/types";

export const Service = () => {
    const initialFormValues = {
        name: '',
        category: undefined,
        location: '',
        startDate: '',
        endDate: '',
        duration: undefined,
        price: undefined,
        description: '',
        qualifications: [],
        schedules: [],
    }
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<IServiceForm>({defaultValues: initialFormValues});

    const onSubmit = async (formValues: IServiceForm) => {
        try {
            serviceEntityService.create(formValues);
        } catch (error) {
        }
    }
    return (
        <IonPage>
            <IonHeader>
                <h1 className="title">{translationService.translate('service-page_title')}</h1>
            </IonHeader>
            <IonContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <IonInput
                        {...register('name') as any} 
                        placeholder={translationService.translate('service-page_name-label')}
                        required
                        type="text" 
                    />
                    { errors.name && (
                        <IonBadge color="danger">{errors.name.message}</IonBadge> 
                    )}
                    <IonSelect
                        {...register('category') as any}
                        placeholder={translationService.translate('service-page_category-label')}
                        required
                    >
                        {Object.values(SERVICE_CATEGORY).map(category => (
                            <IonSelectOption key={category} value={category}>
                                {translationService.translate(category)}
                            </IonSelectOption>
                        ))}
                    </IonSelect>
                    { errors.category && (
                        <IonBadge color="danger">{errors.category.message}</IonBadge>
                    )}
                    <IonInput
                        {...register('location') as any}
                        placeholder={translationService.translate('service-page_location-label')}
                        required
                        type="string"
                    />
                    { errors.location && (
                        <IonBadge color="danger">{errors.location.message}</IonBadge>
                    )}
                    <IonInput
                        {...register('price') as any}
                        placeholder={translationService.translate('service-page_price-label')}
                        required
                        type="number"
                    />
                    { errors.price && (
                        <IonBadge color="danger">{errors.price.message}</IonBadge>
                    )}
                    <IonInput
                        {...register('startDate') as any}
                        placeholder={translationService.translate('service-page_startDate-label')}
                        required
                        type="date"
                        onChange={(date: string) => date.replaceAll('-', '/')}
                    />
                    { errors.startDate && (
                        <IonBadge color="danger">{errors.startDate.message}</IonBadge> 
                    )}
                    <IonInput 
                        {...register('endDate') as any} 
                        placeholder={translationService.translate('service-page_endDate-label')}
                        required
                        type="date"
                        onChange={(date: string) => date.replaceAll('-', '/')}
                    />
                    { errors.endDate && (
                        <IonBadge color="danger">{errors.endDate.message}</IonBadge> 
                    )}
                    <IonInput 
                        {...register('duration') as any} 
                        placeholder={translationService.translate('service-page_duration-label')}
                        required
                        type="time"
                        onChange={(date: string) => date.replaceAll('-', '/')}
                    />
                    { errors.duration && (
                        <IonBadge color="danger">{errors.duration.message}</IonBadge> 
                    )}
                    <IonInput 
                        {...register('description') as any} 
                        placeholder={translationService.translate('service-page_description-label')}
                        required
                        type="text"
                        />
                    { errors.description && (
                        <IonBadge color="danger">{errors.description.message}</IonBadge> 
                    )}
                    <IonButton type="submit">
                        {translationService.translate('service-page_create-button')}
                    </IonButton>
                </form>
            </IonContent>
        </IonPage>
    )
}