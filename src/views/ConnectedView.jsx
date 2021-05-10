import React from "react";

import Layout from "./Layout";
import Navigation from "../components/Navigation";

const menu = Navigation();

// function MasterLayoutHOC(WrappedComponent, pageName) {
//   const MasterLayout = () => {
//     const layoutProps = {
//       menu,
//       pageName,
//     };
//     return (
//       <Layout {...layoutProps}>
//         <WrappedComponent {...this.props} />
//       </Layout>
//     );
//   };
// }

const MasterLayoutHOC = (WrappedComponent, pageName) => {
  const layoutProps = {
    menu,
    pageName,
  };

  return (
    <Layout {...layoutProps}>
      <WrappedComponent />
    </Layout>
  );
};

export default MasterLayoutHOC;
