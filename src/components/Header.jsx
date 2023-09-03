import images from "./logo/Capture.PNG";
const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={images} alt=""></img>
      <div className="navbar">
        <p>Our story</p>
        <p>Membership</p>
        <p>Write</p>
        <p>Sign In</p>
        <p className="started">Get started</p>
      </div>
    </div>
  );
};
export default Header;
