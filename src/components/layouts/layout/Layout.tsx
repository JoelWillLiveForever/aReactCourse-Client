import { FC } from 'react';
import { LayoutProps } from './LayoutProps';

import { LogoIcon } from '../../../assets/icons/LogoIcon';
import { UserMenu } from '../../userMenu';

import './layoutStyles.scss'
import { useAppSelector } from '../../../hooks/reduxToolkitHooks';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../../store/slices/userSlice';
import { RoutesPaths } from '../../../constants/commonConstants';
import { MenuItem } from '../../userMenu/UserMenuProps';

export const Layout: FC<LayoutProps> = props => {
    const {footer, headerChild, title, children} = props;
    
    const { role } = useAppSelector((state) => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOutHandler = () => {
        dispatch(logOut());
    }

    const goToAdministrationHandler = () => {
        navigate(`/${RoutesPaths.Administration}`);
    }

    const exitMenuItem: MenuItem = {
        id: 'exit',
        action: logOutHandler,
        label: 'Выйти'
    };

    const administrationMenuItem: MenuItem = {
        id: 'go_to_administration',
        action: goToAdministrationHandler,
        label: 'Администрирование'
    };

    return (
        <div className='layout'>
            <div className='layout__header'>
                <div>
                    <LogoIcon />
                </div>
                <div>
                    <div>{title ?? 'База сотрудников'}</div>
                    <div>{headerChild}</div>
                </div>
                <div className='layout__user-menu'>
                    <UserMenu items={role === 'admin' ? [administrationMenuItem, exitMenuItem] : [exitMenuItem]} />
                </div>
            </div>
            <div className='layout__body'>
                {children}
            </div>
            <div>{footer}</div>
        </div>
    );
}
