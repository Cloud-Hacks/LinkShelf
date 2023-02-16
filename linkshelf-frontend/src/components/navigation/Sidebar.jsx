import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Sidebar.css";
import YesNoDialog from "../dialogs/YesNoDialog";
import axios from "../../axios";
import requests from "../../requests";
import { useCookies } from "react-cookie";

const Sidebar = ({ select }) => {
  const [cookies, removeCookie] = useCookies(["userData"]);
  const [selected, setSelected] = useState(select);
  const [isYesNoDialogOpen, setIsYesNoDialogOpen] = useState(false);
  var navigate = useNavigate();
  const handleCloseYesNoDialog = () => {
    setIsYesNoDialogOpen(false);
  };

  const logOut = () => {
    axios
      .get(`${requests.auth.signOut}/${cookies.userData.user._id}`, {
        headers: {
          Authorization: `Bearer ${cookies.userData.token}`,
        },
      })
      .then((res) => res.data)
      .then((data) => {
        removeCookie("userData");
        navigate("/", { replace: true });
        handleCloseYesNoDialog();
      })
      .catch((err) => {
        alert(err.response.data.error);
      });
  };
  const handleYesAction = () => {
    logOut();
    return true;
  };
  return (
    <div>
      <YesNoDialog
        isOpen={isYesNoDialogOpen}
        closeDialog={handleCloseYesNoDialog}
        action={handleYesAction}
        message={"Do you want to log out?"}
      />
      <div class="sidebar">
        <div class="sidebarelementcontainer">
          <div class="topelements">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 0.047 0.047"
              style={{
                enableBackground: "new 0 0 512 512",
                marginTop: "17%",
              }}
              width={48}
              height={48}
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
            <div class="tabs">
              <div
                class={selected === 0 ? " home selected" : "home"}
                onClick={() => {
                  setSelected(0);
                  navigate("/home");
                }}
                home
              >
                <svg
                  class={selected === 0 ? "icon3 ic-selected" : "icon3"}
                  width="16"
                  height="19"
                  viewBox="0 0 16 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.77281 1.05434C8.80311 0.052852 7.19693 0.0528504 6.22723 1.05433L1.49085 5.94593C1.21884 6.22686 1.03605 6.58202 0.965516 6.96665C0.390298 10.1035 0.347838 13.3148 0.83992 16.4658L1.01414 17.5814C1.06917 17.9337 1.37265 18.1935 1.72928 18.1935H5.03885C5.31142 18.1935 5.53238 17.9725 5.53238 17.7V10.7906H10.4677V17.7C10.4677 17.9725 10.6886 18.1935 10.9612 18.1935H14.2707C14.6273 18.1935 14.9308 17.9337 14.9859 17.5814L15.1601 16.4658C15.6522 13.3148 15.6097 10.1035 15.0345 6.96665C14.964 6.58202 14.7812 6.22686 14.5092 5.94593L9.77281 1.05434Z"
                    fill={selected == 0 ? "#ffffff" : "#CECECE"}
                  />
                </svg>

                <div
                  class={selected === 0 ? " home-text-selected" : "home-text"}
                >
                  Home
                </div>
              </div>
              <div
                class={selected === 1 ? " explore selected" : "explore"}
                onClick={() => {
                  setSelected(1);
                  navigate("/explore");
                }}
              >
                <svg
                  class={"icon4"}
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5 1.96258C5.92393 1.96258 2.21429 5.67222 2.21429 10.2483C2.21429 14.8244 5.92393 18.534 10.5 18.534C15.0761 18.534 18.7857 14.8244 18.7857 10.2483C18.7857 5.67222 15.0761 1.96258 10.5 1.96258ZM0.5 10.2483C0.5 4.72544 4.97715 0.248291 10.5 0.248291C16.0228 0.248291 20.5 4.72544 20.5 10.2483C20.5 15.7711 16.0228 20.2483 10.5 20.2483C4.97715 20.2483 0.5 15.7711 0.5 10.2483Z"
                    fill={selected == 1 ? "#ffffff" : "#CECECE"}
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.18547 7.17258C8.11854 8.05034 7.40575 9.28492 7.17905 10.6478L6.67855 13.6567C6.41865 15.2193 8.23549 16.2682 9.45873 15.2619L11.8143 13.324C12.8812 12.4462 13.594 11.2116 13.8207 9.84874L14.3212 6.83979C14.5811 5.27726 12.7643 4.2283 11.541 5.23465L9.18547 7.17258ZM10.5 8.53401C9.55323 8.53401 8.78571 9.30152 8.78571 10.2483C8.78571 11.1951 9.55323 11.9626 10.5 11.9626C11.4468 11.9626 12.2143 11.1951 12.2143 10.2483C12.2143 9.30152 11.4468 8.53401 10.5 8.53401Z"
                    fill={selected == 1 ? "#ffffff" : "#CECECE"}
                  />
                </svg>
                <div
                  class={
                    selected === 1 ? "explore-text-selected" : "explore-text"
                  }
                >
                  Explore
                </div>
              </div>
              <div
                class={selected === 2 ? " profile selected" : "profile"}
                onClick={() => {
                  setSelected(2);
                  navigate("/starred");
                }}
              >
                <svg
                  class={selected === 2 ? "icon5 ic-selected" : "icon5"}
                  width="21"
                  height="23"
                  viewBox="0 0 21 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.8649 0.996283C11.4796 0.332132 10.5204 0.33213 10.1351 0.996283L7.42101 5.67359C7.23064 6.00168 6.90159 6.22557 6.52653 6.28222L1.44021 7.05044C0.58593 7.17947 0.28627 8.25808 0.951576 8.80928L4.74067 11.9485C5.09141 12.2391 5.25633 12.6975 5.17113 13.1449L4.17996 18.35C4.02327 19.1729 4.88706 19.8122 5.62821 19.4219L10.4176 16.9001C10.7821 16.7082 11.2178 16.7082 11.5824 16.9001L16.3718 19.4219C17.1129 19.8122 17.9767 19.1729 17.82 18.35L16.8289 13.1449C16.7437 12.6975 16.9086 12.2391 17.2593 11.9485L21.0484 8.80928C21.7137 8.25808 21.4141 7.17947 20.5598 7.05044L15.4735 6.28222C15.0984 6.22557 14.7694 6.00168 14.579 5.67359L11.8649 0.996283Z"
                    fill={selected == 2 ? "#ffffff" : "#CECECE"}
                  />
                </svg>
                <div
                  class={
                    selected === 2 ? "profile-text-selected" : "profile-text"
                  }
                >
                  Starred
                </div>
              </div>
            </div>
          </div>
          <div
            class="logoutbutton"
            onClick={() => {
              logOut();
            }}
          >
            <svg
              class="icon6"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6061 17.8242C10.104 17.8242 9.69697 18.2312 9.69697 18.7333C9.69697 19.2354 10.104 19.6424 10.6061 19.6424H17.8788C19.0503 19.6424 20 18.6927 20 17.5212V2.9757C20 1.80419 19.0503 0.854492 17.8788 0.854492H10.6061C10.104 0.854492 9.69697 1.26151 9.69697 1.76358C9.69697 2.26566 10.104 2.67268 10.6061 2.67268L17.8788 2.67267C18.0461 2.67267 18.1818 2.80835 18.1818 2.9757L18.1818 17.5212C18.1818 17.6885 18.0461 17.8242 17.8788 17.8242H10.6061Z"
                fill="#B3B3B3"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.6401 13.1154C14.4769 13.1154 15.1552 12.437 15.1552 11.6002V8.88444C15.1552 8.04764 14.4769 7.36928 13.6401 7.36928L8.04907 7.36928C8.04116 7.28028 8.03288 7.1913 8.02424 7.10235L7.95875 6.42855C7.85883 5.40054 6.7672 4.78489 5.83577 5.23127C3.85489 6.18059 2.06164 7.47968 0.542249 9.06605L0.422007 9.1916C-0.140669 9.77908 -0.140669 10.7055 0.422006 11.293L0.542249 11.4186C2.06164 13.0049 3.85489 14.304 5.83577 15.2534C6.76719 15.6997 7.85883 15.0841 7.95875 14.0561L8.02424 13.3823C8.03288 13.2933 8.04116 13.2044 8.04907 13.1154H13.6401ZM7.20619 11.2972C6.88332 11.2972 6.59789 11.466 6.43646 11.7223C6.35785 11.8472 6.30865 11.9928 6.29886 12.1497C6.27687 12.5023 6.24878 12.8545 6.21458 13.2064L6.19558 13.402C4.93976 12.7548 3.77353 11.9488 2.72531 11.0047C2.45336 10.7597 2.18936 10.5055 1.93379 10.2423C3.17444 8.96467 4.61396 7.89775 6.19557 7.08267L6.21458 7.27824C6.24878 7.63009 6.27687 7.98238 6.29886 8.33497C6.32875 8.81414 6.72609 9.18747 7.20619 9.18747H13.3371V11.2972H7.20619Z"
                fill="#B3B3B3"
              />
            </svg>
            <div class="log-out">Log out</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
