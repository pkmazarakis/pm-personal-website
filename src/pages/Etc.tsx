import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import PageWrapper from './PageWrapper';

const Etc = () => (
  <PageWrapper forceReadableWidth>
    <Helmet>
      <title>/Contact</title>
    </Helmet>
    <h1>/contact</h1>
    <h2>Thanks</h2>
    <p>Hope you enjoyed checking out my website</p>
    <h2>Contact</h2>
    <p>
      <ul>
        <li>
          email: <a href="mailto:pkmazarakis@gmail.com">pkmazarakis@gmail.com</a>
        </li>
        <li>
          twitter: <a href="https://www.twitter.com/PMazarakis">twitter.com/PMazarakis</a>
        </li>
      </ul>
      <a href={'https://twitter.com/messages/1304549502905470978-1304549502905470978?text='}>
        click here
      </a>{' '}
      to DM me on Twitter.
    </p>
  </PageWrapper>
);

export default Etc;
