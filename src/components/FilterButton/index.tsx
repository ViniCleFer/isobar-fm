import { useState, MouseEvent } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { ImportExportOutlined } from '@mui/icons-material';
import { Button } from './styles';

interface FilterButtonProps {
  handleAlphabeticSort: () => void;
  handleMorePopularSort: () => void;
  handleLessPopularSort: () => void;
}

export function FilterButton({
  handleAlphabeticSort,
  handleMorePopularSort,
  handleLessPopularSort,
}: FilterButtonProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAlphabeticSortClick = () => {
    handleAlphabeticSort();
    handleClose();
  };

  const handleMorePopularSortClick = () => {
    handleMorePopularSort();
    handleClose();
  };

  const handleLessPopularSortClick = () => {
    handleLessPopularSort();
    handleClose();
  };

  return (
    <>
      <Button onClick={handleClick}>
        <ImportExportOutlined sx={{ color: 'white' }} />
      </Button>
      <Menu
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
        sx={{ marginTop: 0, marginLeft: '16px' }}
      >
        <MenuItem onClick={handleAlphabeticSortClick}>
          Ordem Alfabética
        </MenuItem>
        <MenuItem onClick={handleMorePopularSortClick}>
          Mais Popularidade
        </MenuItem>
        <MenuItem onClick={handleLessPopularSortClick}>
          Menos Popularidade
        </MenuItem>
      </Menu>
    </>
  );
}
