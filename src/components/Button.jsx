export default function Button({ text, linkTo }) {
  return (
    <>
      <a href={linkTo} target="_blank" className="btn btn-primary">
        {text}{" "}
      </a>
    </>
  );
}
