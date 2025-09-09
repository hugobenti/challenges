import Image from "next/image";
import CodeSnippet from "./components/CodeSnippet";
import { challenge_1 } from "../../challenges/challenge_1";
import { challenge_4 } from "../../challenges/challenge_4";

export default function Home() {
  return (
    <div className="mt-24">
      <CodeSnippet
        title="Exemplo 1: Manipulando DOM"
        initialCode={challenge_4}
      />
    </div>
  );
}
