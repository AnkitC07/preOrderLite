import { Card, ResourceList, ResourceItem, Avatar, Text } from '@shopify/polaris';
import React, { useState } from 'react';

import profile from '../../../public/profile.jpeg'
function ListProduct(props) {
    console.log(props.data)
    const [className, setClassName] = useState({ 'active': false, 'class': "fa-solid customBtn fa-chevron-down" })


    const checking = () => {
        // setVariant(!showV)
        setDisplay(!display)

        if (className.active) {
            setClassName({ 'active': false, 'class': "fa-solid customBtn fa-chevron-down" })
        } else {
            setClassName({ 'active': true, 'class': "fa-solid customBtn fa-chevron-up" })
        }

    }
    const [display, setDisplay] = useState(false)
    return (

        <ResourceList
            resourceName={{ singular: 'customer', plural: 'customers' }}
            items={[
                {
                    avatarSource: props.data.image ? props.data.image.src : profile,
                    name: props.data?.title,
                },
            ]}
            renderItem={(item) => {
                const { id, url, avatarSource, name, location } = item;

                return (
                    <>
                        <button
                            onClick={checking}
                            className={className.class}>
                        </button>
                        <ResourceItem
                            verticalAlignment="center"
                            media={
                                <Avatar
                                    customer
                                    size="medium"
                                    name={name}
                                    source={avatarSource}
                                />
                            }
                            accessibilityLabel={`View details for ${name}`}
                            name={name}
                        >
                            <Text variant="bodyMd" fontWeight="bold" as="h3">
                                {name}
                            </Text>
                            {/* <div>active</div>
                            <div className="editbtn">
                                <button>edit</button>
                            </div> */}
                        </ResourceItem>

                        {display == true ? <>
                            <div>ashdasdlaksdlkasd</div>
                            <div>ashdasdlaksdlkasd</div>
                            <div>ashdasdlaksdlkasd</div>
                            <div>ashdasdlaksdlkasd</div>
                            <div>ashdasdlaksdlkasd</div>
                        </> : ''}
                    </>
                );
            }}
        />
    );
}
export default ListProduct