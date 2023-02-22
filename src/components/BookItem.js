import React from 'react';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorites, removeToFavorites } from '../slices/userSlice';

const Book = styled.div`
    display: flex;
    flex-direction: column;
    width: 145px;

    @media (max-width: 600px) {
        width: 110px;
    }

    p {
        max-height: 3em;
        line-height: 1.5em;
        font-size: 16px;
        overflow: hidden;
        margin: 0;
        margin-top: 5px;
        @media (max-width: 600px) {
            font-size: 14px;
        }
    }
`;

const BookCover = styled.div`
    width: 100%;
    height: 203px;
    border-radius: 5px;
    position: relative;
    overflow: hidden;

    background-color: #eee;
    background-image: url('${(props) => props.url}');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;

    @media (max-width: 600px) {
        height: 145px;
    }
`;

const Shadow = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 66%;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0) 100%
    );
`;

const Icon = styled.div`
    width: 22px;
    height: 20px;

    background-image: url('/svg/heart-clicked.svg');
    position: absolute;
    top: 12px;
    right: 12px;
    cursor: pointer;
    z-index: 2;
`;

const BookItem = ({ book }) => {
    const dispatch = useDispatch();
    const favoritesList = useSelector((state) => state.user.favoritesList);
    const isFavorite = favoritesList.some(
        (favorite) => favorite.uuid === book.uuid
    );

    return (
        <Book>
            <BookCover url={book.coverUrl}>
                <Shadow />
                <Icon
                    style={{
                        backgroundImage: `url('${
                            isFavorite
                                ? '/svg/heart-clicked.svg'
                                : '/svg/heart.svg'
                        }')`,
                    }}
                    isFavorite={isFavorite}
                    onClick={() => {
                        dispatch(
                            isFavorite
                                ? removeToFavorites(book.uuid)
                                : addToFavorites(book)
                        );
                    }}
                />
            </BookCover>
            <p>{book.title}</p>
        </Book>
    );
};

export default BookItem;
