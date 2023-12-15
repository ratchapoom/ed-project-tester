import { redirect } from "next/navigation";

const LandingPage = () => {
  // Redirect to store landing page for implement the upload feature
  // In the future will change this to something else
  redirect("/store");
};

export default LandingPage;
