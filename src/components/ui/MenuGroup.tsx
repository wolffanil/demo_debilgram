import React, { ReactEventHandler, useState } from "react";
import { createPortal } from "react-dom";
import FileUploader from "../forms/FileUploader";
import styled from "styled-components";

const NilArr = [
  {
    id: 34343,
    username: "dfdf",
  },
  {
    id: 34343,
    username: "dfdf",
  },
  {
    id: 34343,
    username: "dfdf",
  },
  {
    id: 34343,
    username: "dfdf",
  },
];

type MenuGroupProps = {
  isOpen: boolean;
  handleClick: () => void;
};

function MenuGroup({ isOpen, handleClick }: MenuGroupProps) {
  const [file, setFile] = useState<File[]>();

  if (!isOpen) return;

  return createPortal(
    <MenuBG
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        handleClick();
      }}
    >
      <MenuBlock
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          e.stopPropagation();
        }}
      >
        <MenuSearch>
          <input type="text" required className="menuSearch__input" />
          <img src="/search.svg" alt="search" className="menuSearch__img" />
        </MenuSearch>

        <MenuWrapper>
          {NilArr.map((n, i) => (
            <div key={i} className="menuWrapper__item">
              <p>{n.username}</p>
              <img
                src="/icons/close.svg"
                alt="delete"
                className="menuWrapper__img"
              />
            </div>
          ))}

          <FileUploader fieldChange={(file) => setFile(file)} mediaUrl="" />

          <MenuButton type="submit">Сменить фон</MenuButton>
        </MenuWrapper>
      </MenuBlock>
    </MenuBG>,
    document.body
  );
}

export default MenuGroup;

const MenuBG = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #0000006a;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const MenuBlock = styled.div`
  width: 767px;
  min-height: 773px;
  padding: 78px 95px 49px 95px;
  background-color: var(--grey-color);
  display: flex;
  flex-direction: column;
`;

const MenuSearch = styled.div`
  width: 100%;
  background-color: var(--grey-color);
  border: 1px solid var(--violet-color);
  height: 76px;
  display: flex;
  padding: 11px 24px;
  justify-content: space-between;
  align-items: center;

  .menuSearch__input {
    background-color: var(--grey-color);
    color: var(--text-color);
    font-size: 23px;
    font-weight: 400;
    width: 80%;
    outline: none;
  }

  .menuSearch__img {
    width: 51px;
    height: 51px;
    object-fit: cover;
    display: block;
    cursor: pointer;
  }
`;

const MenuWrapper = styled.div`
  margin-top: 63px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: start;
  column-gap: 32px;
  row-gap: 17px;
  flex-wrap: wrap;

  .menuWrapper__item {
    display: flex;
    background-color: #d9d9d9;
    border-radius: 17px;
    width: 171px;
    justify-content: space-between;
    align-items: center;
    padding: 11px 17px;
    color: #000000;
    font-size: 32px;
    font-weight: 400;
  }

  .menuWrapper__img {
    width: 25px;
    height: 25px;
    object-fit: cover;
    display: block;
    cursor: pointer;
  }
`;

const MenuButton = styled.button`
  margin-top: 47px;
  border-radius: 15px;
  background-color: var(--violet-color);
  padding: 18px 47px;
  display: block;
  font-size: 32px;
  font-weight: 400;
  color: #000000;
  margin-left: auto;
`;
