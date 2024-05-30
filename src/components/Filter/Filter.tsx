import { Button, Menu, MenuItem } from '@mui/material'
import React, { FC, useState } from 'react'
import SortIcon from '@mui/icons-material/Sort';
import { FilterState } from 'global/types';

type Props = {
    onClickItem: React.Dispatch<React.SetStateAction<FilterState>>,
    filterIndex: FilterState,
}

const Filter: FC<Props> = ({ onClickItem, filterIndex }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const filterNames = ['сначала недорогие', 'сначала дорогие'];

    const handleOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickItem = (index: 0 | 1) => {
        handleClose();
        onClickItem(index);
    }

    return (
        <>
            <Button variant='text' onClick={handleOpen} sx={{ textTransform: 'lowercase', alignSelf: 'flex-start', marginLeft: {xs: -1, sm: 0}, marginTop: {xs: 1, sm: 0}}} >
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

export default Filter;
