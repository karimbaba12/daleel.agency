import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col items-center pt-36">
      <h1>Welcome</h1>
      <Link href="/todo-app">
        <button className="text-blue-600 bg-white rounded-nd px-2 py1 mt-6">
          Get started
        </button>
      </Link>
    </main>
  );
}
``;
