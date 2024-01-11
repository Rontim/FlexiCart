import { Footer } from "flowbite-react";

function RootFooter() {
  return (
    <Footer container>
      <Footer.Copyright href="#" by="FlexiCart" year={2024} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}

export default RootFooter;
