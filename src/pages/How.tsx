import PageWrapper from './PageWrapper';
import Technology from '../components/Technology';
import {
  ElixirLogo,
  RabbitMQLogo,
  ReactLogo,
  RustLogo,
  SolidityLogo,
  TypescriptLogo,
} from '../components/Icons';
import PostgresLogo from '../assets/images/PostgresLogo.png';
import { Helmet } from 'react-helmet';

const How = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Languages</title>
      </Helmet>
      <h1>/languages</h1>
      <h2>Languages I use</h2>
      <p>
        I highly leverage new bleeding-edge technologies and languages like Elixir to stay on top of
        the game. You can find a list of my most-used technologies below.
      </p>

      {/* <Technology
        color="#9c1fa5"
        icon={<ElixirLogo />}
        name="Elixir"
        type="Realtime, Backend"
        useCase={'Building fault-tolerant realtime systems that scale out across multiple nodes'}
      /> */}

      <Technology
        color="#232340"
        icon={<ReactLogo />}
        name="React"
        type="Frontend framework"
        useCase={'Constructing stateful and durable frontends for large and interactive web apps'}
      />

      <Technology
        color="rgb(39, 118, 192)"
        icon={<ReactLogo />}
        name="Postgres"
        type="Backend, System"
        useCase={'A powerful, open source object-relational database system'}
      />

      <Technology
        color="#007acc"
        icon={<TypescriptLogo />}
        name="TypeScript"
        type="JS Framework"
        useCase={'Types for JS'}
      />

      {/* <Technology
        color="#FF6600"
        icon={<RabbitMQLogo />}
        name="RabbitMQ"
        type="Message queue"
        useCase={'Messaging between different services in a robust & durable way'}
      /> */}
    </PageWrapper>
  );
};

export default How;
