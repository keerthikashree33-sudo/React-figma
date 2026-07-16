function Hero() {
  return (
    <section id="home" className="hero">
      <h1>
        The <span style={{textDecoration:'underline',textDecorationColor:'yellow'}}> thinkers</span> and <br />
        doers were<span style={{
            backgroundColor:'pink',
            borderRadius:'40px',
            padding:'1px 16px'
        }}>changing</span> <br />
        the <span style={{
            backgroundColor:'lightgreen',
            borderRadius:'40px',
            padding:'1px 26px'}} > status</span> Quo with
      </h1>

      <p>
        We are a team of strategists, designers, communicators,
        researchers. Together, we believe that progress only
        happens when you refuse to play things safe.
      </p>
    </section>
  );
}

export default Hero;