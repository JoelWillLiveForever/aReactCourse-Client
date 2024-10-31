import { FC } from 'react';
import { IconProps } from '../../types/commonTypes';

export const PlusIcon: FC<IconProps> = props => {
    const {
        className,
        color = '#313131',
        height = 24,
        width = 24,
        onClick
    } = props;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 -960 960 960" width={width} fill={color} className={className} onClick={onClick} xmlSpace='preserve' xmlnsXlink="http://www.w3.org/1999/xlink">
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
        </svg>
    );
}
