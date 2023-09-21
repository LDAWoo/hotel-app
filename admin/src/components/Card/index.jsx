import Title from "../Title";

const Card = ({ className, title, classTitle, classCardHead, head, children }) => {
  return (
    <div className={`relative p-[16px] sm:p-[24px] bg-secondary-n shadow-[0px_10px_32px_0px_rgba(17,19,21,0.09)] dark:bg-secondary-n7 rounded-lg ${className}`}>
      {title && (
        <div className={`flex flex-col 2md:flex-row w-full items-start gap-2 2md:items-center min-h-[40px] mb-[24px] sm:mb-[32px] ${classCardHead}`}>
          <div className={`${classTitle}`}>
            <Title title={title} extraLarge4 fontMedium className="text-secondary-n6 dark:text-secondary-n1" />
          </div>
          {head && head}
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
