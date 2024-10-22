import { FC, useState } from 'react';
import { TextField } from '../../components/textField';

export const LoginPage: FC = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const loginChangedHandler = (value: string) => {
        setLogin(value);
    }

    const passwordChangedHandler = (value: string) => {
        setPassword(value);
    }

    return (
        <>
            <TextField labelText="aBLeeWeeAN's login" type="text" value={login} onChange={loginChangedHandler} />
            <TextField labelText="aBLeeWeeAN's password" type="password" value={password} onChange={passwordChangedHandler} />
        </>
    );
};
