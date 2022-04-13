import React from 'react';
import styled from 'styled-components';
import { useLocation } from "react-router-dom";

import Album from '../Album/Album';
import Artist from '../Artist/Artist';

const List = (props) => {
    const location = useLocation();

    return (
        <Container>
            <ItemsList>

                {
                    location.pathname === '/' ?
                        props.items.map(item => <Artist key={item.id} item={item} />)
                        :
                        props.items.map(item => <Album key={item.id} item={item} />)
                }
            </ItemsList>
        </Container>
    )
}

const Container = styled.div``

const ItemsList = styled.ul`
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
`



export default List