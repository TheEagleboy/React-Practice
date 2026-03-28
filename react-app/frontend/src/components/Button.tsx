interface Prop {
  name: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ name, color = "primary", onClick }: Prop) => {
  return (
    <div className={"btn btn-" + color} onClick={onClick}>
      {name}
    </div>
  );
};

export default Button;
