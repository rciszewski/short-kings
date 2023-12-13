import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
  H2,
  P,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <H2>{title}</H2>
        <P>Shop now</P>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
