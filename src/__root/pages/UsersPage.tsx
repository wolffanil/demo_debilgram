import styled from "styled-components";
import UserItem from "../../components/ui/UserItem";

const usersArray = [
  {
    img: "/profile-placeholder.svg",
    name: "dfdf",
    username: "dfdfbb",
    id: 4343,
  },

  {
    img: "/profile-placeholder.svg",
    name: "dfdf",
    username: "dfdfbb",
    id: 4343,
  },

  {
    img: "/profile-placeholder.svg",
    name: "dfdf",
    username: "dfdfbb",
    id: 4343,
  },

  {
    img: "/profile-placeholder.svg",
    name: "dfdf",
    username: "dfdfbb",
    id: 4343,
  },
];

function UsersPage() {
  return (
    <Users>
      <UsersTitle>ПОЛЬЗОВАТЕЛИ</UsersTitle>

      <UsersBlock>
        {usersArray.map((user, i) => (
          <UserItem
            key={i}
            id={user.id}
            name={user.name}
            username={user.username}
            img={user.img}
          />
        ))}
      </UsersBlock>
    </Users>
  );
}

const Users = styled.div`
  width: 920px;
  background-color: var(--backgraund-color);
`;

const UsersTitle = styled.h1`
  font-size: 45px;
  font-weight: 400;
  font-family: "redoctober";
  color: var(--violet-color);
`;

const UsersBlock = styled.div`
  margin-top: 72px;
  overflow-y: scroll;
  height: 855px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-items: start;
  width: 100%;
`;

export default UsersPage;
