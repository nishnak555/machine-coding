import { Link } from "react-router-dom";

export default function Home() {
  const problems = [
    { name: "Stopwatch", path: "/stopwatch" },
    { name: "Todo App", path: "/todo" },
    { name: "Snake & Ladder", path: "/snake-ladder" },
    { name: "Drag & Drop", path: "/drag-drop" },
    { name: "Debounce Search", path: "/search" },
    { name: "Pagination", path: "/pagination" },
    { name: "Tic Toc Toe", path: "/tic-toc-toe" },
    { name: "Pagination", path: "/pagination" },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h1>Machine Coding Problems (TS)</h1>

      <ul>
        {problems.map((p) => (
          <li key={p.path}>
            <Link to={p.path}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
