import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Box, Grid, GridItem } from "@chakra-ui/react";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Grid
        templateAreas={`"header header"
                  "main main"
                  "footer footer"`}
      >
        <GridItem pl="2" area={"header"}>
          <Navbar />
        </GridItem>
        <GridItem pl="2" area={"main"}>
          {children}
        </GridItem>
        <Box h="60px" />
        <GridItem pl="2" area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
}
