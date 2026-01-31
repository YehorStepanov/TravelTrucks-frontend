interface SvgProps {
  name: string;
}

export default function Svg({ name }: SvgProps) {
  return (
    <svg className="" width="30" height="30">
      <use href={`/img/sprite.svg#icon-${name}`}></use>
    </svg>
  );
}
