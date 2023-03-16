import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumbs as MUIBreadcrumbs, Typography } from '@mui/material';

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '');

  return (
    <MUIBreadcrumbs
      separator='>'
      aria-label='breadcrumb'
      sx={{
        marginTop: '60px',
        '.MuiBreadcrumbs-ol': {
          margin: '0 0 0 74px',
        },
        '.MuiBreadcrumbs-li': {
          margin: '0 0 0 0',
          padding: '0 0 0 0',
          fontSize: '16px',
          fontWeight: 'bold',
        },
        '.MuiTypography-body1': {
          fontWeight: 'bold',
          textTransform: 'capitalize',
        },
      }}
      className='breadcrumb'
    >
      {pathnames.length > 0 ? (
        <Link to='/' className=''>
          Home
        </Link>
      ) : (
        <Typography> Home </Typography>
      )}

      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Typography key={name}>{name}</Typography>
        ) : (
          <Link key={name} to={`${routeTo}`}>
            {name}
          </Link>
        );
      })}
    </MUIBreadcrumbs>
  );
}
