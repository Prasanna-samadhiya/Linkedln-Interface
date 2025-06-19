// connectionstyle.tsx
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  background-color: #f5f3f0;
  min-height: 81vh
`;

export const ConnectionsContainer = styled.div`
  flex: 2;
  background-color:white;
  padding:20px;
  border-radius:10px;
  h2 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`;

export const SortBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  span {
    font-weight: 500;
  }
  a {
    color: #0a66c2;
    font-weight: 500;
    text-decoration: none;
  }
`;

export const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  flex: 1;
`;

export const ConnectionCard = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background: white;
  border-bottom: 1px solid #eee;
  gap: 1rem;
`;

export const AvatarImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  flex: 1;
`;

export const Name = styled.div`
  font-weight: bold;
  font-size: 1rem;
`;

export const Description = styled.div`
  font-size: 0.9rem;
  margin-top: 0.3rem;
`;

export const Meta = styled.div`
  font-size: 0.8rem;
  color: gray;
  margin-top: 0.2rem;
`;

export const MessageButton = styled.button`
  padding: 0.4rem 1rem;
  border: 1px solid #0a66c2;
  background: white;
  color: #0a66c2;
  border-radius: 2rem;
  font-weight: 500;
  cursor: pointer;
`;

export const RightPanel = styled.div`
  flex: 1;
`;

export const AdCard = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RetryButton = styled.button`
  margin-top: 1rem;
  background-color: white;
  border: 1px solid #0a66c2;
  color: #0a66c2;
  padding: 0.4rem 1rem;
  border-radius: 1.5rem;
  font-weight: bold;
  cursor: pointer;
`;
