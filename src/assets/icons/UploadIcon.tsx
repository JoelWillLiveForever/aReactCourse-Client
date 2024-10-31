import { FC } from 'react';
import { IconProps } from '../../types/commonTypes';

export const UploadIcon: FC<IconProps> = props => {
    const {
        className,
        color = '#555555',
        height = 32,
        width = 32,
        onClick
    } = props;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 -960 960 960" width={width} fill={color} className={className} onClick={onClick} xmlSpace='preserve' xmlnsXlink="http://www.w3.org/1999/xlink">
            <path d="M440-200h80v-167l64 64 56-57-160-160-160 160 57 56 63-63v167ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/>
        </svg>
    );
}