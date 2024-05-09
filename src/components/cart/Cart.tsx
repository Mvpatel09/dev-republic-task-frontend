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

    const confirmOrder = () => {
        const totalCartValue = cart.reduce((total, product) => {
            return total + (product.price * product.qty);
        }, 0);

        DataService.post('confirm-order', {
            payload: cart.map((e: any) => ({ productId: e._id, quantity: e.qty })),
            totalPrice: totalCartValue
        }).then(() => {
            alert("order created")
        }).catch(() => {

        })
    }

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
                        <h6>Total: {cart?.reduce((total, product) => {
                            return total + (product.price * product.qty);
                        }, 0)}</h6>
                        <Button onClick={() => confirmOrder()}>Confirm Order</Button>
                    </> : "No cart data"}


                <Link to="/products">Go to products</Link>
            </Container>
        </>
    )
}

export default Cart;