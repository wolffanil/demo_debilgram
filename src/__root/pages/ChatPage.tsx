import { NavLink } from "react-router-dom";
import MessageItem from "../../components/ui/MessageItem";
import styled, { css } from "styled-components";
import MenuGroup from "../../components/ui/MenuGroup";
import { useState } from "react";

const messageArr = [
  {
    img: "/profile-placeholder.svg",
    name: "vfvffv",
    data: 454545,
    message: "Good",
    userId: 34344,
  },

  {
    img: "/profile-placeholder.svg",
    name: "vfvffv",
    data: 454545,
    message: "Good",
    userId: 445,
  },

  {
    img: "/profile-placeholder.svg",
    name: "vfvffv",
    data: 454545,
    message: "Good",
    userId: 34344,
  },
  {
    img: "/profile-placeholder.svg",
    name: "vfvffv",
    data: 454545,
    message: "Good",
    userId: 34344,
  },

  {
    img: "/profile-placeholder.svg",
    name: "vfvffv",
    data: 454545,
    message: "Good",
    userId: 445,
  },

  {
    img: "/profile-placeholder.svg",
    name: "vfvffv",
    data: 454545,
    message: "Good",
    userId: 34344,
  },
  {
    img: "/profile-placeholder.svg",
    name: "vfvffv",
    data: 454545,
    message: "Good",
    userId: 34344,
  },

  {
    img: "/profile-placeholder.svg",
    name: "vfvffv",
    data: 454545,
    message: "Good",
    userId: 445,
  },

  {
    img: "/profile-placeholder.svg",
    name: "vfvffv",
    data: 454545,
    message: "Good",
    userId: 34344,
  },
];

function ChatPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    if (isOpen) {
      document.body.style.overflowY = "scroll";
    } else {
      document.body.style.overflowY = "hidden";
    }

    setIsOpen((o) => !o);
  };

  const isGroup = true;
  const userId = 3434;
  const myId = 445;

  return (
    <Chat>
      <ChatHeader>
        {isGroup ? (
          <img
            className="chat__img"
            src="/profile-placeholder.svg"
            alt="profile"
            onClick={handleClick}
          />
        ) : (
          <NavLink to={`/users/${userId}`}>
            <img
              className="chat__img"
              src="/profile-placeholder.svg"
              alt="profile"
            />
          </NavLink>
        )}

        <div className="chat__info">
          <p>Имя пользователя</p>
          <p className="chat__online">online</p>
        </div>
      </ChatHeader>

      <ChatBlock>
        {messageArr.map((m, i) => (
          <MessageItem myId={myId} {...m} key={i} />
        ))}
      </ChatBlock>

      <ChatSend>
        <input
          className="chatSend__input"
          type="text"
          placeholder="Написать сообщение"
        />

        <ChatIcons>
          <button className="chatIcons__button">
            <img
              src="/icons/smile.svg"
              alt="smile"
              className="chatIcons__img"
            />
          </button>
          <button type="submit" className="chatIcons__button">
            <img src="/icons/send.svg" alt="send" className="chatIcons__img" />
          </button>
        </ChatIcons>
      </ChatSend>

      <MenuGroup isOpen={isOpen} handleClick={handleClick} />
    </Chat>
  );
}

const Chat = styled.div`
  width: 920px;
  background-color: var(--backgraund-color);
`;

const ChatHeader = styled.header`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--violet-color);
  padding-right: 15px;
  padding-left: 15px;
  column-gap: 157px;

  .chat__img {
    height: 95px;
    width: 95px;
    object-fit: cover;
    border-radius: 80px;
    display: block;
  }

  .chat__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 386px;
    color: var(--text-color);
    font-family: "monsterrat", sans-serif;
    font-size: 40px;
    font-weight: 400;
    row-gap: 15px;
  }

  .chat__online {
    font-size: 25px;
  }
`;

const ChatBlock = styled.ul<{ background?: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 560px;
  overflow-y: scroll;
  background: ${(props) => props.background || css`var(--backraund-color)`};
  margin-top: 94px;
`;

const ChatSend = styled.div`
  border: 1px solid var(--violet-color);
  background-color: var(--grey-color);
  width: 100%;
  height: 116px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 31px 45px 31px 45px;
  margin-top: 77px;

  .chatSend__input {
    outline: none;
    font-size: 30px;
    font-weight: 400;
    font-family: "montserrat", sans-serif;
    color: var(--text-color);
    background-color: var(--grey-color);
    width: 80%;
    height: 100%;
  }
`;

const ChatIcons = styled.div`
  width: 134px;
  display: flex;
  column-gap: 25px;

  .chatIcons__img {
    width: 54px;
    height: 54px;
    object-fit: cover;
  }

  .chatIcons__button {
    background-color: var(--grey-color);
  }
`;

export default ChatPage;
