import { ChangeEvent, FC } from "react";
import clsx from 'classnames';

import { DropDownProps } from './DropDownProps';

import './dropDownStyles.scss';

export const DropDown: FC<DropDownProps> = props => {
    const { items, label, lblWeight, selectedChanged, className } = props;

    const selectedChangedHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        selectedChanged && selectedChanged(event.target.value);
    }

    return (
        <div className={clsx('drop-down', className)}>
            {!!label && (
                <label className={clsx('drop-down__lbl', {
                    'drop-down__lbl_strong': lblWeight==='strong'
                })}>
                    {label}
                </label>
            )}
            <select className="drop-down__select" onChange={selectedChangedHandler}>
                {items.map((item, idx) => {
                    return (
                        <option key={idx} value={item.value}>{item.text}</option>
                    );
                })}   
            </select>
        </div>
    );
}
