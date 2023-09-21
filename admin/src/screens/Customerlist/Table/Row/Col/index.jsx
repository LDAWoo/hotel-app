function Col({ children, hidden }) {
  return <div className={` ${hidden ? "hidden xl:block" : ""}block p-0 relative xl:table-cell align-top xl:pt-[16px] xl:pb-[16px] xl:pl-[12px] xl:pr-[12px] text-secondary-n7 dark:text-secondary-n1 after:content-[''] after:absolute after:hidden xl:after:inline-block after:left-0 after:right-0 after:bottom-0 after:h-[1px] after:bg-secondary-n3 dark:after:bg-secondary-n6`}>{children}</div>;
}

export default Col;
