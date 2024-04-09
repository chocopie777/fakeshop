import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

export default function SingleProduct() {
  return (
    <Container maxWidth='lg' sx={{ padding: '25px 0' }}>
      <Stack direction='row' spacing={10}>
        <Box sx={{ width: '500px', height: '500px' }}>
          <img src="https://zdresearch.com/wp-content/uploads/CDN.jpg"
            alt=""
            width='100%'
            height='100%'
            style={{ objectFit: 'contain', objectPosition: 'top' }}
          />
        </Box>
        <Box width='50%'>
          <Typography variant='h4' sx={{ fontWeight: 700 }} component='h3' marginBottom={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, harum. Quisquam, sapiente consectetur nisi nobis sint assumenda cupiditate doloribus corporis aperiam similique possimus quod, eius voluptate. A perspiciatis dolores et.
          </Typography>
          <Typography marginBottom={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam corporis architecto quidem alias harum dolores totam nobis, doloremque quas quos repellendus commodi exercitationem ipsa eveniet magni. Hic natus recusandae amet.
          </Typography>
          <Stack direction='row' width='100%' justifyContent='space-between' spacing={3}>
            <Paper elevation={10} sx={{padding: 1, flexGrow: 1 }}>
              <Typography variant='h3' fontWeight={700}>
                9999$
              </Typography>
            </Paper>
            <Box>
              <Button variant='contained' sx={{height: '100%', paddingLeft: 5, paddingRight: 5, textTransform: 'capitalize'}}>В Корзину</Button>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}
