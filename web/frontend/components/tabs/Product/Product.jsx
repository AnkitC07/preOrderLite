import React, { useEffect } from 'react'
import { Text } from '@shopify/polaris';
import Dashboard from './Dashboard'
import ProductTabel from './ProductTabel';
import { useAuthenticatedFetch } from '../../../hooks/useAuthenticatedFetch';
import { useState } from 'react';

const Product = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [pageInfo, setPageInfo] = useState({
        path: 'products',
        query: { limit: 10 }
    })
    const fetch = useAuthenticatedFetch()


    // GET-PRODUCTS
    // useEffect(async () => {

    //     await fetch(`/api/getProducts`, {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             pageInfo,
    //         })
    //     })
    //         .then((res) => {
    //             return res.json()
    //         })
    //         .then((data) => {
    //             setLoading(false)
    //             setData(data.products)
    //             setPageInfo(data.pageInfo)
    //             console.log(data)
    //         })
    //         .catch((err) => {
    //             setLoading(true)
    //             console.log(err)
    //         })

    // }, [])

    // useEffect(() => {
    //     fetch(
    //         `https://vijay-laravel-app.myshopify.com/admin/api/2019-07/products.json?limit=3`
    //     )
    //         .then((data) => console.log("Datasssss", data))
    //         .catch((err) => console.log("Error: ", err));
    // }, []);


    return (
        <>

            <div className="row wlcm_box_main" >
                <div className="col-md-12">
                    <div className="wlcm_box">
                        <Text variant="headingLg" as="h5">
                            👋 Welcome to Pre Order Manager
                        </Text>
                        <p>Setting up is easy as 1-2-3! Follow these steps to set up Pre Order to your store</p>
                        <ul>
                            <li>1. <i className="fas fa-check-square" style={{ color: '#16c116' }} ></i> Install the app</li>
                            <li>2. Create Pre Order</li>
                            <li>3. <a className="add_theme" href="https://pre-order-nov-3.myshopify.com/admin/themes/137481126209/editor?previewPath=/cart&amp;context=apps" target="blank">Enable App Emebed </a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='dashboard'>
                <Dashboard />
            </div>
            <div className="productTabel">
                <ProductTabel />
            </div>

        </>
    )
}

export default Product