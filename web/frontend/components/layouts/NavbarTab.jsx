import { Card, Tabs } from '@shopify/polaris';
import { useState, useCallback } from 'react';
import Product from '../tabs/Product/Product';

function NavbarTab() {
    const [selected, setSelected] = useState(0);

    const handleTabChange = useCallback(
        (selectedTabIndex) => setSelected(selectedTabIndex),
        [],
    );

    const tabs = [
        {
            id: 'product',
            content: 'Product',
            component: < Product />
        },
        {
            id: 'design',
            content: 'Design',
        },
        {
            id: 'setup_guide',
            content: 'Setup Guide',
        },
        {
            id: 'plan',
            content: 'Plan',
        },
        {
            id: 'cancode.io',
            content: 'CanCode.io App',
        },
        {
            id: 'missing',
            content: 'Missing a feature?   ',
        },
    ];

    return (

        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>

            <div className="container">
                {tabs[selected].component}
            </div>

        </Tabs>

    );
}

export default NavbarTab