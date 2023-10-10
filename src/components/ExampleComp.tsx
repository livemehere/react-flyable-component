interface Props {}

const ExampleComp = ({}: Props) => {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "dodgerblue",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      ExampleComp
    </div>
  );
};

export default ExampleComp;
