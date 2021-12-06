import { ReactElement } from "react";

const About = (): ReactElement => {
    return (
      <div className=" m-4">
        <article className="d-flex flex-column text-wrap" style={{maxWidth:'40rem'}}>
          <div>
            <h1 className="fs-1 fw-bold text-warning">History</h1>
            <p className="fs-6" role="para">
              We launched Learning Curve Public School in 2001 & since then have
              rapidly changed the face of Pre-Primary,Primary and Secondary
              education in the City.
            </p>
            <p className="fs-6" role="para">
              Our success as one of the leading education service providers
              raised the expectations of many hopeful parents, who were keen to
              see their children continue to blossom under our guidance.
            </p>
          </div>

          <div>
            <h1 className="fs-1 fw-bold text-warning">Vision</h1>
            <p className="fs-6" role="para">
              Learning Curve Public School seeks to provide the best place for a
              child to learn, to grow and to evolve into a balanced and strong
              individual.
            </p>
            <p className="fs-6" role="para">
              The School intends to strive to become a second home for your
              child. The School located Hinjewadi Pune.
            </p>
          </div>
        </article>
      </div>
    );
};

export default About;
