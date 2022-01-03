import { IonBadge, IonButton, IonContent, IonHeader, IonInput, IonPage, useIonRouter } from "@ionic/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { authService } from "src/services/AuthService";
import { translationService } from "src/services/TranslationService";
import { IRegisterForm } from "../types";
import './Register.scss'

export const Register = () => {
    const router = useIonRouter();
    const initialFormValues = {
        name: '',
        surname: '',
        email: '',
        password: '',
        passwordRepeat: '',
        birthDate: '',
        address: ''
    }
    const { 
        register,
        handleSubmit, 
        getValues,
        formState: { errors },
      } = useForm<IRegisterForm>({defaultValues: initialFormValues});

    const validatePasswords = (): string | boolean => {
    const {password, passwordRepeat} = getValues();
    if (password !== passwordRepeat) {
        return translationService.translate('register-page_passwords-not-equal');
    }
    return true;
    };

    const onSubmit = async (formValues: IRegisterForm) => {
        try {
            const { birthDate , passwordRepeat, ...values } = formValues;
            const parsedForm = {...values, birthDate: new Date(birthDate).toISOString()} 
            await authService.registerUser(parsedForm)
            router.push('/')
        } catch (error) {
            
        }

    }

    useEffect(() => {
        register('password', {
          validate: validatePasswords,
        });
        register('passwordRepeat', {
          validate: validatePasswords,
        });
      }, [register]);

      return (
        <IonPage>
            <IonHeader>
                <h1 className="title">{translationService.translate('register-page_title')}</h1>
            </IonHeader>
            <IonContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <IonInput 
                        {...register('name') as any} 
                        placeholder={translationService.translate('register-page_name-label')}
                        required
                        type="text" 
                    />
                    { errors.name && (
                        <IonBadge color="danger">{errors.name.message}</IonBadge> 
                    )}
                    <IonInput 
                        {...register('surname') as any}
                        placeholder={translationService.translate('register-page_surname-label')}
                        required
                        type="text"
                    />
                    { errors.surname && (
                        <IonBadge color="danger">{errors.surname.message}</IonBadge>
                    )}
                    <IonInput 
                        {...register('email') as any} 
                        placeholder={translationService.translate('register-page_email-label')}
                        required
                        type="email"
                    />
                    { errors.email && <IonBadge color="danger">{errors.email.message}</IonBadge> }

                    <IonInput 
                        {...register('password') as any}
                        placeholder={translationService.translate('register-page_password-label')}
                        required
                        type="password"
                    />
                    { (errors.password || errors.passwordRepeat) && (
                        <IonBadge color="danger">{errors?.password?.message}</IonBadge> 
                    )}
                    <IonInput 
                        {...register('passwordRepeat') as any}
                        placeholder={translationService.translate('register-page_password-repeat-label')}
                        required
                        type="password"
                    />
                    { (errors.password || errors.passwordRepeat)  && (
                        <IonBadge color="danger">{errors?.passwordRepeat?.message}</IonBadge>
                    )}
                    <IonInput 
                        {...register('birthDate') as any}
                        placeholder={translationService.translate('register-page_birthdate-label')}
                        required
                        type="date"
                        onChange={(date: string) => date.replaceAll('-', '/')}
                    />
                    { errors.birthDate && (
                        <IonBadge color="danger">{errors.birthDate.message}</IonBadge>
                    )}
                    <IonInput 
                        {...register('address') as any}
                        placeholder={translationService.translate('register-page_address-label')}
                        required
                        type="text"
                    />
                    { errors.address && <IonBadge color="danger">{errors.address.message}</IonBadge> }
                    <IonButton type="submit">
                    {translationService.translate('register-page_register-button')}
                    </IonButton>
                </form>
            </IonContent>
        </IonPage>
    )
} 