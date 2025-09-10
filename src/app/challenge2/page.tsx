"use client";

import CodeSnippet from "../components/CodeSnippet";
import { challenge_2 } from "./challenge2";

export default function Challenge2() {
  return (
    <div className="min-h-screen bg-white p-6">
      <p className="text-sm font-medium text-slate-800 mb-6">Write an async javascript function that writes every item in any given array with 1, 2, 4, 8,
etc., seconds apart.</p>

      <CodeSnippet
        title="Challenge 2:"
        initialCode={challenge_2}
      />
    </div>
  );
}
