// import { Waypoint } from "react-waypoint";

const Skill = () => {
  // const handleWaypointEnter = () => {
  //   const progressBars = document.querySelectorAll(".progress-bar");
  //   progressBars.forEach((el) => {
  //     el.style.width = `${el.getAttribute("aria-valuenow")}%`;
  //   });
  // };
  return (
    <div>
      {/* <Waypoint onEnter={handleWaypointEnter} bottomOffset="80%"> */}
        {/* ======= Skills Section ======= */}
        <section id="skills" className="skills section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Skills</h2>
              <p>
                Dengan dasar yang kuat dalam desain UI/UX, saya mengkhususkan
                diri dalam wireframing, prototyping, dan riset pengguna,
                memastikan desain berakar pada kebutuhan pengguna. Di frontend,
                saya mahir membuat antarmuka responsif dengan HTML, CSS, dan
                JavaScript, mengoptimalkan pengalaman pengguna yang mulus.
                Perpaduan unik pemikiran desain dan keahlian teknis saya
                menghasilkan solusi digital yang menarik secara visual dan
                berorientasi pengguna. Saya terus memperbarui pengetahuan
                terkait teknologi terkini, membawa inovasi ke garis depan
                pekerjaan saya dalam ranah dinamis pengembangan UI/UX dan
                frontend.
              </p>
            </div>
            <div className="row skills-content">
              <div className="col-lg-6" data-aos="fade-up">
                <div className="progress">
                  <span className="skill">
                    HTML <i className="val">97%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={100}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    CSS <i className="val">80%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    JavaScript <i className="val">65%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Skills Section */}
      {/* </Waypoint> */}
    </div>
  );
};
export default Skill;
