
import HomeBanner from "./HomeBanner/HomeBanner";
import PartnerNRatings from "./PartnerNRatings/PartnerNRatings";
import GiveUsFeedback from "./GiveUsFeedback/GiveUsFeedback"
import OurServiceAreas from "./OurServiceAreas/OurServiceAreas";
import ProjectUs from "./ProjectUs/ProjectUs";

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
