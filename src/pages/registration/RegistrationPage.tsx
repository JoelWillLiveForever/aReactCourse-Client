import { FC, useState } from 'react';

import { TextField } from '../../components/textField';
import { Button } from '../../components/button';
import { WidgetLayout } from '../../components/layouts';

import './registrationPageStyles.scss';

import { useNavigate } from 'react-router-dom';
import { RoutesPaths } from '../../constants/commonConstants';
import { AuthApi } from '../../api';
import { AxiosError } from 'axios';

type FormFieldsNames = 'login' | 'password' | 'repeatePassword' | 'lastName' | 'firstName' | 'midName';

interface RegistrationForm {
    login: string;
    password: string;
    repeatePassword: string;
    // lastName: string;
    // firstName: string;
    // midName?: string;
}

export const RegistrationPage: FC = () => {

    const [formFields, setFormFields] = useState<RegistrationForm>();

    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState<string>();
    const { signUp, signIn } = AuthApi();

    const changeFieldValue = (value: string | undefined, fieldName: FormFieldsNames) => {
        setFormFields(prev => {
            return {
                ...prev,
                [fieldName]: value,
            } as RegistrationForm;
        })
    };

    const registrationHandler = () => {
        // navigate(RoutesPaths.Departments);
        if (!formFields?.login || !formFields?.password) {
            setErrorMessage('Не задан логин или пароль!');
            return;
        }

        if(formFields?.password !== formFields?.repeatePassword) {
            setErrorMessage('Пароль и повторенный пароль не совпадают!');
            return;
        }

        const data = {login: formFields.login, password: formFields.password};

        signUp(data).then(() => {
            signIn(data).then(respData => {
                if (respData.role === 'user') {
                    navigate(`/${RoutesPaths.NoPermissions}`);
                } else {
                    navigate(`/${RoutesPaths.Departments}`);
                }
            }).catch(err =>
                setErrorMessage((err as AxiosError)?.message)
            );
        }).catch((err) => {
            setErrorMessage((err as AxiosError)?.message);
        });

        // signUp({
        //     login: formFields.login,
        //     password: formFields.password,
        // }).then(() => {
        //     navigate(RoutesPaths.Departments);
        // }).catch((error) => {
        //     setErrorMessage((error as AxiosError)?.message);
        // });

        // clear form fields
        // navigate(RoutesPaths.Login); // navigate to login page after successful registration and clear form fields
    }

    const goToLogin = () => {
        navigate(RoutesPaths.Login);
    }

    return (
        <WidgetLayout>
            <div className='reg-page__form'>
                <h3 className='reg-page__title'>Регистрация</h3>
                <div className='reg-page__fields'>
                    <TextField labelText="Логин" type="text" value={formFields?.login} onChange={(value) => changeFieldValue(value, 'login')} />
                    <TextField labelText="Пароль" type="password" value={formFields?.password} onChange={(value) => changeFieldValue(value, 'password')} />
                    <TextField labelText="Повторите пароль" type="password" value={formFields?.repeatePassword} onChange={(value) => changeFieldValue(value, 'repeatePassword')} />
                    
                    {/* <TextField labelText="Фамилия" type="text" value={formFields?.lastName} onChange={(value) => changeFieldValue(value, 'login')} />
                    <TextField labelText="Имя" type="text" value={formFields?.firstName} onChange={(value) => changeFieldValue(value, 'login')} />
                    <TextField labelText="Отчество" type="text" value={formFields?.midName} onChange={(value) => changeFieldValue(value, 'login')} /> */}

                    {errorMessage && (<span style={{color: 'red'}}>{errorMessage}</span>)}
                </div>
                <div className='reg-page__actions'>
                    <Button text="Зарегестрироваться" onClick={registrationHandler} type='primary' />
                    <Button text="Войти" onClick={goToLogin} type='secondary' />
                </div>
            </div>
        </WidgetLayout>
    );
};

