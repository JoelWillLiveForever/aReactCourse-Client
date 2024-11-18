import { AccessTokenKey } from "../constants/commonConstants";
import { AxiosInstance } from "./AxiosInstance";

import { DownloadFileResponseDto, UploadFileResponseDto } from "../types/apiTypes";

export const FilesApi = () => {
    const token = sessionStorage.getItem(AccessTokenKey) ?? '';

    const { axiosBlob, axiosDelete, axiosPost} = AxiosInstance(token);

    const uploadFile = async(uploadFileData: UploadFileResponseDto) => 
        await axiosPost('/Files/upload', uploadFileData) as void;

    const downloadFile = async(downloadFileData: DownloadFileResponseDto) => 
        await axiosBlob('/Files/download', downloadFileData);

    const deleteFile = async(id: string | number) => 
        await axiosDelete(`/Files/delete?id=${id}`) as void;

    return {
        uploadFile,
        downloadFile,
        deleteFile
    };
}



