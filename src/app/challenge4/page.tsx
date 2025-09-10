"use client";

import CodeSnippet from "../components/CodeSnippet";
import { challenge_4 } from "./challenge4";

export default function Challenge4() {
  return (
    <div className="min-h-screen bg-white p-6">
      <p className="text-sm font-medium text-slate-800 mb-6">
        Write an efficient method that tells us whether or not an input string
        brackets ("{", "}", "(", ")", "[", "]") opened and closed properly.
      </p>
      <CodeSnippet title="Challenge 4:" initialCode={challenge_4} />
    </div>
  );
}
