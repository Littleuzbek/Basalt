import teamBack_pic from "../../assets/team-background.jpg";
import historic from "../../assets/historic.mp4"

export default function Team() {
  return (
    <div className="team" style={{ backgroundImage: `url(${teamBack_pic})` }}>
      <h2>The Company With History</h2>
      <span></span>
      <div>
        <video src={historic} controls preload="metadata"></video>
      </div>
    </div>
  );
}
