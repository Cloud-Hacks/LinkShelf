import "../../css/landing.css";
import { useNavigate } from "react-router-dom";
export const Navbar = ({ ...props }) => {
  var navigate = useNavigate();
  return (
    <div className="navbar"
    onClick={() => {
      navigate("/");
    }}
    >
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 0.047 0.047"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    width={48}
    height={48}
    {...props}
  >
    <path
      style={{
        fill: "#93C7EF",
      }}
      points="369.184,0 52.513,0 52.513,512 459.487,512 459.487,90.305 "
      d="M0.034 0L0.005 0L0.005 0.047L0.043 0.047L0.043 0.008Z"
    />
    <path
      style={{
        fill: "#78B9EB",
      }}
      points="369.184,0 256,0 256,512 459.487,512 459.487,90.305 "
      d="M0.034 0L0.024 0L0.024 0.047L0.043 0.047L0.043 0.008Z"
    />
    <path
      style={{
        fill: "#C9E3F7",
      }}
      points="369.184,0 369.184,90.585 459.487,90.305 "
      d="M0.034 0L0.034 0.008L0.043 0.008Z"
    />
      <path
        style={{
          fill: "#FFFFFF",
        }}
        d="M0.028 0.029v0.001c0 0.002 -0.002 0.004 -0.004 0.004s-0.004 -0.002 -0.004 -0.004v-0.001h-0.004v0.001c0 0.004 0.004 0.008 0.008 0.008s0.008 -0.004 0.008 -0.008v-0.001H0.028z"
      />
      <path
        style={{
          fill: "#FFFFFF",
        }}
        d="M0.019 0.025V0.024c0 -0.002 0.002 -0.004 0.004 -0.004s0.004 0.002 0.004 0.004v0.001h0.004V0.024c0 -0.004 -0.004 -0.008 -0.008 -0.008S0.016 0.019 0.016 0.024v0.001H0.019z"
      />
      <path
        x={234.22}
        y={242.872}
        style={{
          fill: "#FFFFFF",
        }}
        width={39.385}
        height={91.897}
        d="M0.022 0.022H0.025V0.031H0.022V0.022z"
      />
  </svg>
    </div>
  );
};
