import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import { clearCart } from '../../store/actions/actions'
import Navbar from './Navbar'
import Cart from '../Cart/Cart'
import Form from '../Form/Form'

const Layout = (props) => {
    const dispatch = useDispatch()
    const [showForm, setShowForm] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const cart = useSelector(state => state.cart.items)
    const price = useSelector(state => state.cart.price)

    const handleSubmit = (data) => {
        navigate('/success', { state: {cart, userData: data, price} });
        dispatch(clearCart());
        setShowForm(false)
    }

    const cancel = () => {
        setShowForm(false)
    }
    return (
        <>
            <Navbar />
            <Container>
                {props.children}
                {location.pathname !== '/success' && <Cart onCheckout={() => setShowForm(true)} />}
                {showForm && <Form handleSubmit={handleSubmit} cancel={cancel} />}
            </Container>
        </>
    )
}

const Container = styled.div`
padding: 0 2rem;
display: flex;
justify-content: space-between;
`

export default Layout