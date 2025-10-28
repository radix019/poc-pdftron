import { useEffect, useRef } from "react";
import "./App.css";
import WebViewer from "@pdftron/webviewer";

function App() {
  const viewer = useRef(null);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (viewer.current) {
        WebViewer(
          {
            path: "/lib/webviewer",
            licenseKey:
              "demo:1758721253389:60584e580300000000473d97843b3c321be03d5a3c7ca284713d432be6",
            initialDoc:
              "https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf",
          },
          viewer.current
        )
          .then((instance) => {
            console.log("WebViewer initialized ✅");
            const { UI } = instance;
            UI.disableElements([
              "menuButton",
              "toolsHeader",
              "toolbarGroup-Annotate",
              "toolbarGroup-Insert",
              "toolbarGroup-Forms",
              "toolbarGroup-Shapes",
              "toolbarGroup-Edit",
              "toolbarGroup-FillAndSign",
              "toolbarGroup-Measure",
              "toolbarGroup-Redaction",
              "toolbarGroup-Text",
              "toolbarGroup-Forms",
              "notesPanelButton",
              "toggleNotesButton",
              "leftPanel",
              "viewControlsButton",
            ]);
            UI.setToolbarGroup("toolbarGroup-View");
          })
          .catch((error) => {
            console.error("Error initializing WebViewer ❌", error);
          });
      }
    }, 300);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="App">
      <div className="webviewer" ref={viewer}></div>
    </div>
  );
}

export default App;
