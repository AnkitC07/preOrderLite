import { Text } from '@shopify/polaris'
import React from 'react'
import TextFieldComp from '../../common/TextFieldComp'

const ModalContent = ({ value, text, onChange }) => {
    return (
        <>
            <div className="TagDivModal">
                <Text variant="headingSm" as="h6">
                    {text}
                </Text>
                <div className="textfield_dashboard">
                    <TextFieldComp value={value} onChange={onChange} />
                </div>
            </div>
        </>
    )
}

export default ModalContent