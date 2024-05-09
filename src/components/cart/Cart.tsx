import React, { useEffect, useState } from 'react';
import { DataService } from '../../service/service';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Slider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addQty, minusQty } from '../../redux/slice';

const Cart = () => {
    const dispatch = useDispatch();

    const cart = useSelector((state: any) => state.user.cart);
    console.log(cart, "maulik12")

    return (
        <>
            <h1>Cart</h1>
            <Container>
                {cart?.length ?
                    <>
                        <Grid container>
                            {cart?.map((e: any) => {
                                return (
                                    <>
                                        <Grid xs={4}>
                                            <p>Title: {e.title}</p>

                                            <p>Category: {e.category}</p>

                                            <p>Price: {e.price}</p>
                                            <p>Qty: {e.qty}</p>
                                            <Button onClick={() => {
                                                console.log(e)
                                                dispatch(addQty(e));
                                            }}>+</Button>
                                            <Button onClick={() => {
                                                console.log(e)
                                                dispatch(minusQty(e));
                                            }}>-</Button>
                                        </Grid >
                                    </>
                                )
                            })}


                        </Grid>
                        <Button>Confirm Order</Button>
                    </> : "No cart data"}


                <Link to="/products">Go to products</Link>
            </Container>
        </>
    )
}

export default Cart;