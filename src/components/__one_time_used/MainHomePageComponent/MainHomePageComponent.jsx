
import HomeBanner from "./HomeBanner/HomeBanner";
import PartnerNRatings from "./PartnerNRatings/PartnerNRatings";
import GiveUsFeedback from "./GiveUsFeedback/GiveUsFeedback"
import OurServiceAreas from "./OurServiceAreas/OurServiceAreas";
import ProjectUs from "./ProjectUs/ProjectUs";
import BestServices from "./BestServices/BestServices";
import OurExperience from "./OurExperience/OurExperience";
import Quality from "./Quality/Quality";
import TrustUs from "./TrustUs/TrustUs";
import GeneralContractors from "./GeneralContractors/GeneralContractors";
import KeyServices from "./KeyServices/KeyServices";
import Services from "./Services/Services";
import Review from "./Review/Review";

const MainHomePageComponent = () => {
  return (
    <div>

      <section>
        <HomeBanner />
      </section>

      <section>
        <PartnerNRatings />
      </section>

      <section>
        <BestServices/>
      </section>

      <section>
        <KeyServices/>
      </section>

      <section>
        <Services/>
      </section>

      <section>
        <OurExperience/>
      </section>

      <section>
        <GeneralContractors/>
      </section>

      <section>
        <Quality/>
      </section>

      <section>
        <TrustUs/>
      </section>

      <section>
        <Review/>
      </section>

      <section>
        <ProjectUs/>
      </section>

      <section>
        <OurServiceAreas/>
      </section>

      <section>
        <GiveUsFeedback/>
      </section>
      
    </div>
  );
};

export default MainHomePageComponent;
