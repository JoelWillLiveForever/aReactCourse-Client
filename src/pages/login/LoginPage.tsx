import { FC, useEffect, useState } from 'react';

import { TextField } from '../../components/textField';
import { Button } from '../../components/button';
import { WidgetLayout } from '../../components/layouts';

import './loginPageStyles.scss';

import { useNavigate } from 'react-router-dom';
import { RoutesPaths } from '../../constants/commonConstants';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxToolkitHooks';

// import { AuthApi } from '../../api';
import { signIn } from '../../services';

export const LoginPage: FC = () => {
    const { accessToken, role } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();

    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const navigate = useNavigate();

    // const { signIn } = AuthApi;
    useEffect(() => {
        if (accessToken) {
            if (role === 'user' || !role) {
                navigate(`/${RoutesPaths.NoPermissions}`);
            } else {
                navigate(`/${RoutesPaths.Departments}`);
            }
        }
    }, [accessToken, role, navigate]);

    const loginChangedHandler = (value: string) => {
        setLogin(value);
    }

    const passwordChangedHandler = (value: string) => {
        setPassword(value);
    }

    const loginHandler = () => {
        dispatch(signIn({login, password}));
        // signIn({login, password})
        //     .then(respData => {
        //         if (respData.role === 'user') {
        //             navigate(`/${RoutesPaths.NoPermissions}`);
        //         } else {
        //             navigate(`/${RoutesPaths.Departments}`);
        //         }
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
    }

    const toRegistrationHandler = () => {
        navigate(RoutesPaths.Registration);
    }

    return (
        <WidgetLayout>
            <div className='login-page__form'>
                <h3 className='login-page__title'>Вход</h3>
                <div className='login-page__fields'>
                    <TextField labelText="Логин" type="text" value={login} onChange={loginChangedHandler} />
                    <TextField labelText="Пароль" type="password" value={password} onChange={passwordChangedHandler} />
                </div>
                <div className='login-page__actions'>
                    <Button text="Войти" onClick={loginHandler} type='primary' />
                    <Button text="Зарегестрироваться" onClick={toRegistrationHandler} type='secondary' />
                </div>
            </div>
        </WidgetLayout>
    );
};
