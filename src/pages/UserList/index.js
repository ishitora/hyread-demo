import React from 'react';
import useSWR from 'swr';

import BookItem from '../../components/BookItem';
import List from '../../components/List';

import { fetcher } from '../../servers/API';

const UserListPage = () => {
    const {
        data: userList,
        error,
        isLoading,
    } = useSWR('/exam/user-list', fetcher);

    if (isLoading) {
        return <div>loading</div>;
    }
    if (error) {
        return <div>error</div>;
    }
    return (
        <List>
            {userList.map((book) => (
                <BookItem key={book.uuid} book={book} />
            ))}
        </List>
    );
};

export default UserListPage;
