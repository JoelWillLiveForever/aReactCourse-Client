import { FC, useEffect, useState } from 'react';

import { Layout } from '../../components/layouts';
import { Button, Dialog, DropDown, EmployeesList, TextField } from '../../components/';

import './departmentsPageStyles.scss'

import { Employee, Department } from '../../types/models';
import { DropDownItem } from '../../components/dropDown/DropDownProps';

const fakeEmployeesData = [
    { id: 1, lastName: 'Иванов', firstName: 'Иван', midleName: 'Иванович', birthDate: new Date().toISOString(), email: 'ivanov@gmail.com', phoneNumber: '8-800-535-35-35'},
    { id: 2, lastName: 'Петров', firstName: 'Сергей', midleName: 'Дмитриевич', birthDate: new Date().toISOString(), email: 'petrovv@gmail.com', phoneNumber: '8-800-535-35-36' },
    { id: 3, lastName: 'Сильверхэнд', firstName: 'Джонни', birthDate: new Date().toISOString(), email: 'silverhand@gmail.com', phoneNumber: '8-800-535-35-37' },
    { id: 4, lastName: 'Рябчикова', firstName: 'Лидия', midleName: 'Анатольевна', birthDate: new Date().toISOString(), email: 'ryabchikova@gmail.com', phoneNumber: '8-800-535-35-38' },
    { id: 5, lastName: 'Семенов', firstName: 'Олег', midleName: 'Артемович', birthDate: new Date().toISOString(), email: 'semenov@gmail.com', phoneNumber: '8-800-535-35-39' },
] as Array<Employee>;

const fakeDepartmentsData = [
    {
        id: 1, name: 'Отдел 1', employees: []
    },
    {
        id: 2, name: 'Отдел 2', employees: fakeEmployeesData
    },
    {
        id: 3, name: 'Отдел 3', employees: []
    },
] as Array<Department>;

export const DepartmentsPage: FC = () => {
    const [departmentData, setDepartmentData] = useState<Array<Department>>([]);
    const [employeesData, setEmployeesData] = useState<Array<Employee>>([]);
    
    const [selectedDepartmentId, setSelectedDepartmentId] = useState<number>();

    const [selectedEmployeeId, setSelectedEmployeeId] = useState<number>();
    const [showEmployeeDialog, setShowEmployeeDialog] = useState(false);
    const [userActionMode, setUserActionMode] = useState<'create' | 'edit'>('create');
    const [userToEdit, setUserToEdit] = useState(0);

    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [midleName, setMidleName] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setDepartmentData(fakeDepartmentsData);
            if (Array.isArray(fakeDepartmentsData) && fakeDepartmentsData.length) {
                setEmployeesData(fakeDepartmentsData[0].employees);
            }
        }, 500);
    }, []);

    useEffect(() => {
        const selectedDepartment = departmentData.find(d => d.id === selectedDepartmentId);
        setEmployeesData(selectedDepartment ? selectedDepartment.employees : []);
        setSelectedEmployeeId(undefined);
    }, [departmentData, selectedDepartmentId]);

    useEffect(() => {
        setEmployeesData(fakeEmployeesData);
    }, []);

    useEffect(() => {
        clearEmployeeDialogFields();

        if (userActionMode === 'edit') {
            const employee = userActionMode === 'edit'
                ? employeesData.find(e => e.id === userToEdit)
                : undefined;

            setLastName(employee?.lastName ?? '');
            setFirstName(employee?.firstName ?? '');
            setMidleName(employee?.midleName ?? '');
        }
    }, [employeesData, userActionMode, userToEdit]);

    const clearEmployeeDialogFields = () => {
        setLastName('');
        setFirstName('');
        setMidleName('');
    }

    const createEmployeeHandler = () => {
        setUserActionMode('create');
        setShowEmployeeDialog(true);
    }

    const editEmployeeHandler = (id: number) => {
        setUserActionMode('edit');
        setUserToEdit(id);
        setShowEmployeeDialog(true);
    }

    const userDialogContentRenderer = () => {
        return (
            <>
                <TextField labelText='Фамилия' value={lastName} onChange={(val) => setLastName(val)} />
                <TextField labelText='Имя' value={firstName} onChange={(val) => setFirstName(val)} />
                <TextField labelText='Отчество' value={midleName} onChange={(val) => setMidleName(val)} />
            </>
        );
    }

    const closeEmployeeDialogHandler = () => {
        setShowEmployeeDialog(false);
        clearEmployeeDialogFields();
    }

    const departmentChangedHandler = (id?: string) => {
        const _id: number | undefined = !id ? undefined : +id;
        setSelectedDepartmentId(_id);
    }

    const onEmployeeSelectedHandler = (id: number) => {
        setSelectedEmployeeId(id);
    }

    return (
        <Layout>
            <Dialog title={userActionMode !== 'edit' ? 'Добавить сотрудника' : 'Изменить сотрудника'}
                open={showEmployeeDialog}
                onSave={() => {}}
                onCancel={closeEmployeeDialogHandler}
            >
                {userDialogContentRenderer()}   
            </Dialog>
            <div className='dep-page'>
                <div className='dep-page__users-list-container'>
                    <DropDown items={departmentData.map(dd => {
                        return {
                            text: dd.name,
                            value: dd.id.toString()
                        } as DropDownItem;
                    })}
                        label='Отделы:'
                        selectedChanged={(val) => departmentChangedHandler(val)}
                    />
                    <EmployeesList employeesList={employeesData}
                        onItemClick={(id) => onEmployeeSelectedHandler(id)}
                        onItemDelete={(id) => console.log('delete', id)}
                        onItemEdit={editEmployeeHandler}
                    />
                    <Button text="Добавить сотрудника" className='dep-page__add-user-btn' onClick={createEmployeeHandler} />
                </div>
                <div>
                    <div>
                        <span>ФИО</span>
                        <div>*</div>
                    </div>
                    <div>
                        <div>Личные данные</div>
                        <div>Данные о работе</div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
