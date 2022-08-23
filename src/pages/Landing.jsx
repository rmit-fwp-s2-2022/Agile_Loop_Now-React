import earth from "../assets/earth.mp4";

function Landing() {
  return (
    <div>
      <video src={earth} autoPlay loop muted />
      <div class="title">
        <h1>Welcome to Loop-Agile-Now</h1>
        <p>connecting people one click at a time</p>
      </div>
    </div>
  );
}
export default Landing;
