import React, { Fragment } from 'react';
import { ListItemText, Typography } from '@mui/material';

export const ItemText = ({ primary, secondary }) => (
    <ListItemText
        primary={
            <Fragment>
                <Typography component="span" variant="h4" color="text.primary">
                    {primary}
                </Typography>
            </Fragment>
        }
        secondary={
            <Fragment>
                <Typography component="span" variant="h6" color="text.primary">
                    {secondary}
                </Typography>
            </Fragment>
        }
    />
);
