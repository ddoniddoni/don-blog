import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <h2 className="hidden">메뉴목록</h2>
      <ul>
        <li>
          <Link href="#intro" className="nav-item">
            소개
          </Link>
        </li>
        <li>
          <Link href="#skills" className="nav-item">
            스킬
          </Link>
        </li>
        <li>
          <Link href="#projects" className="nav-item">
            작업내역
          </Link>
        </li>
      </ul>
    </nav>
  );
}
