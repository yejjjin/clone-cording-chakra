import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <Box>
        <Header />
        <Box></Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
