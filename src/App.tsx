import "./styles.css";
import * as Parts from "./components/parts";
import { Tabs, Tab } from "react-bootstrap";
import Editor, { useMonaco } from "@monaco-editor/react";
import { useRef, useState } from "react";
import dashify from "dashify";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const parts = [Parts.NullCoalescingOperator, Parts.StringInterpolation];

export default function App() {
  const monaco = useMonaco();

  return (
    <div>
      <Tabs id="tabs">
        {parts.map((p, i) => (
          <Tab eventKey={dashify(`part-${i + 1}`)} title={p.name}>
            <div style={{ margin: "1rem", height: "100vh" }}>{p()}</div>
          </Tab>
        ))}
      </Tabs>
      <ToastContainer hideProgressBar={true} autoClose={3000} />
    </div>
  );
}
