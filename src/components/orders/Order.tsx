import React, { useEffect, useState } from 'react';
import { DataService } from '../../service/service';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Grid } from '@mui/material';

const Orders = () => {

    const [orders, setOrders] = useState([])
    const getOrders = () => {
        DataService.get("orders")
            .then(({ data }) => {
                setOrders(data.data)
            })
    }

    useEffect(() => {
        getOrders()
    }, [])
    return (
        <>
            <Container>
                <Link to="/products">Go to products</Link>

                <Grid container>
                    {orders?.map((e) => {
                        return (
                            <>
                                <Grid xs={4}>
                                    <p>Date: {new Date(e.createdAt).toLocaleString()}</p>

                                    {e.products.map(({ productId, ...e }) => {
                                        return (
                                            <>
                                                Title: {productId.title}
                                                Qty: {e.quantity}
                                                <br />
                                            </>
                                        )
                                    })}

                                    <p>status: {e.status}</p>

                                    <p>Total: {e.totalPrice}</p>
                                </Grid >
                            </>
                        )
                    })}
                </Grid>
            </Container>
        </>
    )
}

export default Orders;