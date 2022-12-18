import { useMemo } from 'react';
import { Tooltip } from 'react-tippy';
import useSound from 'use-sound';
import PageWrapper from './PageWrapper';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { MusicNote } from '@mui/icons-material';
const BIRTH = new Date('2000-06-16T10:15:00Z');
const YEAR_MILLIS = 31556952000;

const Home = () => {
  const age = useMemo(() => Math.floor((Date.now() - BIRTH.getTime()) / YEAR_MILLIS), []);
  const soundUrl = '/p-static/sounds/cereal-killa.mp3';

  const [play, { stop, isPlaying }] = useSound(soundUrl);
  return (
    <PageWrapper forceReadableWidth>
      <h1>/home</h1>
      <h2>About me</h2>
      <p>
        Platon.{' '}
        <Tooltip arrow title={'16th June 2000'}>
          {age}
        </Tooltip>{' '}
        y/o. Build Build Build
      </p>
      <p></p>
      <h3>About Social Passport</h3>
      <p>
        Share your digital profile with your fellow students instantaneously. one tap and you are
        connected. Using a QR code or an NFC enabled tag you can give your instagram, phone number,
        spotify playlists, or any social links which are easily curatable. Tap this
        <a href={'https://www.socialpassport.app'}> link</a> to check it out!
      </p>
      <Fab
        color="secondary"
        aria-label="add"
        size="small"
        style={{ position: 'absolute', bottom: 16, right: 16 }}
      >
        <MusicNote
          onClick={() => {
            isPlaying ? stop() : play();
          }}
        />
      </Fab>
    </PageWrapper>
  );
};

export default Home;
