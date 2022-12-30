import * as React from 'react';
import styled, { css } from 'styled-components';

import { SegmentIcon } from './SegmentIcon';
// import { Colors, presentAccentColor, videoAccentColor, designAccentColor } from '../ds/Colors';
import { useTheme } from '@mui/material';

export interface SegmentedControlProps {
  id: string;
  product: 'present' | 'video' | 'design';
  type: 'small' | 'large' | 'custom';
  layout: 'label' | 'both' | 'icon';

  width: number;
  height: number;
  position: number;
  padding: string;
  backgroundColor: any;

  icons: string[];
  segments: string[];
  defaultSegment: number;
  disabled: boolean;
  isSelected: boolean;

  onSegment1Tap: () => void;
  onSegment2Tap: () => void;

  onSegment3Tap: () => void;
}

const smallComponentSize = 24;
const largeComponentSize = 32;
const iconSize = 24;
const borderRadius = 8;
const padding = 2;
const iconPadding = 16;

const OuterContainer = styled.div<SegmentedControlProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  z-index: 1000;
  background-color: #222222;
  border-radius: ${borderRadius}px;
  margin: 0;
  padding: ${padding}px;
  overflow: hidden;
  box-sizing: border-box;
`;

const InnerContainer = styled.div<SegmentedControlProps>`
  position: relative;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

const SegmentContainer = styled.div<SegmentedControlProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  padding: ${(props) => props.padding};
  border-radius: ${borderRadius - 2}px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  z-index: 1;
  cursor: pointer;
  transition: all 100ms linear;
  transition-delay: 100ms;

  :active {
    box-shadow: 0 0 0 2px rgba(30, 85, 235, 0.4);
  }
`;

const SegmentLabel = styled.div<SegmentedControlProps>`
  width: auto;
  height: 100%;

  ${(props) =>
    props.type === 'small'
      ? css`
          font-family: 'Monaco';
          font-size: 12px;
          line-height: 1.33;
        `
      : css`
          font-family: 'Monaco';
          font-size: 12px;
          line-height: 1.71;
        `}

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${(props) =>
    props.isSelected
      ? props.product === 'present'
        ? `#777777`
        : props.product === 'video'
        ? `#777777`
        : `#777777`
      : `#777777`};

  pointer-events: none;
  user-select: none;
  transition: all 300ms cubic-bezier(0.86, 0, 0.07, 1);
`;

const SelectedSegment = styled.div<SegmentedControlProps>`
  position: absolute;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  left: ${(props) => props.position}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: ${borderRadius - 2}px;
  box-shadow: 0 0.5px 2px 0 rgba(5, 18, 37, 0.24), 0 0 0 1px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  transition: left 300ms cubic-bezier(0.86, 0, 0.07, 1);
`;

const SegmentSeparator = styled.div<SegmentedControlProps>`
  position: absolute;
  width: 1px;
  height: ${(props) => props.height}px;
  left: ${(props) => props.position}px;
  background-color: #777777;
  transition: all 300ms cubic-bezier(0.86, 0, 0.07, 1);
`;

export function SegmentedControl(props: SegmentedControlProps) {
  const {
    id,
    product,
    type,
    layout,

    width,
    height,

    icons,
    segments,
    defaultSegment,
    disabled,

    onSegment1Tap,
    onSegment2Tap,
    onSegment3Tap,
  } = props;

  const theme = useTheme();

  const allSegments = [
    { text: segments[0], defaultEvent: onSegment1Tap, event: onSegment1Tap },
    { text: segments[1], defaultEvent: onSegment2Tap, event: onSegment2Tap },
    { text: segments[2], defaultEvent: onSegment3Tap, event: onSegment3Tap },
  ].slice(0, segments.length);

  const [selected, setSelected] = React.useState(defaultSegment - 1);

  React.useEffect(() => {
    setSelected(defaultSegment - 1);
  }, [defaultSegment]);

  return segments.length > 0 ? (
    <div style={{ display: 'flex', alignItems: 'center', alignSelf: 'center' }}>
      <OuterContainer
        theme={theme}
        {...props}
        height={
          type === 'small' ? smallComponentSize : type === 'large' ? largeComponentSize : height
        }
        width={
          layout === 'icon'
            ? (iconSize + iconPadding + padding * 2) * segments.length + padding * 2
            : width
        }
      >
        <InnerContainer
          {...props}
          height={
            type === 'small'
              ? smallComponentSize - padding * 2
              : type === 'large'
              ? largeComponentSize - padding * 2
              : height - padding * 2
          }
          width={
            layout === 'icon'
              ? (iconSize + iconPadding + padding * 2) * segments.length
              : width - padding * 2
          }
        >
          <SelectedSegment
            {...props}
            theme={theme}
            height={
              type === 'small'
                ? smallComponentSize - padding * 2
                : type === 'large'
                ? largeComponentSize - padding * 2
                : height - padding * 2
            }
            width={
              layout === 'icon'
                ? iconSize + iconPadding + padding * 2
                : (width - padding * 2) / segments.length
            }
            position={
              layout === 'icon'
                ? (iconSize + iconPadding + padding * 2) * selected
                : ((width - padding * 2) / segments.length) * selected
            }
          />
          {allSegments.map((segment, i) => {
            const isSelected = i === selected;
            return (
              <React.Fragment key={i}>
                <SegmentContainer
                  {...props}
                  height={
                    type === 'small'
                      ? smallComponentSize - padding * 2
                      : type === 'large'
                      ? largeComponentSize - padding * 2
                      : height - padding * 2
                  }
                  width={
                    layout === 'icon'
                      ? iconSize + iconPadding + padding * 2
                      : width / segments.length
                  }
                  padding={layout === 'icon' ? '2px' : '2px 8px 2px 8px'}
                  role="button"
                  onClick={
                    disabled
                      ? () => {}
                      : () => {
                          setSelected(i);
                          if (segment.event) segment.event();
                        }
                  }
                >
                  {/* {layout !== 'label' ? (
                    <SegmentIcon
                      type={icons[i]}
                      color={
                        isSelected
                          ? product === 'present'
                            ? `${presentAccentColor}`
                            : product === 'video'
                            ? `${videoAccentColor}`
                            : `${designAccentColor}`
                          : `${Colors.placeholderLabelColor}`
                      }
                    />
                  ) : (
                    ''
                  )} */}
                  {layout !== 'icon' ? (
                    <SegmentLabel {...props} theme={theme} type={type} isSelected={isSelected}>
                      {segment.text}
                    </SegmentLabel>
                  ) : (
                    ''
                  )}
                </SegmentContainer>
                {segments.length > 1 && i !== segments.length - 1 && (
                  <SegmentSeparator
                    {...props}
                    height={
                      type === 'small'
                        ? smallComponentSize - 12
                        : type === 'large'
                        ? largeComponentSize - 12
                        : height - 12
                    }
                    position={
                      layout === 'icon'
                        ? (iconSize + iconPadding + padding * 2) * (i + 1)
                        : ((width - padding * 2) / segments.length) * (i + 1)
                    }
                    backgroundColor={selected !== i && selected !== i + 1 ? '#777777' : 'null'}
                  />
                )}
              </React.Fragment>
            );
          })}
        </InnerContainer>
      </OuterContainer>
    </div>
  ) : (
    <div />
  );
}

SegmentedControl.displayName = 'Segmented Control';

SegmentedControl.defaultProps = {
  product: 'present',
  type: 'large',
  layout: 'label',

  width: 240,
  height: 32,

  icons: ['public'],
  segments: ['Light', 'Gray', 'Dark'],
  defaultSegment: 1,
  disabled: false,
};
