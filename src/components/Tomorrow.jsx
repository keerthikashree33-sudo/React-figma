function Tomorrow() {
  return (
    <section className="tomorrow">
      <div className="tomorrow-content">
        <div className="tomorrow-text">
          <h2>
            <span style={{backgroundColor:'yellow'}}> Tomorrow</span> should
            <br />
            be better than <span>today</span>
          </h2>

          <p>
            We are a team of strategists, designers,
            communicators, researchers. Together,
            we believe that progress only happens
            when you refuse to play things safe.
          </p>

          <a href="#" className="read-more">
            Read more <span>⟶</span>
          </a>
        </div>

        <div className="tomorrow-image">
          <img src="src\components\images(2).png" alt="Meeting" />
        </div>
      </div>
    </section>
  );
}

export default Tomorrow;