import { darken, Grid, Paper, Typography, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';
import { useSpring } from 'react-spring';
import SocialPassportAppIcon from '../assets/images/platon.png';
import Resume from '../assets/images/PlatonResume.png';

const useStyles = makeStyles((theme: any) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  paper: {
    position: 'relative',
    height: '100%',
    textAlign: 'left',
    borderRadius: '8px',
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.secondary,
      cursor: 'pointer',
    },
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: theme.palette.primary.secondary,
      cursor: 'pointer',
    },
  },
  imageHover: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    '&:hover': {
      opacity: '50%',
      backgroundColor: 'gray',
    },
  },
  video: {
    position: 'relative',
    width: 'auto',
    height: 'auto',
    borderRadius: '8px',
  },
  hoverDiv: {
    position: 'absolute',
    left: '55%',
    top: '40%',
    padding: '12px',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: 'gray',
    },
  },
}));
const More = () => {
  const [showImage, setShowImage] = useState<any>(null);
  const classes = useStyles();
  const theme = useTheme();
  const hobbies = [
    {
      type: 'image',
      url: SocialPassportAppIcon,
      title: 'sp logo',
      description: 'lovin social passport',
      id: 1,
    },
    {
      type: 'image',
      url: SocialPassportAppIcon,
      title: 'sp logo',
      description: 'lovin social passport',
      id: 1,
    },
  ];
  const resume = [
    {
      type: 'image',
      url: Resume,
      title: null,
      description: null,
      id: 1,
    },
  ];

  interface ArtBoxProps {
    initialColor: string;
  }

  const ArtBox: React.FC<ArtBoxProps> = ({ initialColor, children }) => {
    const [hover, setHover] = useState<string>(initialColor);

    const hoverSpring = useSpring({
      from: { color: initialColor },
      to: { color: hover || initialColor },
    });

    return (
      <div
        style={{
          backgroundColor: hover,
          transition: 'background-color 0.25s ease',
          cursor: 'pointer',
          borderRadius: '8px',
          padding: '12px',
          marginBottom: '12px',
        }}
        onMouseEnter={() => setHover('#444444')}
        onMouseLeave={() => setHover(initialColor)}
      >
        {children}
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <title>Miscellaneous</title>
      </Helmet>
      {showImage ? (
        <div>
          <img src={showImage} className={classes.image} onClick={() => setShowImage(null)} />
          <div
            className={classes.hoverDiv}
            onClick={() => {
              setShowImage(null);
            }}
          >
            click to close
          </div>
        </div>
      ) : (
        <div>
          <h1>/more</h1>
          <h2>Side Projects and Hobbies</h2>
          <Grid container spacing={2}>
            {hobbies.map((item) => (
              <Grid item xs={12} sm={6} md={6} key={item.id}>
                <ArtBox initialColor={theme.palette.primary.main}>
                  {item.type === 'image' ? (
                    <img
                      src={item.url}
                      className={classes.image}
                      onClick={() => setShowImage(item.url)}
                    />
                  ) : (
                    <ReactPlayer
                      url={item.url}
                      width="100%"
                      height="87%"
                      style={{ borderRadius: '0.75rem', overflow: 'hidden' }}
                    />
                  )}
                  <div style={{ display: 'grid', margin: 0, padding: 0 }}>
                    <Typography variant="h6" style={{ color: theme.palette.text.primary }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" style={{ color: theme.palette.text.primary }}>
                      {item.description}
                    </Typography>
                  </div>
                </ArtBox>
              </Grid>
            ))}
          </Grid>
          <h2>Resume</h2>
          <Grid container spacing={2}>
            {resume.map((item) => (
              <Grid item xs={12} sm={6} md={6} key={item.id}>
                <ArtBox initialColor={theme.palette.primary.main}>
                  {item.type === 'image' ? (
                    <img
                      src={item.url}
                      className={classes.image}
                      onClick={() => setShowImage(item.url)}
                    />
                  ) : (
                    <ReactPlayer
                      url={item.url}
                      width="100%"
                      height="87%"
                      style={{ borderRadius: '0.75rem', overflow: 'hidden' }}
                    />
                  )}
                  <div style={{ display: 'grid', margin: 0, padding: 0, background: 'gray' }}>
                    <Typography variant="h6" style={{ color: 'white' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2">{item.description}</Typography>
                  </div>
                </ArtBox>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default More;
