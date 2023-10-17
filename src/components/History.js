import '../styles/history.css';
import CT_SkillTest_v327 from "../pictures/CT_SkillTest_v327.jpeg"
import CT_SkillTest_v325 from "../pictures/CT_SkillTest_v325.jpeg"

function history() {
  return (
    <div className="historyContainer" id="historyContainer">
      <div className="history">
        <div className="historyText">
          <div id="sectionNumber">01.</div>
          <div id="sectionTitle">HISTORY</div>
        </div>
        <div className="sectionText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante
          viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est.
          Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras
          scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis
          hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec
          congue.
        </div>
      </div>

      <div id="carousel">
        <div className="container">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
              <li data-target="#myCarousel" data-slide-to="3"></li>
            </ol>

            <div className="carousel-inner">
              <div className="item active">
                <img src={CT_SkillTest_v327} alt="Los Angeles" />
              </div>

              <div className="item">
                <img src={CT_SkillTest_v325} alt="Chicago" />
              </div>

              <div className="item">
                <img src={CT_SkillTest_v327} alt="New york" />
              </div>

              <div className="item">
                <img src={CT_SkillTest_v325} alt="New york" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default history;
