import React from 'react';
import styled from '@emotion/styled';

const ListComponent = styled.div`
    max-width: 1080px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(145px, 1fr));
    gap: 20px;
    justify-items: center;

    @media (max-width: 600px) {
        grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
        gap: 20px 10px;
    }
`;

const List = ({ children }) => {
    return <ListComponent>{children}</ListComponent>;
};

export default List;
