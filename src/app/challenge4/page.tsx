"use client";

import CodeSnippet from "../components/CodeSnippet";
import { challenge_4 } from "./challenge4";

export default function Challenge4() {
  return (
    <div className="min-h-screen bg-white p-6">
      <CodeSnippet
        title="Challenge 4:"
        initialCode={challenge_4}
      />
    </div>
  );
}
