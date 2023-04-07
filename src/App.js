import React, { useState } from "react";
import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";
import VideoCall from "./VideoCall";

// const config = {
//   mode: "rtc",
//   codec: "vp8",
// };

export const appId = "f1894aaaa3174164811ee07ad6bb174b"; //ENTER APP ID HERE
export const token =
  "007eJxTYLjmmdCVYHFwYfbK+yXX5j9RO2uwU3OOSLyISUTe5esnfIoVGNIMLSxNEoHA2NDcxNDMxMLQMDXVwDwxxSwpCSiSdG2LfkpDICODp9h8FkYGCATxORnKMlNS850Tc3IYGAAX3yFs";
export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "videoCall";

const App = () => {
  const [inCall, setInCall] = useState(false);
  return (
    <div>
      <h1 className="heading">Agora RTC NG SDK React Wrapper</h1>
      {inCall ? (
        <VideoCall setInCall={setInCall} />
      ) : (
        <button
          variant="contained"
          color="primary"
          onClick={() => setInCall(true)}
        >
          Join Call
        </button>
      )}
    </div>
  );
};

export default App;
