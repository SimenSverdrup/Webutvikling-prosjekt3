import React, {useContext, useState }from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from "@material-ui/core/Button";
import Store from '../../mobx/store';
import './Dropdown.css';


const options = [
    'None',
    'Action',
    'Adventure',
    'Animation',
    'Biography',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Family',
    'Fantasy',
    'Horror',
    'Mystery',
    'Music',
    'Romance',
    'Sci-Fi',
    'Thriller',
    'War',
];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const anchorRef = React.useRef<HTMLButtonElement>(null);
    const store = useContext(Store);
    const { updateGenre } = store;

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    function setGenre(genre: string) {
        if (genre === "None") {
            updateGenre("");
        }
        else {
            updateGenre(genre);
        }
        handleClose();
    }

    return (
        <div className="dropdown">
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
        <MenuItem key={option} selected={option === 'None'} onClick={() => setGenre(option)}>
        {option}
        </MenuItem>
    ))}
    </Menu>
    </div>
);
}
