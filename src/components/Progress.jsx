import progressImg from './people-business-meeting-high-angle_23-2148911819.png';
function Progress() {
  return (
    <section className="progress">
      <div className="progress-image">
<img src={progressImg} alt="Progress" />
     </div>

      <div className="progress-text">
        <h2>
          See <span style={{backgroundColor:'yellow',borderRadius:'25px'}}> how</span>  we can
          <br />
          help you
          <br />
          <span>progress</span>
        </h2>

        <p>
          We are a team of strategists, designers, communicators and
          researchers working together to create meaningful digital
          experiences.
        </p>

        <a href="#">Read more →</a>
      </div>
    </section>
  );
}

export default Progress;