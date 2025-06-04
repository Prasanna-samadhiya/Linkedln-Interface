import { CommentButtonGroup, DislikeButtonGroup, LikeButtonGroup, PostIcons } from './DashBoardStyle'
import { IconButton, Typography } from '@mui/material'
import { ChatBubbleOutline, ThumbDown, ThumbUp } from '@mui/icons-material'

interface Props {}

function PostIcon(props: Props) {
    const {} = props

    return (
        <PostIcons>

                    <LikeButtonGroup>
                        <IconButton size="small" aria-label="like">
                            <ThumbUp fontSize="small" />
                        </IconButton>
                        <Typography variant="caption">12</Typography>
                    </LikeButtonGroup>

                    <CommentButtonGroup>
                    <IconButton size="small" aria-label="comment">
                        <ChatBubbleOutline fontSize="small" />
                    </IconButton>
                    <Typography variant="caption">5</Typography>
                    </CommentButtonGroup>
                    
                    <DislikeButtonGroup>
                    <IconButton size="small" aria-label="dislike">
                        <ThumbDown fontSize="small" />
                    </IconButton>
                    <Typography variant="caption">3</Typography>
                    </DislikeButtonGroup>
  
                </PostIcons>
    )
}

export default PostIcon
