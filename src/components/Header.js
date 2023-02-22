import React from 'react';
import styled from '@emotion/styled';

const StyledHeader = styled.header`
    height: 70px;
    background: #ffffff;
    border-bottom: 1px solid #cfd7e6;
    position: relative;
    h3 {
        max-width: 1080px;
        margin: 0 auto;
        padding: 0 40px;
        padding-top: 30px;
        font-size: 20px;
        font-weight: 600;
    }

    button {
        display: none;
        border: none;
        width: 14px;
        height: 14px;
        background-color: transparent;
        background-image: url('/svg/cross.svg');
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 5%;
        cursor: pointer;
        z-index: 2;
    }
    @media (max-width: 600px) {
        height: 40px;
        border-bottom: none;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.05);
        h3 {
            max-width: 1080px;
            margin: 0 auto;
            padding: 0;

            font-size: 17px;
            text-align: center;
            line-height: 40px;
        }
        button {
            display: block;
        }
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <h3>我的書櫃</h3>
            <button></button>
        </StyledHeader>
    );
};

export default Header;
