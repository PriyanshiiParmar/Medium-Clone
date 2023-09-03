import { Blinking } from "./Blinking effect/Blinking";
const Section = () => {
  return (
    <div className="section">
      <div className="right">
        <h1>Stay curious.</h1>
        <h2>
          Discover stories, thinking, and expertise from writers on any topic.
        </h2>
        <button className="startbtn">Start reading</button>
      </div>
      <div className="left">
        <Blinking />
      </div>
    </div>
  );
};
export default Section;
