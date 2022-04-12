import React, { useState } from 'react'
import Navbar from './Navbar'
import { useDispatch } from 'react-redux'

import { clearCart } from '../../store/actions/actions'
import styled from 'styled-components'
import Cart from '../Cart/Cart'
import Form from '../Form/Form'

const Layout = (props) => {
    const dispatch = useDispatch()
    const [showForm, setShowForm] = useState(false)

    const handleSubmit = (data) => {
        console.log(data);
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
                <Cart onCheckout={() => setShowForm(true)} />
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