import { AccessTokenKey } from "../constants/commonConstants";
import { AxiosInstance } from "./AxiosInstance";

import { DownloadFileResponseDto, UploadFileResponseDto } from "../types/apiTypes";

const { axiosDelete, axiosPost } = AxiosInstance(sessionStorage.getItem(AccessTokenKey) ?? '');

const uploadFile = async(uploadFileData: UploadFileResponseDto) =>
    await axiosPost('/Files/upload', uploadFileData) as void;

const downloadFile = async(addEmployeeData: DownloadFileResponseDto) =>
    await axiosPost('/Files/download', addEmployeeData) as Blob;

const deleteFile = async(id: string | number) =>
    await axiosDelete(`/Files/delete?id=${id}`) as void;

export const FileApi = {
    uploadFile,
    downloadFile,
    deleteFile
}



