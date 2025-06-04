import { Button } from '@mui/material';
import {
    DashboardContainer,
    Sidebar,
    FeedContainer,
    SuggestionsContainer,
    StyledCard,
    SectionTitle,
    CreatePostContainer,
    PostTextField
} from './DashBoardStyle';
import Post from './Post';

const Dashboard = () => {
    return (
        <DashboardContainer>
            {/* Left Sidebar */}
            <Sidebar>
                <StyledCard>
                    <SectionTitle>Suggestions</SectionTitle>
                    <ul>
                        <li>User 1</li>
                        <li>User 2</li>
                        <li>User 3</li>
                    </ul>
                </StyledCard>
                <StyledCard>
                    <SectionTitle>Trending</SectionTitle>
                    <ul>
                        <li>#WebDev</li>
                        <li>#AI</li>
                        <li>#ReactJS</li>
                    </ul>
                </StyledCard>
            </Sidebar>

            {/* Main Feed */}
            <FeedContainer>
                <CreatePostContainer>
                <PostTextField
                    label="What's on your mind?"
                    multiline
                    rows={3}
                    variant="outlined"
                />
                <Button variant="contained" >
                    Post
                </Button>
            </CreatePostContainer>
                <Post title="User 1" content="This is the content of the first post." />
                <Post title="User 2" content="This is the content of the first post." />
            </FeedContainer>

            {/* Right Sidebar */}
            <SuggestionsContainer>
                <StyledCard>
                    <SectionTitle>Who to Follow</SectionTitle>
                    <ul>
                        <li>Developer A</li>
                        <li>Engineer B</li>
                        <li>Coder C</li>
                    </ul>
                </StyledCard>
            </SuggestionsContainer>
        </DashboardContainer>
    );
};

export default Dashboard;