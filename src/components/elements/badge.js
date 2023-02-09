import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 30,
    top: 25,
    background: 'red',
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CustomBadge({children, content}) {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={content} color="secondary">
        {children}
      </StyledBadge>
    </IconButton>
  );
}