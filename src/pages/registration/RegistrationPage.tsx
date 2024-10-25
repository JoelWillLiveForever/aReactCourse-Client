import { FC, useState } from 'react';

import { TextField } from '../../components/textField';
import { Button } from '../../components/button';
import { WidgetLayout } from '../../components/layouts';

import './registrationPageStyles.scss';

import { useNavigate } from 'react-router-dom';
import { RoutesPaths } from '../../constants/commonConstants';

type FormFieldsNames = 'login' | 'password' | 'repeatePassword' | 'lastName' | 'firstName' | 'midName';

interface RegistrationForm {
    login: string;
    password: string;
    repeatePassword: string;
    lastName: string;
    firstName: string;
    midName?: string;
}

export const RegistrationPage: FC = () => {

    const [formFileds, setFormFields] = useState<RegistrationForm>();

    const navigate = useNavigate();

    const changeFieldValue = (value: string | undefined, fieldName: FormFieldsNames) => {
        setFormFields(prev => {
            return {
                ...prev,
                [fieldName]: value,
            } as RegistrationForm;
        })
    };

    const registrationHandler = () => {
        navigate(RoutesPaths.Departments);
    }

    const goToLogin = () => {
        navigate(RoutesPaths.Login);
    }

    return (
        <WidgetLayout>
            <div className='reg-page__form'>
                <h3 className='reg-page__title'>Вход</h3>
                <div className='reg-page__fields'>
                    <TextField labelText="Логин" type="text" value={formFileds?.login} onChange={(value) => changeFieldValue(value, 'login')} />
                    <TextField labelText="Пароль" type="password" value={formFileds?.password} onChange={(value) => changeFieldValue(value, 'login')} />
                    <TextField labelText="Повторите пароль" type="password" value={formFileds?.repeatePassword} onChange={(value) => changeFieldValue(value, 'login')} />
                    <TextField labelText="Фамилия" type="text" value={formFileds?.lastName} onChange={(value) => changeFieldValue(value, 'login')} />
                    <TextField labelText="Имя" type="text" value={formFileds?.firstName} onChange={(value) => changeFieldValue(value, 'login')} />
                    <TextField labelText="Отчество" type="text" value={formFileds?.midName} onChange={(value) => changeFieldValue(value, 'login')} />
                </div>
                <div className='reg-page__actions'>
                    <Button text="Зарегестрироваться" onClick={registrationHandler} type='primary' />
                    <Button text="Войти" onClick={goToLogin} type='secondary' />
                </div>
            </div>
        </WidgetLayout>
    );
};

