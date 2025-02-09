// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Divider } from '@mui/material'
import { useAuth } from 'src/hooks/useAuth'
import CustomChip from 'src/@core/components/mui/chip'
import styled from '@emotion/styled'
import MuiCard from '@mui/material/Card'
import { useDispatch } from 'react-redux'
import { openReviewDialog } from 'src/store/apps/business'

const Card = styled(MuiCard)(({ theme }) => ({
  '& .MuiCard-root': {
    [theme.breakpoints.up('md')]: {
      position: 'sticky',
      top: '88px'
    }
  },
}))

const CardUser = () => {

  const auth = useAuth()

  const dispatch = useDispatch()

  return (
    <Card >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Avatar
            alt='Robert Meyer'
            src={`https://avatars.dicebear.com/api/bottts/${auth.user.id}.png`}
            sx={{
              width: 78,
              height: 78,
              marginRight:'1em',
            }}
          />
          <Box sx={{ mr: 2, mb: 1, display: 'flex', flexDirection: 'column', justifyContent:'center' }}>
            <Typography style={{textAlign:'center'}} variant='h6'>{auth.user.username}</Typography>
            <Typography style={{textAlign:'center', marginBottom:'.5em'}} variant='caption'>{auth.user && auth.user.business && auth.user.business.legal_name}</Typography>
            
            <div style={{textAlign:'center'}}>
          <CustomChip
              skin='light'
              size='small'
              style={{marginBottom: '1rem'}}
              label={auth.user && auth.user.business && auth.user.business.type.toUpperCase()+' '+auth.user?.role.name.toUpperCase()}
              sx={{ textTransform: 'capitalize', '& .MuiChip-label': { lineHeight: '18px' } }}
            />
          </div>
          </Box>
          
        </Box>
        

        <Box>
          <Button sx={{mt: 1}} onClick={()=>
          document.getElementById("main-search") ? document.getElementById("main-search").focus() 
        :
          document.getElementById("main-search-two").click()
            
            } fullWidth variant='contained'>Write a review</Button>
        </Box> 
      
      </CardContent>
    </Card>
  )
}

export default CardUser
//// dispatch(openReviewDialog())