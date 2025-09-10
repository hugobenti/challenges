"use client";

import CodeSnippet from "../components/CodeSnippet";
import { challenge_1 } from "./challenge1";

export default function Challenge1() {
  return (
    <div className="min-h-screen bg-white p-6">
      <CodeSnippet
        title="Challenge 1:"
        initialCode={challenge_1}
      />
    </div>
  );
}
