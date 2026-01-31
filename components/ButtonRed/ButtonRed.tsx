import css from "./ButtonRed.module.css";

interface ButtonRedProps {
  text: string;
}

export default function ButtonRed({ text }: ButtonRedProps) {
  return (
    <button className={css.button}>
      {text}
    </button>
  );
}
