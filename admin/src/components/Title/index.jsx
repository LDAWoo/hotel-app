function Title({ title, xs = false, small = false, medium = false, large = false, xl = false, xxl = false, extraLarge3 = false, extraLarge4 = false, fontMedium = false, fontBold = false, noWrap = false, className, background = false }) {
  return (
    <div
      className={`
  ${xs ? "text-[8px]" : ""}
  ${small ? "text-[10px]" : ""}
  ${medium ? "text-[12px]" : ""}
  ${large ? "text-[14px]" : ""}
  ${xl ? "text-[15px]" : ""}
  ${xxl ? "text-[16px]" : ""}
  ${extraLarge3 ? "text-[18px]" : ""}
  ${extraLarge4 ? "text-[20px]" : ""}
  ${fontMedium ? "font-medium" : ""}
  ${fontBold ? "font-bold" : ""}
  ${noWrap ? "whitespace-nowrap" : ""}
  overflow-hidden text-ellipsis ${className}`}
    >
      <div className={`${background ? "pt-[3px] pb-[3px] pl-2 pr-2 bg-secondary-n2 rounded-lg dark:bg-secondary-n6" : ""}`}>{title}</div>
    </div>
  );
}

export default Title;
