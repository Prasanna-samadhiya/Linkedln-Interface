import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@mui/material';
import OpenToWorkFrame from '../../assets/work.png';
import HiringFrame from '../../assets/hiring.png';

interface FramedAvatarProps {
  image: string;
  frame?: string;
  size?: number;
}

const FrameWrapper = styled.div<{ size: number }>`
  position: relative;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

const FrameImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const StyledAvatar = styled(Avatar) <{ size: number }>`
  width: ${({ size }) => size}px !important;
  height: ${({ size }) => size}px !important;
`;

const FramedAvatar: React.FC<FramedAvatarProps> = ({ image, frame, size = 48 }) => {
  return (
    <FrameWrapper size={size}>
      <StyledAvatar src={image} size={size} />
      {frame ? (
        frame === "open" ? (
          <FrameImage src={OpenToWorkFrame} alt="frame" />
        ) : frame === "hiring" ? (
          <FrameImage src={HiringFrame} alt="frame" />
        ) : null
      ) : null}
    </FrameWrapper>
  );
};

export default FramedAvatar;
