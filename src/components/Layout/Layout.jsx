import React, { useState } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

import Navbar from './Navbar'
import Cart from '../Cart/Cart'
import Form from '../Form/Form'

const Layout = (props) => {
    const [showForm, setShowForm] = useState(false)
    const location = useLocation()


    
    return (
        <>
            <Navbar />
            <Container>
                {props.children}
                {location.pathname !== '/success' && <Cart onCheckout={() => setShowForm(true)} />}
                {showForm && <Form />}
            </Container>
        </>
    )
}

const Container = styled.div`
padding: 2rem;
display: flex;
justify-content: space-between;
`

export default Layout