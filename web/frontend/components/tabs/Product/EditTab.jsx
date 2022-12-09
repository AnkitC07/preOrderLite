import { Card, Tabs } from '@shopify/polaris';
import { useState, useCallback } from 'react';

function EditTab() {
    const [selected, setSelected] = useState(0);

    const handleTabChange = useCallback(
        (selectedTabIndex) => setSelected(selectedTabIndex),
        [],
    );

    const tabs = [
        {
            id: 'PreorderEdit',
            content: 'Pre-Order',
            accessibilityLabel: 'All Setting',
            panelID: 'PreorderEdit',
            component: ''
        },
        {
            id: 'DiscountEdit',
            content: 'Discount',
            panelID: 'DiscountEdit',
            component: ''
        },

    ];

    return (
        <Card>
            <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
                <Card.Section title={tabs[selected].content}>
                    <p>Tab {selected} selected</p>
                </Card.Section>
            </Tabs>
        </Card>
    );
}


export default EditTab;