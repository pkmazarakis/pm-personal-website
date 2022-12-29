import PageWrapper from './PageWrapper';
import Co from '../components/Co';
import styled from 'styled-components';
import SocialPassportAppIcon from '../assets/images/sp-app-icon.png';
import DoNotPayAppIcon from '../assets/images/dnp-app-icon.png';

import WonderAppIcon from '../assets/images/wonder-app-icon.png';
import OXOAppIcon from '../assets/images/oxo-app-icon.png';
import AdvanceAppIcon from '../assets/images/advanceHealthLogo.png';

import RaymetricsIcon from '../assets/images/RaymetricsLogo.png';

import Repo from '../components/Repo';
import { Helmet } from 'react-helmet';

const Where = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Experiences</title>
      </Helmet>
      <h1>/experiences</h1>
      <h2>Where I've worked</h2>

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
          url="https://advancehealth.landen.co"
          name="ADVANCE"
          iconReference={AdvanceAppIcon}
          tagline="Med Tech"
          role={'CTO, Co-founder & Developer'}
          what={
            'Used Amazon Alexas as personal assistants in 3 major hospitals to remotely and efficiently take care of patients'
          }
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
          what={
            'Worked on multiple projects to build the best productivity tools for DAOs and workspaces'
          }
        />
        <Co
          url="https://raymetrics.com/"
          name="Raymetrics"
          iconReference={RaymetricsIcon}
          tagline="Consumer social"
          role={'Software Engineer'}
          what={'Developed software for LIDAR equipment to examine the atmosphere'}
        />
      </CoWrapper>

      <h3>Projects in development</h3>
      <Repo
        name={'social passport'}
        url={'https://socialpassport.app'}
        primaryLanguage={'react - firebase - node'}
        description="Connect college students with one tap"
      />
      <Repo
        name={'studyo'}
        url={'https://studyo-frontend.vercel.app/'}
        primaryLanguage={'react - postgres - node'}
        description="A todo list x calendar collab"
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
