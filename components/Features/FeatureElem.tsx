import css from "./Features.module.css"

interface FeatureElemProp{
    label: string,
    icon: string
}
export default function FeatureElem({label, icon} : FeatureElemProp){
    console.log();
    
    return <li className={css.elem}>
        <svg className={css.image} width="20" height="20">
          <use href={`/img/sprite.svg#icon-${icon}`}></use>
        </svg>
        
        <p className={css.text}>{label}</p>
    </li>
}