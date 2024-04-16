import styled from "styled-components";
import DeviceItem from "../../components/ui/DeviceItem";

const deviceArray = [
  {
    device: "Mac os",
    ip: "45345353535",
    browser: "Chrome",
  },

  {
    device: "Windows",
    ip: "45345353535",
    browser: "Chrome",
  },
  {
    device: "Linux",
    ip: "45345353535",
    browser: "Chrome",
  },
];

function DevicePage() {
  return (
    <Device>
      <DeviceTitle>Устройства</DeviceTitle>

      <DeviceWrapper>
        {deviceArray.map((device, i) => (
          <DeviceItem
            browser={device.browser}
            ip={device.ip}
            device={device.device}
            key={i}
          />
        ))}
      </DeviceWrapper>
    </Device>
  );
}

const Device = styled.div`
  width: 840px;
  background-color: var(--backgraund-color);
`;

const DeviceTitle = styled.h1`
  color: var(--violet-color);
  font-size: 45px;
  font-weight: 400;
  font-family: "redoctober";
`;

const DeviceWrapper = styled.ul`
  overflow-y: scroll;
  background-color: var(--backgraund-color);
  width: 100%;
  margin-top: 158px;
  column-gap: 110px;
  min-height: 724px;
`;

export default DevicePage;
