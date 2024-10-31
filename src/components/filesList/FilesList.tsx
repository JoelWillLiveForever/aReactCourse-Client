import { FC, useState } from 'react';
import clsx from 'classnames';

import { FilesListProps } from './FilesListProps';
import './filesListStyles.scss';

import { DownloadIcon, TrashIcon } from '../../assets/icons';

export const FilesList: FC<FilesListProps> = props => {
    const { 
        filesList,
        onFileDelete,
        onFileDownload
    } = props;

    const downloadHandler = (id: number) => {
        onFileDownload && onFileDownload(id);
    }

    const deleteHandler = (id: number) => {
        onFileDelete && onFileDelete(id);
    }

    return (
        <div className='files-list'>
            { filesList.map(file => {
                return (
                    <div key={file.id} className='files-list__item'>
                            <div>
                                {file.displayName}
                            </div>
                            <div className='files-list__item-actions'>
                                <DownloadIcon width={16} height={16} onClick={() => {downloadHandler(file.id)}} />
                                <TrashIcon width={16} height={16} onClick={() => {deleteHandler(file.id)}} />
                            </div>
                    </div>
                );
            })}
        </div>
    );
}
