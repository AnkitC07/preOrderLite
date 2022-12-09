import { Button, Modal, Text, TextContainer } from '@shopify/polaris';
import { useState, useCallback } from 'react';
import TextFieldComp from '../common/TextFieldComp';
import ModalContent from '../tabs/Product/ModalContent';

function ModalProduct({ comp, active, setActive, title, }) {


    const handleChange = useCallback(() => setActive(!active), [active]);

    // const activator = <Button onClick={handleChange}>Open</Button>;  

    return (
        <div >
            <Modal

                open={active}
                onClose={handleChange}
                title={title}
                primaryAction={{
                    content: 'Save',
                    onAction: handleChange,
                }}
                secondaryActions={[
                    {
                        content: 'Cancel',
                        onAction: handleChange,
                    },
                ]}
            >
                {/* <div className="modal_section">
                    <Modal.Section>
                        <Text variant="headingSm" as="h6">
                            {text}
                        </Text>
                        <div className="textfield_dashboard">
                            <TextFieldComp value={value} onChange={(newValue) => setValue(newValue)} />
                        </div>
                    </Modal.Section>
                </div> */}
                <div className="modal_section">
                    <Modal.Section>
                        {comp}
                    </Modal.Section>
                </div>
            </Modal>
        </div>
    );
}
export default ModalProduct