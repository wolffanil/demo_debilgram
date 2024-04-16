import { Outlet } from "react-router-dom";
import styled from "styled-components";
import LeftSidebar from "../components/shared/LeftSidebar";

function RootLayout() {
  return (
    <Layout>
      {/* Topbar  */}
      <LeftSidebar />
      <section className="layout__section">
        <Outlet />
      </section>
      {/* Bottombar */}
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  display: flex;

  .layout__section {
    width: 100%;
    padding: 65px 0px 0px 183px;
    background-color: var(--backgraund-color);
  }
`;

export default RootLayout;
