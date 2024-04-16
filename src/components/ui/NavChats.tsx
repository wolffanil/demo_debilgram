import { NavLink } from "react-router-dom";
import styled from "styled-components";

type NavChatsProps = {
  setSettings: (b: boolean) => void;
};

function NavChats({ setSettings }: NavChatsProps) {
  return (
    <>
      <Wrapper>
        <li className="nav__item">
          <img src="" alt="" className="nav__img" />
          <div className="nav__wrapper">
            <p>Имя</p>
            <p className="nav__subname">Ник</p>
          </div>
          <button className="nav__chat">
            <NavLink to={`/chats/${23}`}>
              <img src="/nav/chats.svg" alt="newChat" />
            </NavLink>
          </button>
        </li>

        <li className="nav__item">
          <img src="" alt="" className="nav__img" />
          <div className="nav__wrapper">
            <p>Имя</p>
            <p className="nav__subname">Ник</p>
          </div>
          <button className="nav__chat">
            <NavLink to={`/chats/${23}`}>
              <img src="/nav/chats.svg" alt="newChat" />
            </NavLink>
          </button>
        </li>

        <li className="nav__item">
          <img src="" alt="" className="nav__img" />
          <div className="nav__wrapper">
            <p>Имя</p>
            <p className="nav__subname">Ник</p>
          </div>
          <button className="nav__chat">
            <NavLink to={`/chats/${23}`}>
              <img src="/nav/chats.svg" alt="newChat" />
            </NavLink>
          </button>
        </li>
      </Wrapper>

      <Button onClick={() => setSettings(true)}>
        <img src="/nav/settings.svg" alt="settings" />
        Настройки
      </Button>
    </>
  );
}

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 82px;
  row-gap: 25px;

  .nav__item {
    display: flex;
    width: 445px;
    align-items: center;
  }

  .nav__img {
    border-radius: 90px;
    background-color: #ffffff;
    width: 105px;
    height: 105px;
  }

  .nav__wrapper {
    display: flex;
    align-items: start;
    flex-direction: column;
    column-gap: 2px;
    color: var(--text-color);
    font-size: 30px;
    margin-left: 43px;
    margin-right: 135px;
  }

  .nav__subname {
    font-size: 20px;
  }

  .nav__chat {
    background-color: var(--grey-color);
  }
`;

const Button = styled.button`
  margin-top: 87px;
  display: flex;
  column-gap: 25px;
  color: var(--text-color);
  align-items: center;
  background-color: var(--grey-color);
  font-size: 30px;
  border: none;
  outline: none;
`;

export default NavChats;
