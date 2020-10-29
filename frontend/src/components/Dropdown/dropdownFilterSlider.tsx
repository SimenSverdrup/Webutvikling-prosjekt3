import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from "@material-ui/core/Button";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const options = [
    'None',
    'Action',
    'Romance',
    'Drama',
    'Horror',
    'Crime',
    'Comedy',
    'Fantasy',
    'Thriller',
    'Documentary',
    'Mystery',
    'Music',
    'Family',
    'Adventure',
    'War',
    'Sci-Fi',
    'Animation',
    'Biography',
];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                ref={anchorRef}
    aria-controls={open ? 'menu-list-grow' : undefined}
    aria-haspopup="true"
    onClick={handleClick}
        >
        Filter:
    </Button>
        <Menu
    id="long-menu"
    anchorEl={anchorEl}
    keepMounted
    open={open}
    onClose={handleClose}
    PaperProps={{
        style: {
            maxHeight: ITEM_HEIGHT * 3.5,
                width: '20ch',
        },
    }}
>
    {options.map((option) => (
        <MenuItem key={option} selected={option === 'None'} onClick={handleClose}>
        {option}
        </MenuItem>
    ))}
    </Menu>
    </div>
);
}
