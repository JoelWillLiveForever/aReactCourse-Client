import { FC } from 'react';

import { Layout } from '../../components/layouts';
import { Button, DropDown, EmployeesList } from '../../components/';

import './departmentsPageStyles.scss'

export const DepartmentsPage: FC = () => {

    return (
        <Layout>
            <div className='dep-page'>
                <div className='dep-page__users-list-container'>
                    <DropDown items={[
                        {
                            text: 'Отдел 1', value: '1'
                        },
                        {
                            text: 'Отдел 2', value: '2'
                        },
                        {
                            text: 'Отдел 3', value: '3'
                        },
                    ]} label='Отделы:' selectedChanged={(val) => console.log(val)} />
                    <EmployeesList employeesList={[
                            { id: 1, lastName: 'Иванов', firstName: 'Иван', midleName: 'Иванович' },
                            { id: 2, lastName: 'Петров', firstName: 'Сергей', midleName: 'Дмитриевич' },
                            { id: 3, lastName: 'Джон', firstName: 'Смитт', },
                            { id: 4, lastName: 'Рябчикова', firstName: 'Лидия', midleName: 'Анатольевна' },
                            { id: 5, lastName: 'Семенов', firstName: 'Олег', midleName: 'Артемович' },
                        ]} onItemClick={(id) => console.log(id)}
                    />
                    <Button text="Добавить сотрудника" className='dep-page__add-user-btn' />
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
