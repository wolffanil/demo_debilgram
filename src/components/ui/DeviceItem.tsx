import styled from "styled-components";

type DeviceItemProps = {
  browser: string;
  device: string;
  ip: string;
};

function DeviceItem({ browser, device, ip }: DeviceItemProps) {
  return (
    <ItemLi>
      <ItemImg src="/robot.svg" alt="robot" />

      <ItemWrapper>
        <ItemP>{device}</ItemP>
        <p>
          {" "}
          {ip} <br /> {browser}
        </p>
      </ItemWrapper>

      <ItemButton>Выйти</ItemButton>
    </ItemLi>
  );
}

const ItemLi = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 172px;
  margin-bottom: 100px;
  background-color: var(--backgraund-color);
`;

const ItemImg = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 30px;
  color: var(--text-color);
  font-size: 40px;
  font-weight: 400;
`;

const ItemP = styled.p`
  margin-bottom: 19px;
  font-family: "montserrat";
  font-weight: 400;
`;

const ItemButton = styled.button`
  padding: 15px 84px;
  background-color: var(--violet-color);
  border-radius: 20px;
  color: #212121;
  font-size: 40px;
  font-weight: 400;
  display: block;
  margin-left: auto;
`;

export default DeviceItem;
