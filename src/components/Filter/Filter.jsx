import { Button, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import SortIcon from '@mui/icons-material/Sort';

// eslint-disable-next-line react/prop-types
export default function Filter({ onClickItem, filterIndex }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const filterNames = ['сначала недорогие', 'сначала дорогие'];

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickItem = (index) => {
        handleClose();
        onClickItem(index);
    }

    return (
        <>
            <Button variant='text' onClick={handleOpen} sx={{ textTransform: 'lowercase' }}>
                <SortIcon />
                {filterNames[filterIndex]}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => handleClickItem(0)}>сначала недорогие</MenuItem>
                <MenuItem onClick={() => handleClickItem(1)}>сначала дорогие</MenuItem>
            </Menu>
        </>
    )
}
