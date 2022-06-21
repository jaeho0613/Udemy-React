const MyParagraph = (props) => {
  console.log("MyParagraph Output!!");
  return (
    <p>{props.children}</p>
  );
}

export default MyParagraph;