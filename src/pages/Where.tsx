import PageWrapper from './PageWrapper';
import Co from '../components/Co';
import styled from 'styled-components';
import HivenAppIcon from '../assets/images/hiven-app-icon.png';
import GigglAppIcon from '../assets/images/giggl-app-icon.jpg';
import SocialPassportAppIcon from '../assets/images/sp-app-icon.png';
import DoNotPayAppIcon from '../assets/images/dnp-app-icon.png';

import WonderAppIcon from '../assets/images/wonder-app-icon.png';
import OXOAppIcon from '../assets/images/oxo-app-icon.png';
import HonkAppIcon from '../assets/images/honk-app-icon.jpg';
import Repo from '../components/Repo';
import { Helmet } from 'react-helmet';

const Where = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Where</title>
      </Helmet>
      <h1>Where I've Done It</h1>
      <h3>Companies</h3>
      <CoWrapper>
        <Co
          url="https://socialpassport.app"
          name="Social Passport"
          iconReference={SocialPassportAppIcon}
          tagline="Consumer social"
          role={'CEO, Co-founder & Developer'}
          what={'I founded social passport to connect college students with one click'}
        />
        <Co
          url="https://donotpay.com"
          name="Do Not Pay"
          iconReference={DoNotPayAppIcon}
          tagline="Consumer"
          role={'Product Developer'}
          what={'Created a suite of products to boost growth and app use'}
        />
        <Co
          url="https://joinoxo.com"
          name="OXO"
          iconReference={OXOAppIcon}
          tagline="Enterprise"
          role={'Software Engineer'}
          what={
            'Built multiple products to deliver ƒluid rental experience for drivers and owners. Led growth efforts to 7x user base'
          }
        />
        <Co
          url="https://wonderverse.xyz"
          name="Wonderverse"
          iconReference={WonderAppIcon}
          tagline="Consumer social"
          role={'Software Engineer'}
          what={'Worked on multiple projects to '}
        />
        <Co
          url="https://honk.me"
          name="Honk"
          iconReference={HonkAppIcon}
          tagline="Consumer social"
          role={'Backend Engineer'}
          what={'I helped design and implement the realtime infrastructure at Honk using Elixir.'}
        />
      </CoWrapper>

      <h3>Open-source Projects</h3>
      <Repo
        name={'lanyard'}
        url={'https://github.com/phineas/lanyard'}
        primaryLanguage={'Elixir'}
        description="Expose your Discord presence to an API in <10 seconds (used on this site)"
      />
      <Repo
        name={'domain-lookup-tree'}
        url={'https://github.com/phineas/domain-lookup-tree'}
        primaryLanguage={'Rust'}
        description="A tree structure in Rust optimized for looking up domain names, with wildcard support"
      />
      <Repo
        name={'node_compass'}
        url={'https://github.com/hivenapp/node_compass'}
        primaryLanguage={'Elixir'}
        description="Automatic hash ring management for Elixir nodes"
      />
      <Repo
        name={'phineas.io'}
        url={'https://github.com/phineas/phineas.io'}
        primaryLanguage={'TypeScript'}
        description="This very website"
      />
    </PageWrapper>
  );
};

const CoWrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 2rem 2rem;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export default Where;
