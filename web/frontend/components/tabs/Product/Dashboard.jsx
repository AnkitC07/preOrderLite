import {
    Card,
    Popover,
    Button,
    ActionList,
    TextContainer,
    ResourceList,
    Stack,
    List,
    Page

} from '@shopify/polaris';
import React, { useState } from 'react';
import ModalProduct from '../../layouts/ModalProduct';
import ModalContent from './ModalContent';

function Dashboard() {
    const [active, setActive] = useState(false);
    const [value, setValue] = useState('Pre-order-lite');

    return (

        // <Page
        // title="Product"
        // // primaryAction={{
        // //     content: 'Save',
        // // }}
        // secondaryActions={
        //     //     [
        //     //     {
        //     //         content: 'Import',
        //     //         disabled: true,
        //     //         helpText: 'You need permission to import products.',
        //     //     },
        //     // ]
        //     <Button >
        //         <i class="fas fa-cog text-muted" style={{ marginRight: '5px' }}></i>
        //         Editing
        //     </Button>
        // }
        // >
        <>
            <Card >
                <Card.Section title="App Setting">
                    <Button onClick={() => {
                        setActive(!active)
                    }}>
                        <i class="fas fa-cog text-muted" style={{ marginRight: '5px' }}></i>
                        Editing
                    </Button>
                </Card.Section>
                <Card.Section >
                    <div className='tagname'>
                        <h4>Tag Display in order page :</h4>
                        <span className='tagnamevalue'>{value}</span>
                    </div>
                </Card.Section>
            </Card>
            <ModalProduct comp={<ModalContent text={'Tag Display in order page :'} value={value} onChange={(newValue) => setValue(newValue)} />} active={active} setActive={setActive} title={'App Setting'} />
        </>
        // </Page>

    );
}


export default Dashboard;