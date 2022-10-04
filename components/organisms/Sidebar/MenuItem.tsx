import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  icon:
    | "ic-menu-overview"
    | "ic-menu-transactions"
    | "ic-menu-messages"
    | "ic-menu-cards"
    | "ic-menu-rewards"
    | "ic-menu-settings"
    | "ic-menu-logout";
  active?: boolean;
  href?: string;
}
export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, active, href } = props;
  const classItem = classNames({
    item: true,
    "mb-30": true,
    active,
  });

  return (
    <div className={classItem}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} height={25} width={25} />
      </div>
      <p className="item-title m-0">
        <Link href={href || "#"}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
}
