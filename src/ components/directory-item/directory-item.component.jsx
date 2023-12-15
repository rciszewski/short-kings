import { useNavigate } from "react-router-dom";
import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
  H2,
  P,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;

  const navTo = useNavigate();
  const onNavigateHandler = () => navTo(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageurl={imageUrl} />
      <Body>
        <H2>{title}</H2>
        <P>Shop now</P>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
