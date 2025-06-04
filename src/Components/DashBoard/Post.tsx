import { SectionTitle, StyledCard } from './DashBoardStyle';
import PostIcon from './PostIcons';
import { PostHeader, PostAvatar } from './DashBoardStyle';

interface Props {
  title: string;
  content: string;
  userImage?: string; // URL or base64 image
  userName?: string;  // for accessibility or tooltip
}

function Post({ title, content, userImage, userName }: Props) {
  return (
    <StyledCard>
      <PostHeader>
        <PostAvatar alt={userName || 'User Avatar'} src={userImage || '/default-avatar.png'} />
        <SectionTitle>{title}</SectionTitle>
      </PostHeader>
      <p>{content}</p>
      <PostIcon />
    </StyledCard>
  );
}

export default Post;
