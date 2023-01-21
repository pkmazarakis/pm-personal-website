/* eslint-disable no-const-assign */
import { AnimatePresence, motion } from 'framer-motion';
import { KeyboardEvent, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SuccessiveType from './components/SuccessiveType';
import Nav from './components/Nav';
import Home from './pages/Home';
import Where from './pages/Where';
import How from './pages/How';
import Etc from './pages/Etc';
import Presence from './pages/Presence';
import Sakurajima from './pages/Sakurajima';
import { ChevronsRight } from './components/Icons';
import useSound from 'use-sound';
import More from './pages/More';
import { Button, ButtonGroup, createTheme, Fab, ThemeProvider } from '@mui/material';
import { DarkMode, LightMode, MusicNote } from '@mui/icons-material';
import { HotkeyContext, ThemeContext } from './utils/contexts';
import { MainComponent } from './components/MainComponent';

declare global {
  interface Window {
    gtag: any;
  }
}

const shouldPlayIntro = window.location.pathname === '/';

function App() {
  const [introEnded, setIntroEnded] = useState(!shouldPlayIntro);
  const [showHotkeys, setShowHotkeys] = useState(false);
  const [themeValue, setThemeValue] = useState('gray');

  const onKeyDown = (e: KeyboardEvent<HTMLDocument> & any) => {
    if ((e.keyCode === 9 || e.which === 9) && !introEnded) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (!shouldPlayIntro) return;

    const script = document.createElement('script');

    script.src = '/p-static/js/stars.js';
    script.async = true;

    document.body.appendChild(script);

    document.addEventListener('keydown', onKeyDown);
  }, []);

  const onIntroEnd = useCallback(() => {
    localStorage.setItem('v1:intro-completed', 'true');
    setIntroEnded(true);
  }, []);
  const soundUrl = '/p-static/sounds/cereal-killa.mp3';

  const [play, { stop, isPlaying }] = useSound(soundUrl);

  const setThemeValueToLight = () => {
    setThemeValue('light');
  };

  const setThemeValueToGray = () => {
    setThemeValue('gray');
  };

  const setThemeValueToDark = () => {
    setThemeValue('dark');
  };

  // useHotkeys(
  //   HOTKEYS.SHOW_SHORTCUTS,
  //   () => {
  //     setShowHotkeys(!showHotkeys);
  //   },
  //   [showHotkeys]
  // );
  return (
    <Wrapper>
      <Helmet defaultTitle={'Platon Mazarakis'} titleTemplate={'%s • Platon'} />
      <ThemeContext.Provider value={themeValue}>
        <ThemeProvider
          theme={
            themeValue === 'light' ? lightTheme : themeValue === 'dark' ? darkTheme : grayTheme
          }
        >
          {shouldPlayIntro ? (
            <SuccessiveTypeContainer
              transition={{ duration: 0.85 }}
              animate={{ y: introEnded ? -window.innerHeight : 0 }}
            >
              <ProgressContainer onClick={onIntroEnd}>
                <h4>
                  Skip intro <ChevronsRight />
                </h4>
              </ProgressContainer>
              <SuccessiveType
                onEnd={onIntroEnd}
                words={
                  'Welcome... my name is Platon Mazarakis. I study Symbolic Systems at Stanford University with a concentration in Product Design. My focus lies in building products that bring people together and offer unique tantalizing experiences.'
                }
                speed={1}
                userSkipped={introEnded}
              />
            </SuccessiveTypeContainer>
          ) : null}

          <motion.canvas
            transition={{ duration: 0.85 }}
            animate={{ opacity: introEnded ? 0 : 0.25 }}
            id="stars"
          />
          <Fab
            aria-label="add"
            size="small"
            style={{ position: 'absolute', bottom: 16, right: 16, backgroundColor: 'white' }}
          >
            <MusicNote
              color="action"
              onClick={() => {
                isPlaying ? stop() : play();
              }}
            />
          </Fab>
          <HotkeyContext.Provider value={null}>
            <MainComponent introEnded={introEnded}>
              <Router>
                <Nav
                  setThemeValueToLight={setThemeValueToLight}
                  setThemeValueToGray={setThemeValueToGray}
                  setThemeValueToDark={setThemeValueToDark}
                />

                <ContentWrapper>
                  <AnimatePresence>
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/where" component={Where} />
                      <Route exact path="/how" component={How} />
                      <Route exact path="/etc" component={Etc} />
                      <Route exact path="/more" component={More} />
                    </Switch>
                  </AnimatePresence>
                </ContentWrapper>
              </Router>
            </MainComponent>
          </HotkeyContext.Provider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </Wrapper>
  );
}

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      light: '#999999',
      main: '#000000',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#888',
    },
    action: {
      active: '#3AC4E8',
    },
  },
});

const grayTheme = createTheme({
  palette: {
    primary: {
      main: '#232529',
      light: '#30343C',
      dark: '#666666',
    },
    secondary: {
      light: '#3E4249',
      main: '#ffffff',
    },
    background: {
      default: '#cccccc',
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffffff',
    },
    action: {
      active: '#3AC4E8',
    },
    success: {
      main: '#30D08D',
      light: '#30D08D',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      light: '#222222',
      main: '#ffffff',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#ffffff',
      secondary: '#444',
    },
    action: {
      active: '#3AC4E8',
    },
  },
});

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #232529;

  canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 0;
  }
`;

const SuccessiveTypeContainer = styled(motion.div)`
  width: 65ch;
  height: 350px;
  padding: 2rem;
  position: relative;
  z-index: 1;
`;

const ProgressContainer = styled.div`
  vertical-align: middle;
  cursor: pointer;
  transition: color 0.2s ease;
  color: #ffffff;
  svg {
    vertical-align: middle;
    height: 19px;
  }

  &:hover {
    color: #3ac4e8;
  }
`;

const ContentWrapper = styled.div`
  margin-left: 15rem;
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;
  font-size: 1rem;
  a {
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 850px) {
    margin-left: 0px;
    padding-top: 65px;
  }
`;

export default App;
