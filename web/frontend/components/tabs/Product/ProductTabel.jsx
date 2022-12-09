import {
    ChoiceList,
    TextField,
    Card,
    Filters,
    DataTable,
    Text,
    Button,
    Pagination,
} from '@shopify/polaris';
import { useState, useCallback } from 'react';
import ListProduct from '../../common/ListProduct';
import LoadingTable from '../../common/LoadingTable';
import DataTableRow from './DataTableRow';
import Table from 'react-bootstrap/Table';
import { useAuthenticatedFetch } from '../../../hooks/useAuthenticatedFetch';
import { useEffect } from 'react';
import { Get_Next_Products, Get_Prev_Products, Get_Products } from '../../../graphql';

function ProductTabel() {


    //REST APi
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [pageInfo, setPageInfo] = useState({
        path: 'products',
        query: { limit: 10 }
    })
    //*******************//


    const fetch = useAuthenticatedFetch()
    const [availability, setAvailability] = useState(null);
    const [productType, setProductType] = useState(null);
    const [taggedWith, setTaggedWith] = useState(null);
    const [queryValue, setQueryValue] = useState(null);

    const [productList, setProductList] = useState([])
    // const [pageInfo, setPageInfo] = useState({
    //     hasPreviousPage: false,
    //     hasNextPage: false,
    // })


    const _loadProducts = (query) => {
        fetch("/api/get-products", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                query,
            })
        }).then((data) => data.json()).
            then((res) => {
                console.log(res)
                setPageInfo(res.pageInfo)
                setProductList([...productList, ...res.edges])
            }).catch((err) => console.log("Err: ", err))
    }

    //REST API
    const retriveProduct = async () => {

        await fetch(`/api/getProducts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                pageInfo,
            })
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setLoading(false)
                setData(data.products)
                setPageInfo(data.pageInfo)
                console.log(data)
            })
            .catch((err) => {
                setLoading(true)
                console.log(err)
            })
    }

    const handleAvailabilityChange = useCallback(
        (value) => setAvailability(value),
        [],
    );

    const handleFiltersQueryChange = useCallback(
        (value) => setQueryValue(value),
        [],
    );
    const handleAvailabilityRemove = useCallback(() => setAvailability(null), []);
    const handleProductTypeRemove = useCallback(() => setProductType(null), []);
    const handleTaggedWithRemove = useCallback(() => setTaggedWith(null), []);
    const handleQueryValueRemove = useCallback(() => setQueryValue(null), []);
    const handleFiltersClearAll = useCallback(() => {
        handleAvailabilityRemove();
        handleProductTypeRemove();
        handleTaggedWithRemove();
        handleQueryValueRemove();
    }, [
        handleAvailabilityRemove,
        handleQueryValueRemove,
        handleProductTypeRemove,
        handleTaggedWithRemove,
    ]);

    const filters = [
        {
            key: 'availability',
            label: 'Availability',
            filter: (
                <ChoiceList
                    title="Availability"
                    titleHidden
                    choices={[
                        { label: 'Online Store', value: 'Online Store' },
                        { label: 'Point of Sale', value: 'Point of Sale' },
                        { label: 'Buy Button', value: 'Buy Button' },
                    ]}
                    selected={availability || []}
                    onChange={handleAvailabilityChange}
                    allowMultiple
                />
            ),
            shortcut: true,
        },

    ];


    const rows =
        data.map((data) => (
            [
                <ListProduct data={data} />,
                'sfd', 'fsf'

            ]

        ))

    useEffect(() => {
        // let query = Get_Products({ first: 5 })
        // _loadProducts(query)
        retriveProduct()
    }, [])
    // useEffect(() => {
    //     fetch(`https://vijay-laravel-app.myshopify.com/admin/api/2019-07/products.json?limit=3`)
    //         .then((data) => data.json())
    //         .then((res) => console.log(res))
    //         .catch((err) => console.log(err))
    // }, [])

    return (
        <div style={{ height: '568px' }}>
            <Card>
                <Card.Section>
                    <Filters
                        queryValue={queryValue}
                        filters={filters}
                        onQueryChange={handleFiltersQueryChange}
                        onQueryClear={handleQueryValueRemove}
                        onClearAll={handleFiltersClearAll}
                    />
                </Card.Section>
                {loading
                    ?
                    <LoadingTable />
                    :
                    <>
                        {/* <DataTable
                            columnContentTypes={[
                                'text',
                                'numeric',
                                'text',

                            ]}
                            headings={[
                                <b>Product</b>,
                                <b>Status</b>,
                                <b>Setting</b>,
                            ]}
                            rows={rows}

                            // totals={['', '', '', 255, '$155,830.00']}

                            truncate={true}
                        /> */}
                        {/* {
                            data.map((x, i) => {
                                return (
                                    <>
                                        <DataTableRow data={x} />
                                    </>
                                )
                            })
                        } */}
                        <Table>
                            <thead>
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Setting</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((x, i) => {
                                        return (
                                            <>
                                                <DataTableRow data={x} />
                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                        <div className="container pagination">
                            <div className="row">
                                <div className="col-md-12">

                                    {/* <Pagination
                                        hasPrevious
                                        onPrevious={() => {
                                            console.log('Previous');
                                        }}
                                        hasNext
                                        onNext={() => {
                                            console.log('Next');
                                        }}
                                    /> */}
                                    <Pagination
                                        // hasPrevious={pageInfo.hasPreviousPage}
                                        // onPrevious={() => {
                                        //     let query = Get_Prev_Products({
                                        //         last: 5,
                                        //         before: productList.length ? productList[0].cursor : '',
                                        //     })
                                        //     _loadProducts(query)
                                        // }}
                                        // hasNext={pageInfo.hasNextPage}
                                        // onNext={() => {
                                        //     let query = Get_Next_Products({
                                        //         first: 5,
                                        //         after: productList.length ? productList[productList.length - 1].cursor : '',
                                        //     })
                                        //     _loadProducts(query)
                                        // }}
                                        hasPrevious={pageInfo.hasPreviousPage}
                                        onPrevious={() => {
                                            let query = Get_Prev_Products({
                                                last: 5,
                                                before: productList.length ? productList[0].cursor : '',
                                            })
                                            _loadProducts(query)
                                        }}
                                        hasNext={'nextPage' in pageInfo}
                                        onNext={() => {
                                            setPageInfo(pageInfo.nextPage)
                                            console.log(pageInfo)
                                            retriveProduct()
                                        }}
                                    />

                                </div>
                            </div>
                        </div>
                    </>
                }
            </Card>
        </div >
    );




}
export default ProductTabel