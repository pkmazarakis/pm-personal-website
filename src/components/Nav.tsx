import { motion, PanInfo } from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GitHubLogo, KeyIcon, MenuIcon, NavigationIcon, TwitterLogo, XIcon } from './Icons';
import useSound from 'use-sound';
import ContentLoader from 'react-content-loader';
import { Button, ButtonGroup, Switch, Typography, useTheme } from '@mui/material';
import { SegmentedControl } from './SegmentedControl';

const pathnameOffsets: { [key: string]: number } = {
  '/': 0,
  '/where': 39,
  '/how': 78,
  '/more': 117,
  '/etc': 156,
};

const Nav = ({ setThemeValueToLight, setThemeValueToGray, setThemeValueToDark }) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const theme = useTheme();

  const [playSwitchPageSound] = useSound('/p-static/sounds/switch-page.mp3');

  const [dragYOffset, setDragYOffset] = useState(0);
  const [openOnMobile, setOpenOnMobile] = useState(false);
  const [presenceActive, setPresenceActive] = useState(false);

  const dragConstraintsRef = useRef(null);

  useEffect(() => {
    if (openOnMobile) setOpenOnMobile(false);
    playSwitchPageSound();
  }, [pathname]);

  const pageIndicatorOffset = useMemo(
    () => (pathname ? pathnameOffsets[pathname] ?? -180 : 0),
    [pathname]
  );

  const pageIndicatorOffsetWithDecoration = useMemo(
    () => 71 + 33 + pageIndicatorOffset - dragYOffset,
    [pageIndicatorOffset, dragYOffset]
  );

  const onPageIndicatorDragEnd = useCallback(
    (_event, info: PanInfo) => {
      const goal = pageIndicatorOffset + info.offset.y;

      const closest = Object.entries(pathnameOffsets).reduce(
        ([prevPath, prevOffset], [curPath, curOffset]) => {
          return Math.abs(curOffset - goal) < Math.abs(prevOffset - goal)
            ? [curPath, curOffset]
            : [prevPath, prevOffset];
        }
      );

      if (closest[0] === pathname) return;

      setDragYOffset(dragYOffset + info.offset.y + info.velocity.y);
      history.push(closest[0]);
    },
    [history, pageIndicatorOffset, dragYOffset, pathname]
  );

  const toggleMobileMenu = useCallback(() => setOpenOnMobile(!openOnMobile), [openOnMobile]);

  return (
    <>
      <MobileHeader theme={theme}>
        <Title>Platon Mazarakis</Title>
        {openOnMobile ? (
          <XIcon onClick={toggleMobileMenu} />
        ) : (
          <MenuIcon onClick={toggleMobileMenu} />
        )}
      </MobileHeader>
      <Container openOnMobile={openOnMobile} theme={theme}>
        {!openOnMobile ? (
          <PageIndicator
            whileHover={{ width: 3 }}
            drag="y"
            onDragEnd={onPageIndicatorDragEnd}
            dragConstraints={dragConstraintsRef}
            animate={{ top: pageIndicatorOffsetWithDecoration }}
          />
        ) : null}
        <Items>
          {!openOnMobile ? (
            <Row>
              <Title>Platon Mazarakis</Title>
              {/* <IconButton>
              <ChevronDown />
            </IconButton> */}
            </Row>
          ) : null}
          <Row>
            <Location
              target="_blank"
              href={`https://www.google.com/maps/search/${encodeURIComponent('Manhattan, NY')}`}
              rel="noreferrer"
            >
              <NavigationIcon />
              <h4 style={{ color: theme.palette.secondary.main }}>Manhattan, NY</h4>
            </Location>
          </Row>

          <div ref={dragConstraintsRef}>
            <Page active={pathname === '/' ? 1 : 0} theme={theme} to="/">
              what I do
            </Page>
            <Page active={pathname === '/where' ? 1 : 0} theme={theme} to="/where">
              where I've done it
            </Page>
            <Page active={pathname === '/how' ? 1 : 0} theme={theme} to="/how">
              how I do it
            </Page>
            <Page active={pathname === '/more' ? 1 : 0} theme={theme} to="/more">
              more
            </Page>
            <Page active={pathname === '/etc' ? 1 : 0} theme={theme} to="/etc">
              contact
            </Page>
          </div>

          <Icons>
            <a href="https://twitter.com/PMazarakis">
              <TwitterLogo />
            </a>
            <a href="https://github.com/pkmazarakis">
              <GitHubLogo />
            </a>
            <a href="https://www.socialpassport.me/profile/5DXzRmjEtvX4bvkQXq0dqJLPRC02">
              <KeyIcon />
            </a>
          </Icons>
          <SegmentedControl
            id={'theme'}
            onSegment1Tap={() => {
              setThemeValueToLight();
            }}
            onSegment2Tap={() => {
              setThemeValueToGray();
            }}
            onSegment3Tap={() => {
              setThemeValueToDark();
            }}
            backgroundColor={undefined}
            position={0}
            width={200}
            padding={''}
            isSelected={false}
          />
        </Items>
      </Container>
    </>
  );
};

const Container = styled.aside<{ openOnMobile: boolean }>`
  display: inline-block;
  box-sizing: border-box;
  flex-direction: column;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 15rem;
  border-right: 1px solid #101010;
  height: 100vh;

  @media (max-width: 850px) {
    display: ${({ openOnMobile }) => (openOnMobile ? 'block' : 'none')};
    background-color: ${(props) => props.theme.palette.primary.main};
    backdrop-filter: blur(7px);
    z-index: 1;
    top: 65px;
    width: 100%;
    height: calc(100% - 65px);
  }
`;

const MobileHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  top: 0;
  display: flex;
  padding: 2rem;
  box-sizing: border-box;
  width: 100%;
  height: 65px;
  background-color: ${(props) => props.theme.palette.primary.main};
  backdrop-filter: blur(5px);
  border-bottom: 1px solid #101010;
  flex-shrink: 0;
  z-index: 1;

  svg {
    margin-left: auto;
    cursor: pointer;
    color: #ccc;
  }

  @media (min-width: 850px) {
    display: none;
  }
`;

const PageIndicator = styled(motion.div)`
  width: 1px;
  height: 39px;
  background-color: #fff;
  position: absolute;
  right: -1px;
  cursor: pointer;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-weight: 600;
  padding: 10px 0px;
`;

const Location = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: 500;
  height: 19px;
  font-size: 14px;
  margin-bottom: 15px;
  user-select: none;

  color: white;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }

  svg:first-child {
    height: 18px;
    width: 18px;
    margin-right: 10px;
    color: #ff65b2;
  }
`;

const Page = styled(Link)<{ active: number; theme: any }>`
  color: ${({ active, theme }) =>
    active ? theme.palette.text.primary : theme.palette.text.secondary};
  padding: 10px 0px;
  display: flex;

  &:hover {
    /* background-color: #fff; */
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

const Icons = styled.div`
  margin-top: auto;
  color: #ccc;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem 0;

  svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
    color: #ccc;

    &:hover {
      color: #fff;
    }
  }
`;

export default Nav;
