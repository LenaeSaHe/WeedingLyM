import classNames from "classnames";

export default function Paragraph({ children, short }) {
  return (
    <div
      className={classNames("txtParagraph", "text-center", short ? "w-50" : "")}
    >
      {children}
    </div>
  );
}
