import Copyright from "../core/components/@layout/copyright";
import Menu from "../core/components/@layout/menu";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="layout-default">
      <Menu />
      <div className="layout-default-contents">{children}</div>
      <Copyright />
    </div>
  );
}
