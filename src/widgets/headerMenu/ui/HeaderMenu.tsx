'use client';

import React, { useState } from 'react';
import { Flex, Menu, Button, type MenuProps } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: 'Каталог',
        key: 'catalog',
        className: 'font-bold',
    },
    {
        label: 'Покупателям',
        key: 'user-info',
        className: 'font-bold',
    },
    {
        label: 'Акции',
        key: 'sales',
        className: 'font-bold',
    },
    {
        label: 'Адреса студий',
        key: 'adresses',
        className: 'font-bold',
    },
];

export const HeaderMenu = () => {
    const [current, setCurrent] = useState<string[] | undefined>(undefined);

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent([e.key]);
    };

    return (
        <Menu
            onClick={onClick}
            selectedKeys={current}
            mode="horizontal"
            items={items}
        />
    );
};
