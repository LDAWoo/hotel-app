function Title({
  title,
  small,
  medium,
  large,
  fontBold,
  fontMedium,
  titleCustom,
}) {
  return (
    <span
      className={`${small ? "text-[14px]" : ""} ${
        medium ? "text-[16px]" : ""
      } ${large ? "text-[18px]" : ""} ${fontBold ? "font-bold" : ""} ${
        fontMedium && "font-medium"
      } whitespace-nowrap overflow-hidden text-ellipsis dark:text-white ${
        titleCustom ? titleCustom : ""
      }`}
    >
      {title}
    </span>
  );
}

export default Title;
