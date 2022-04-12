import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

import Item from '../Item/Item';

const List = ({ items, type }) => {
    const { artistId } = useParams();
    const navigate = useNavigate();
    const params = useParams();

    const onNavigate = (id) => {
        if (type === 'artists') {
            navigate(`/albums/${id}`);
        } else {
            navigate(`/albums/${artistId}/${id}`);
        }
    }

    return (
        <Container>

            <ItemsList>
                {items.map(item => (
                    <Item key={item.id} id={item.id} name={item.name} image={item.img} onNavigate={() => onNavigate(item.id)} />
                ))}
            </ItemsList>
        </Container>
    )
}

const Container = styled.ul`
    /* padding: 0 3rem; */
`

const ItemsList = styled.ul`
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
`



export default List