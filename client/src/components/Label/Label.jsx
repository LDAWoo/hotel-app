import Title from "../Title/Title";

function Label({ className, classIcon, classTitle, title, size, icon }) {
  const IconComponent = icon;
  return (
    <li className={`flex gap-2 ${className}`}>
      {icon && <IconComponent className={classIcon} size={size} />}
      {title && <Title title={title} titleCustom={classTitle} nowrap={false} />}
    </li>
  );
}

export default Label;
