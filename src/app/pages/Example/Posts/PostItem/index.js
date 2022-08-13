import React from 'react';
import PropTypes from 'prop-types';
import ImageIcon from '@mui/icons-material/Image';
import { Avatar, ListItem, ListItemAvatar } from '@mui/material';
import { ItemText } from './ItemText';

const PostItem = ({ title, description }) => {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <ImageIcon />
                </Avatar>
            </ListItemAvatar>
            <ItemText primary={title} secondary={description} />
        </ListItem>
    );
};

PostItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default PostItem;
