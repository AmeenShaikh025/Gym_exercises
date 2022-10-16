import React from 'react'
import { Box, Stack,Typography } from '@mui/material'

import Loader from './Loader';

const ExerciseVideo = ({exerciseVideo, name}) => {

  if(!exerciseVideo.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: '80px', xs: '20px' } }} p="20px">
      <Typography variant="h4" mb="33px">
        Watch <span style={{color: '#ff2625', textTransform: 'capitalize'}}>{name}</span> exercise videos
      </Typography>
      <Stack justifyContent="center" flexWrap="wrap" alignItems="center" sx={{
        flexDirection: { lg: 'row' },
        gap: { lg: '25px', xs: '0' }
      }}>
        {exerciseVideo?.slice(0,6).map((item,idx) => (
          <a
            key={item.video.videoId}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
              <Box>
                <Typography variant='h5' color='#000'>
                  {item.video.title}
                </Typography>
                <Typography variant='h6' color='#000'>
                  {item.video.channelName}
                </Typography>
              </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideo