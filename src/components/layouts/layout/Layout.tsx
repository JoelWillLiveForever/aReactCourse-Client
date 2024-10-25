import { FC } from 'react';
import { LayoutProps } from './LayoutProps';

import { LogoIcon } from '../../../assets/icons/LogoIcon';

import './layoutStyles.scss'

export const Layout: FC<LayoutProps> = props => {
    const {footer, headerChild, title, children} = props;

    return (
        <div className='layout'>
            <div className='layout__header'>
                <div>
                    <LogoIcon />
                </div>
                <div>
                    <div>{title ?? 'Heder'}</div>
                    <div>{headerChild}</div>
                </div>
                <div></div>
            </div>
            <div className='layout__body'>
                {children}
            </div>
            <div>{footer}</div>
        </div>
    );
}