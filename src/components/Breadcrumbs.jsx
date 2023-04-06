import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumbs as MUIBreadcrumbs, Typography } from '@mui/material';

export const Breadcrumbs = (props) => {
  const location = useLocation();
  const pathnames = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '');

  return (
    <MUIBreadcrumbs
      separator='>'
      aria-label='breadcrumb'
      sx={{
        marginTop: `${props.page === 'product-detail' ? '10px' : '70px'}`,
        display: 'block',
        width: '100%',
        '.MuiBreadcrumbs-ol': {
          display: 'block',
          position: 'relative',
          maxWidth: '1170px',
          width: '100%',
          margin: '16px auto',
        },
        '.MuiBreadcrumbs-li': {
          margin: '0 0 0 0',
          padding: '0 0 0 0',
          fontSize: '16px',
          fontWeight: 'bold',
          textTransform: 'capitalize',
          display: 'inline'
        },
        '.MuiTypography-body1': {
          fontWeight: 'bold',
          textTransform: 'capitalize',
        },
        '.MuiBreadcrumbs-separator': {
          display: 'inline'
        },
        '.MuiTypography-root': {
          display: 'inline',
        }
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
        name = decodeURIComponent(name)
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
};
