import { FC } from "react";
import clsx from 'classnames';

import { DialogProps } from './DialogProps';
import './dialogStyles.scss';

import { Button } from '../button';

export const Dialog: FC<DialogProps> = props => {
    const { 
        title,
        className,
        onCancel,
        onSave,
        open = false,
        children
    } = props;

    if (!open) {
        return null;
    }

    return (
        <div className="dialog" onClick={onCancel}>
            <div className={clsx('dialog__paper', className)} onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
            }}>
                <h4 className="dialog__header">
                    {title}
                </h4>
                <div className="dialog__body">
                    {children}
                </div>
                <div className="dialog__footer">
                    <Button text="Сохранить" type="primary" onClick={onSave} />
                    <Button text="Отмена" onClick={onCancel} />
                </div>
            </div>
        </div>
    );
}
