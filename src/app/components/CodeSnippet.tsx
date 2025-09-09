"use client";

import { useEffect, useState } from "react";

interface CodeSnippetProps {
  title?: string;
  initialCode: string;
}

const CodeSnippet = ({
  title = "Code Snippet",
  initialCode,
}: CodeSnippetProps) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    executeCode();
  }, []);
  const executeCode = () => {
    try {
      setError("");
      setOutput("");

      if (!code.trim()) {
        setOutput(
          '<span class="text-slate-500 italic">Empty code — nothing to run</span>'
        );
        return;
      }

      // Create a temporary element to capture DOM changes performed by the user's code
      const tempDiv = document.createElement("div");
      tempDiv.id = "response";
      tempDiv.className =
        "min-h-[50px] p-4 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 text-neutral-800";

      const wrappedCode = `
        try {
          ${code}
        } catch (innerError) {
          throw new Error('Runtime error: ' + (innerError?.message ?? innerError));
        }
      `;

      if (typeof document !== "undefined") {
        document.body.appendChild(tempDiv);

        try {
          const func = new Function(wrappedCode);
          func();
        } catch (execError) {
          throw execError;
        }

        const result = tempDiv.innerHTML;
        setOutput(result || "Code executed successfully!");

        document.body.removeChild(tempDiv);
      }
    } catch (err) {
      let errorMessage = "Unknown error";
      if (err instanceof Error) errorMessage = err.message;
      else if (typeof err === "string") errorMessage = err;
      else errorMessage = String(err);

      setError(`❌ ${errorMessage}`);
      // eslint-disable-next-line no-console
      console.error("[CodeSnippet] Execution error:", err);
    }
  };

  return (
    <div className="mb-8 rounded-xl border border-slate-200 bg-white shadow overflow-hidden">
      {title && (
        <h3 className="m-0 bg-blue-800 px-6 py-4 text-[1.1rem] font-semibold text-white">
          {title}
        </h3>
      )}

      <div className="border-b border-slate-200">
        <div className="flex items-center justify-between gap-4 border-b border-slate-200 bg-slate-50 px-4 py-3">
          <span className="text-sm font-medium text-slate-700">
            📝 JavaScript Editor
          </span>
          <button
            type="button"
            onClick={executeCode}
            title="Run code (Ctrl+Enter)"
            className="rounded-md bg-emerald-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            ▶️ Run
          </button>
        </div>

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck={false}
          className="h-52 min-h-[200px] w-full resize-y border-0 bg-slate-50 px-4 py-4 font-mono text-[14px] leading-6 text-slate-900 outline-none focus:bg-white focus:ring-0 focus:[box-shadow:inset_0_0_0_2px_#1e40af]"
          onKeyDown={(e) => {
            if (e.ctrlKey && e.key === "Enter") {
              e.preventDefault();
              executeCode();
            }
            if (e.key === "Tab") {
              e.preventDefault();
              const start = (e.currentTarget as HTMLTextAreaElement)
                .selectionStart;
              const end = (e.currentTarget as HTMLTextAreaElement).selectionEnd;
              const newValue =
                code.substring(0, start) + "  " + code.substring(end);
              setCode(newValue);
              queueMicrotask(() => {
                e.currentTarget.selectionStart = e.currentTarget.selectionEnd =
                  start + 2;
              });
            }
          }}
        />
      </div>

      <div className="bg-white">
        <div className="border-b border-slate-200 bg-slate-100 px-4 py-3">
          <span className="text-sm font-medium text-slate-600">📋 Result</span>
        </div>

        {error ? (
          <div className="rounded-b-xl border border-red-200 border-t-0 bg-red-50 px-4 py-4 text-red-600">
            <pre className="m-0 whitespace-pre-wrap font-mono text-sm">
              {error}
            </pre>
          </div>
        ) : (
          <div
            className="rounded-b-xl border text-slate-700 border-slate-100 border-t-0 bg-white px-4 py-4 min-h-[60px]"
            dangerouslySetInnerHTML={{
              __html:
                output ||
                '<span class="text-slate-500 italic">Run the code to see the result…</span>',
            }}
          />
        )}
      </div>
    </div>
  );
};

export default CodeSnippet;
