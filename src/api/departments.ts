import { AxiosInstance } from './AxiosInstance';
import { AccessTokenKey } from '../constants/commonConstants';

import { AddDepartmentResponseDto, EditDepartmentResponseDto } from '../types/apiTypes';
import { Department } from '../types/models';

export const DepartmentsApi = () => {
    const token = sessionStorage.getItem(AccessTokenKey) ?? '';

    const { axiosDelete, axiosGet, axiosPut, axiosPost } = AxiosInstance(token);

    const getDepartments = async() =>
        await axiosGet('/Departments') as Array<Department>;

    const addDepartment = async(addDepartmentData: AddDepartmentResponseDto) =>
        await axiosPost('/Departments/department', addDepartmentData) as number;

    const editDepartment = async(editDepartmentData: EditDepartmentResponseDto) =>
        await axiosPut('/Departments/department', editDepartmentData) as void;

    const deleteDepartment = async(id: string | number) =>
        await axiosDelete(`/Departments/department?id=${id}`) as void;

    return {
        addDepartment,
        deleteDepartment,
        editDepartment,
        getDepartments
    }
}

