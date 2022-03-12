export default function Button({ text, linkTo, color }) {
  return (
    <>
      <a
        href={linkTo}
        target="_blank"
        className="btn btn-primary"
        style={{ backgroundColor: color, border: "none" }}
      >
        {text}{" "}
      </a>
    </>
  );
}
