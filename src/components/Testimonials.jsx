import imgA from "./element1.png";
import imgB from "./ele2.png";
import imgC from "./ele3.png";
import imgD from "./ele4.png";
import imgE from "./ele5.png";
import imgF from "./ele6.png";

function Testimonials() {
  return (
    <section className="testimonial">

      <h2>
        What our customer
        <br />
        says <span>About Us</span>
      </h2>

      <div className="testimonial-layout">
        <div className="testimonial-side testimonial-side--left">
          <img src={imgA} className="img1" alt="Customer 1" />
          <img src={imgB} className="img2" alt="Customer 2" />
          <img src={imgC} className="img3" alt="Customer 3" />
          <img src={imgD} className="img3" alt="Customer 3" />
        </div>

        <div className="testimonial-center">
          <div className="testimonial-box">
            <p>
              ❝ Elementum delivered the site within the timeline as they
              requested. In the end, the client found a 50% increase in
              traffic within days since its launch. They also had an
              impressive ability to use technologies that the company
              hadn't used, which have also proved to be easy to use and
              reliable. ❞
            </p>
          </div>
        </div>

        <div className="testimonial-side testimonial-side--right">
          <img src={imgD} className="img4" alt="Customer 4" />
          <img src={imgE} className="img5" alt="Customer 5" />
          <img src={imgF} className="img6" alt="Customer 6" />
          <img src={imgA} className="img6" alt="Customer 6" />
        </div>
      </div>

    </section>
  );
}

export default Testimonials;