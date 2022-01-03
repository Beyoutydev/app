import { IonBadge, IonButton, IonContent, IonHeader, IonInput, IonPage, useIonRouter } from "@ionic/react";
import { useForm } from "react-hook-form";
import { authService } from "src/services/AuthService";
import { translationService } from "src/services/TranslationService";

interface ILoginForm {
    email: string;
    password: string;
}

export const Login = () => {
    const router = useIonRouter();
    const initialFormValues = {
        email: '',
        password: '',
    }
    const { 
        register,
        handleSubmit, 
        formState: { errors },
    } = useForm<ILoginForm>({defaultValues: initialFormValues});

    const onSubmit = async (formValues: ILoginForm) => {
        try {
            await authService.login(formValues);
            router.push('/tab1')
        } catch (error) {
        }
    }

    return (
        <IonPage>
            <IonHeader>
                <h1 className="title">{translationService.translate('login-page_title')}</h1>
            </IonHeader>
            <IonContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <IonInput 
                        {...register('email') as any} 
                        placeholder={translationService.translate('login-page_email-label')}
                        required
                        type="text" 
                    />
                    { errors.email && (
                        <IonBadge color="danger">{errors.email.message}</IonBadge> 
                    )}
                    <IonInput 
                        {...register('password') as any}
                        placeholder={translationService.translate('login-page_password-label')}
                        required
                        type="password"
                    />
                    { errors.password && (
                        <IonBadge color="danger">{errors.password.message}</IonBadge>
                    )}
                    <IonButton type="submit">
                        {translationService.translate('login-page_login-button')}
                    </IonButton>
                </form>
            </IonContent>
        </IonPage>
    )
}