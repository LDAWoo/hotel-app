import Title from "../Title/Title";

function Label({ className, classIcon, classTitle, title, size, icon }) {
  const IconComponent = icon;
  return (
    <li className={`flex w-full flex-row items-center gap-2 ${className ? className : ""}`}>
      {icon && <div><IconComponent className={classIcon} size={size} /></div>}
      {title && <Title title={title} titleCustom={classTitle} nowrap={false} />}
    </li>
  );
}

export default Label;
