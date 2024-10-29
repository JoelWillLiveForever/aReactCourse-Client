import { FC } from 'react';
import clsx from 'classnames';

import { ButtonProps } from './ButtonProps';
import './buttonStyles.scss';

export const Button: FC<ButtonProps> = props => {
    const {
        className,
        onClick,
        text,
        type
    } = props;

    return (
        <div onClick={onClick} className={clsx('button', className, {
            'button_primary': type === 'primary',
            'button_secondary': type ==='secondary'
        })}>
            {text}
        </div>
    );
}
