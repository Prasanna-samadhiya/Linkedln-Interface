import FramedAvatar from "../FrameImage";
import { Checkbox, UserDesc, UserInfo, UserItem, UserName } from "./SentModalStyle";

interface Props {
  image: string;
  index: number;
  status: string;
  name: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}

function ShowSentUser(props: Props) {
  const { image, index, status, name, description, selected, onClick } = props;

  return (
    <UserItem key={index}>
      <FramedAvatar image={image} frame={status} size={40} />
      <UserInfo>
        <UserName>{name}</UserName>
        <UserDesc>{description}</UserDesc>
      </UserInfo>
      <Checkbox selected={selected} onClick={onClick}>
        {selected ? "✓" : ""}
      </Checkbox>
    </UserItem>
  );
}

export default ShowSentUser;
