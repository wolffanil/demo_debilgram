import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

type MessageItemProps = {
  img: string;
  name: string;
  data: number;
  message: string;
  userId: number;
  myId: number;
};

function MessageItem({
  userId,
  img,
  name,
  data,
  message,
  myId,
}: MessageItemProps) {
  const isMyMessage = userId === myId;

  return (
    <StyleMessageItem isMyMessage={isMyMessage}>
      <NavLink to={isMyMessage ? "/profile" : `/users/${userId}`}>
        <MessageItemImg src={img} alt="profile" />
      </NavLink>
      <MessageItemWrapper>
        <div className="messageItem__info">
          <p className="messageItem__name">{name}</p>
          <p>{data}</p>
        </div>
        <p className="messageItem__message">{message}</p>
      </MessageItemWrapper>
    </StyleMessageItem>
  );
}

const StyleMessageItem = styled.li<{ isMyMessage: boolean }>`
  display: flex;
  min-height: 89px;
  min-width: 290px;
  margin-bottom: 40px;
  column-gap: 17px;
  align-items: center;

  ${(props) =>
    props.isMyMessage
      ? css`
          margin-left: auto;
        `
      : css`
          margin-right: auto;
        `}
`;

const MessageItemImg = styled.img`
  cursor: pointer;
  width: 88px;
  height: 88px;
  object-fit: cover;
  border-radius: 80px;
`;

const MessageItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "montserrat";
  color: var(--text-color);
  font-size: 25px;
  font-weight: 400;
  row-gap: 18px;

  .messageItem__info {
    display: flex;
    column-gap: 20px;
    align-items: center;
  }

  .messageItem__name {
    color: var(--violet-color);
    font-size: 35px;
  }

  .messageItem__message {
    font-size: 30px;
  }
`;

export default MessageItem;
