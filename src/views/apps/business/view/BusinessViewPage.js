// ** React Imports
import { useState, useEffect } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'

// ** Third Party Components
import axios from 'axios'

// ** Demo Components Imports
import BusinessViewLeft from 'src/views/apps/business/view/BusinessViewLeft'
import BusinessViewRight from 'src/views/apps/business/view/BusinessViewRight'
import { Button, Card, CardContent, CardHeader, Typography } from '@mui/material'
import UserViewHeader from './UserViewHeader'

const UserView = ({ id, data, code }) => {

  const [ business, setBusiness ] = useState(data)

  useEffect(() => {
    {console.log(data)}
    setBusiness(data)
  }, [id])
  
 

  if(code === 404 || data === undefined){
    return (
      <Card>
      {/* <CardHeader sx={{ textAlign: 'center', fontWeight:'900' }} title='Oooops...' titleTypographyProps={{ variant: 'h6' }} /> */}
      <CardContent sx={{ textAlign: 'center' }}>
      <Typography variant='h2' sx={{ mb: 2.5 }}>
            404
          </Typography>
          <Typography variant='h5' sx={{ mb: 2.5, letterSpacing: '0.18px', fontSize: '1.5rem !important' }}>
            Page Not Found ⚠️
          </Typography>
          <Typography variant='body2'>We couldn&prime;t find a business with DOT Number <strong>{window.location.pathname.replace('/brokers/', '').replace('/', '')}</strong></Typography>
          <br />
        <img height='256px' alt='error-illustration' src='/images/pages/misc-under-maintenance.png' />
        <br /><br />
        <Typography variant='h6' color={'info'} sx={{ mb: 2.5, letterSpacing: '0.18px', fontSize: '1.2rem !important' }}>
            Verify the DOT Number and try again or request technical support
          </Typography>
          <Link href='/'><Button>Go back to Home</Button></Link>
      </CardContent>
    </Card>
      // <Grid container spacing={6}>
     
      //   <Grid item xs={12}>
      //     <Alert severity='error'>
      //       User with the id: {id} does not exist. Please check the list of users:{' '}
      //       <Link href='/admin/businesses'>User List</Link>
      //     </Alert>
      //   </Grid>
      // </Grid>
    )
  } 

  return (
    <Grid container spacing={6}>
        <Grid item xs={12} md={12} lg={12}>
          <UserViewHeader 
            business={business} 
            setBusiness={setBusiness} 
          />
        </Grid>
      {/* <Grid item xs={12} md={4} lg={3}>
        <BusinessViewLeft 
          business={business} 
          setBusiness={setBusiness} 
          />
      </Grid> */}
      <Grid item xs={12} md={12} lg={12}>
        <BusinessViewRight 
          business={business} 
          setBusiness={setBusiness} 
        />
      </Grid>
    </Grid>
  )
  
}

export default UserView
