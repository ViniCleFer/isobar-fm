import { useState, MouseEvent } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { ImportExportOutlined } from '@mui/icons-material';

interface FilterButtonProps {
  handleAlphabeticSort: () => void;
  handlePopularitySort: () => void;
}

export function FilterButton({
  handleAlphabeticSort,
  handlePopularitySort,
}: FilterButtonProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id='demo-positioned-button'
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          width: '40px',
          height: '40px',
          borderRadius: '4px',
          backgroundColor: 'black',
          position: 'absolute',
          right: 0,
          zIndex: 999,
          padding: 0,
        }}
      >
        <ImportExportOutlined sx={{ color: 'white' }} />
      </Button>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{ marginTop: '40px' }}
        style={{}}
      >
        <MenuItem onClick={handleAlphabeticSort}>Ordem Alfabética</MenuItem>
        <MenuItem onClick={handlePopularitySort}>Popularidade</MenuItem>
      </Menu>
    </>
  );
}
