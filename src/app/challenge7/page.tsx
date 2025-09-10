"use client";

import CodeSnippet from "../components/CodeSnippet";
import { challenge_7 } from "./chalange7";

export default function Challenge7() {
  return (
    <div className="min-h-screen bg-white p-6">
      <p className="ont-medium text-slate-800 mb-2">
        Think that you have an unlimited number of carrots, but a limited number
        of carrot types. Also, you have one bag that can hold a limited weight.
        Each type of carrot has a weight and a price. Write a function that
        takes carrotTypes and capacity and return the maximum value the bag can
        hold. [Python or Javascript]
      </p>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900">Idea:</h2>
        <ol className="mt-3 list-decimal pl-6 space-y-2 text-slate-700">
          <li>
            Compute value density for each carrot type:
            <code className="rounded bg-slate-100 px-1 py-0.5">price / kg</code>
            .
          </li>
          <li>
            Sort types by density in{" "}
            <span className="font-medium">descending</span> order.
          </li>
          <li>
            For each type in that order, put as many whole items as fit in the
            remaining capacity; then move to the next type.
          </li>
        </ol>
      </div>

      <CodeSnippet title="Challenge 7:" initialCode={challenge_7} />
    </div>
  );
}
