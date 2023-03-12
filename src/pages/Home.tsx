import { useMemo } from 'react';
import { Tooltip } from 'react-tippy';
import useSound from 'use-sound';
import PageWrapper from './PageWrapper';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { MusicNote } from '@mui/icons-material';
import { Helmet } from 'react-helmet';
const BIRTH = new Date('2000-06-16T10:15:00Z');
const YEAR_MILLIS = 31556952000;

const Home = () => {
  const age = useMemo(() => Math.floor((Date.now() - BIRTH.getTime()) / YEAR_MILLIS), []);

  return (
    <PageWrapper forceReadableWidth>
      <Helmet>
        <title>Me</title>
      </Helmet>
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
      <h3>Background</h3>
      <p>
        9 years of coding with experience in building products and startups for over 5 years. I've
        worked at 4 different startups and started 3 companies. Building is central to my core and I
        strive to get better and better with each product and feature I work on. From idea in head,
        to drawing on paper, to designs on figma, to website in react, to marketing growth, I am
        equipped with the experience of all tools.
      </p>
      <h3>Studyo</h3>
      <p>
        the all-in-one productivity tool that streamlines your to-do list and calendar into one
        powerful application. With our beautiful drag and drop interface, you can build your
        schedule instantly using your built in todo-list. Collaborate effortlessly with friends and
        family using Studyo's one of a kind calendar sharing features. Lastly, import all your
        meetings and events using our seamless integration with Google Calendar. Tap
        <a href={'https://www.mystudyo.com'}> link</a> to check it out!
      </p>
      <h3>Social Passport</h3>
      <p>
        Share your digital profile with your fellow students instantaneously. one tap and you are
        connected. Using a QR code or an NFC enabled tag you can give your instagram, phone number,
        spotify playlists, or any social links which are easily curatable. Tap this
        <a href={'https://www.socialpassport.app'}> link</a> to check it out!
      </p>
    </PageWrapper>
  );
};

export default Home;
