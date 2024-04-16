import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type UserItemProps = {
  img: string;
  name: string;
  username: string;
  id: number;
};

function UserItem({ id, img, name, username }: UserItemProps) {
  const navigate = useNavigate();
  return (
    <UserItemLi>
      <UserItemImg
        src={img}
        alt="profile"
        onClick={() => navigate(`/users/${id}`)}
      />

      <UserItemWrapper>
        <p>{name}</p>

        <UserItemNik>{username}</UserItemNik>
      </UserItemWrapper>

      <UserItemButton>
        <img
          src="/nav/chats.svg"
          alt="chat"
          onClick={() => navigate(`/chats/${id}`)}
        />
      </UserItemButton>
    </UserItemLi>
  );
}

const UserItemLi = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  height: 120px;
  padding: 20px 27px 0px 12px;
  border-top: 1px solid var(--violet-color);
`;

const UserItemImg = styled.img`
  border-radius: 80px;
  width: 95px;
  height: 95px;
  cursor: pointer;
`;

const UserItemWrapper = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  row-gap: 22px;
  font-size: 40px;
  font-weight: 400;
  font-family: "montserrat";
  color: var(--text-color);
`;

const UserItemNik = styled.p`
  font-size: 30px;
`;

const UserItemButton = styled.button`
  display: block;
  background-color: var(--backgraund-color);
  width: 58px;
  height: 58px;
  object-fit: cover;
  margin-left: auto;
`;

export default UserItem;
