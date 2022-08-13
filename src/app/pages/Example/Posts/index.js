import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';

import PostItem from './PostItem';
import { usePostSlice } from './slice';
import { selectListPost, selectLoading } from './slice/selectors';
import { List } from './List';
import { LoadingSpinner } from '@components/LoadingSpinner';

const Posts = () => {
    const dispatch = useDispatch();
    const { actions } = usePostSlice();
    const listPosts = useSelector(selectListPost);
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(actions.fetchPost());
    }, [dispatch, actions]);

    return (
        <Wrapper>
            <h2>Post List</h2>
            {isLoading && <LoadingSpinner />}
            <List>
                {listPosts?.length > 0 &&
                    listPosts.map(post => (
                        <PostItem
                            key={post.id}
                            title={post.title}
                            description={post.body}
                        />
                    ))}
            </List>
        </Wrapper>
    );
};

export default Posts;

const Wrapper = styled('div')({
    margin: '5px 5px',
    padding: '5px 5px',
});
