import Header from "../Header/Header";

function Layout({ children }) {
  console.log(children);
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
