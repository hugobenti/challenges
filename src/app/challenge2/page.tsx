"use client";

import CodeSnippet from "../components/CodeSnippet";
import { challenge_2 } from "./challenge2";

export default function Challenge2() {
  return (
    <div className="min-h-screen bg-white p-6">
      <CodeSnippet
        title="Challenge 2:"
        initialCode={challenge_2}
      />
    </div>
  );
}
