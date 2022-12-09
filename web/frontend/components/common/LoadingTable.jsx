import {
    IndexTable,
    useIndexResourceState,
} from "@shopify/polaris";
import React from "react";

function LoadingTable() {
    const customers = [
        {
            id: "3415",
        },

    ];


    const {
        handleSelectionChange
    } = useIndexResourceState(customers);

    return (

        <IndexTable
            itemCount={customers.length}
            onSelectionChange={handleSelectionChange}
            loading
            headings={[
                { title: "Name" },
            ]}
        ></IndexTable>
    );
}

export default LoadingTable;
