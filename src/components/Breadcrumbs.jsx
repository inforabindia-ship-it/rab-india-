import { Link } from "react-router-dom";

/**
 * @param {{ label: string, to: string }[]} props.items Last item is current page (still pass `to` for consistency; not rendered as link)
 */
export default function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="breadcrumbs-list">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.to}-${item.label}`} className="breadcrumbs-item">
              {isLast ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <Link to={item.to}>{item.label}</Link>
              )}
              {!isLast ? <span className="breadcrumbs-sep" aria-hidden="true">›</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
