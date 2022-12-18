import { darken, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { useSpring } from 'react-spring';
import SocialPassportAppIcon from '../assets/images/platon.png';

const useStyles = makeStyles((theme: any) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'black',
    color: theme.palette.primary.contrastText,
  },
  paper: {
    position: 'relative',
    height: '100%',
    textAlign: 'left',
    borderRadius: '8px',
    backgroundColor: '#000000',
    '&:hover': {
      backgroundColor: '#444444',
      cursor: 'pointer',
    },
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  video: {
    position: 'relative',
    width: 'auto',
    height: 'auto',
    borderRadius: '8px',
  },
}));
const More = () => {
  const classes = useStyles();
  const [items, setItems] = React.useState([
    {
      type: 'image',
      url: SocialPassportAppIcon,
      title: 'sp logo',
      description: 'lovin social passport',
      id: 1,
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/watch?v=JSLgXXx-4A8',
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
    {
      type: 'image',
      url: SocialPassportAppIcon,
      title: 'sp logo',
      description: 'lovin social passport',
      id: 1,
    },
  ]);

  React.useEffect(() => {
    // Fetch list of items from API or local data source
    async function fetchData() {
      const response = await fetch('/api/items');
      const data = await response.json();
      setItems(data);
    }
    fetchData();
  }, []);

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
          height: '90%',
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
      <h1>/more</h1>
      <h2>Side Projects and Hobbies</h2>
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={6} key={item.id}>
            <ArtBox initialColor="black">
              {item.type === 'image' ? (
                <img src={item.url} className={classes.image} />
              ) : (
                <ReactPlayer
                  url={item.url}
                  width="100%"
                  height="87%"
                  style={{ borderRadius: '0.75rem', overflow: 'hidden' }}
                />
              )}
              <div style={{ display: 'grid', margin: 0, padding: 0 }}>
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
  );
};

export default More;
