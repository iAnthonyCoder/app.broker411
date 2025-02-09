// ** React Imports
import { useEffect, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Radio from '@mui/material/Radio'
import Typography from '@mui/material/Typography'
import Spinner from 'src/@core/components/spinner'
import CircularProgress from '@mui/material/CircularProgress'
import { businessService } from '../../../../services/business.service'

// ** Icons Imports
import React from 'mdi-material-ui/React'
import Vuejs from 'mdi-material-ui/Vuejs'
import Angular from 'mdi-material-ui/Angular'
import Laravel from 'mdi-material-ui/Laravel'

// ** Custom Avatar Component
import CustomAvatar from 'src/@core/components/mui/avatar'
import axios from 'axios'
import CardSnippet from 'src/@core/components/card-snippet'
import Grid from '@mui/material/Grid'
import toast from 'react-hot-toast'


const labels = {
  legal_name: 'Legal Name',
  dba_name: 'DBA Name',
  us_dot_number: 'DOT Number',
  address: 'Address',
  address_line_2: 'Address Line 2',
  operating_status: 'Operating Status',
  mailing_address: 'Address',
  mailing_address_line_2: 'Address Line 2',
  phone: 'Phone',
  fax: 'Fax',
  email: 'Email Address',
  vehicle_miles_traveled: 'VMT',
  vmt_year: 'VMT Year',
  power_units: 'Power Units',
  duns_number: 'Duns Number',
  drivers: 'Drivers',
  carrier_operation: 'Carrier Operation',
  passenger: 'Passenger',
  hazardous_materials:  'HM',
  household_goods: 'HG',
  new_entrant: 'New Entrant',
  registration_date: 'Registration Date',
  type:'Type',
  mc_mx_ff_numbers: 'MC/MX/FF Numbers',
  mcs_150_form_date: 'MCS-150 Form Date',
  mc_number: 'MC Number',
  carrier_operations: 'Carrier Operations',
  vehicles_miles_traveled: 'Vehicles Miles Traveled'

}

const BusinessInfo = (props) => {

    console.log(props)

  return (
    <Box>
      <Typography variant='h6' sx={{ mb: 4 }}>
        FMCSA Registration Data
      </Typography>

        
            <Grid container spacing={2}>
           
              {
                Object.keys(Object.entries(props.businessData).reduce((a,[k,v]) => (v ? (a[k]=v, a) : a), {})).filter(x => x!='id' && x!='createdAt' && x!='updatedAt' && x!='is_enabled' && x!='is_published' && x!='is_verified').map(x => {
                  return (

                    <Grid
                      item
                      xs={12}
                      md={6}
                      lg={4}
                      style={{borderBottom:'1px solid #b7b7b729'}}
                      sx={{ pb: 2, pt: 3 }}
                    >
                    <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
                      {labels[x]}
                    </Typography>
                    <Typography variant='caption'>{props.businessData[x]}</Typography>

                    </Grid>

                  )
                })
              }

            </Grid>
          
        
      </Box>
  )
}

export default BusinessInfo
