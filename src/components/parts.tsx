import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { compiler as markdownCompiler } from "markdown-to-jsx";
import { toast } from "react-toastify";
import Editor from "@monaco-editor/react";

const replacements = {
  "(0, _reactToastify.toast)": "toast"
};

const lines = (str) => (str.match(/\n/g) || "").length + 1;

// const replaceEach = (str, replacementMap: Object) => {
//   Object.entries(replacementMap).forEach((r) => str.replaceAll());
// };

const DemoButton = ({ fn }) => (
  <>
    <Editor
      options={{ readOnly: true }}
      value={fn.toString()}
      height={`${lines(fn.toString()) * 1.2}rem`}
      language="javascript"
      theme="vs-dark"
    />
    <Button onClick={fn}>{fn.name}</Button>
  </>
);

export const StringInterpolation = () => {
  const title = "String interpolation";

  const md = `
  - ...
  ##### Examples

  Name | Code
  -----|------
  C# | \`$"The variable is {value}."\`
  JavaScript | \`The variable is {value}.\`
  `;

  const exp1 = () => true || true;
  const exp2 = () => false || true;

  const runCode = () => {};

  const logicalOrVersusNullishCoalescing = () => {
    let falseVar = false;
    toast(`${falseVar || true}`);
  };

  return (
    <>
      <h5>{title}</h5>
      {markdownCompiler(md)}
      {/* <DemoButton fn={runCode} /> */}
      {/* <DemoButton fn={logicalOrVersusNullishCoalescing} /> */}
    </>
  );
};

export const NullCoalescingOperator = () => {
  const title = "Null-coalescing operator";

  const md = `
  - The null-coalescing operator returns the first non-null value, starting from the left.
    - Very useful for setting default values.
    - Any expressions, such as method calls, can be used.
    - Usually lazy / short-circuit evaluation is used.
  - In JavaScript:
    - Historically, the logical OR operator (\`||\`) was used.
      - Problem: it will override falsy-yet-valid default values such as \`0\`, \`false\`, or \`""\`.
    - Nullish coalescing (\`??\`) was introduced to only override \`null\` and \`undefined\`.
  - Java doesn't have one. A ternary must be used.

  ##### Examples

  Name | Code
  -----|------
  JavaScript (Nullish-coalescing op.) | \`let name = firstName ?? nickName ?? "Anonymous"\`
  JavaScript (Logical OR operator) | \`let willAlwaysBeTrue = someBoolean || true\`
  Kotlin (Elvis operator) | \`let b = a ?: "default"\`
  C# | \`let b = a ?? "default"\`
  Java (ternary) | \`int y = (x != null) ? x : -1;\`
  `;

  const exp1 = () => true || true;
  const exp2 = () => false || true;

  const runCode = () => {};

  const logicalOrVersusNullishCoalescing = () => {
    let falseVar = false;
    toast(`${falseVar || true}`);
    toast(`${falseVar ?? true}`);
  };

  return (
    <>
      <h5>{title}</h5>
      {markdownCompiler(md)}
      {/* <DemoButton fn={runCode} /> */}
      {/* <DemoButton fn={logicalOrVersusNullishCoalescing} /> */}
    </>
  );
};

export const Part02 = () => {};
export const Part03 = () => {};
export const Part04 = () => {};
export const Part05 = () => {};
export const Part06 = () => {};
export const Part07 = () => {};
export const Part08 = () => {};
export const Part09 = () => {};
export const Part10 = () => {};
export const Part11 = () => {};
export const Part12 = () => {};
export const Part13 = () => {};
export const Part14 = () => {};
export const Part15 = () => {};
export const Part16 = () => {};
