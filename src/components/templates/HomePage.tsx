
import BannerSession from "../organisms/BannerSession";
import CommunitySession from "../organisms/CommunitySession";
import FlagshipSection from "../organisms/FlagshipSection";
import Footer from "../organisms/Footer";
import ReputationSection from "../organisms/ReputationSection";

const HomePage = () => {

  return (
    <>
      <BannerSession />
      <FlagshipSection />
      <ReputationSection />
      <CommunitySession />
      <Footer />
    </>
  );
};

export default HomePage;