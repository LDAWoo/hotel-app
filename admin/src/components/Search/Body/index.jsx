import Title from "../../Title";
import Item from "../Item";
const result = [
  {
    title: "Put your title here",
    content: "Small caption",
    image: "/images/content/product-pic-3.jpg",
    image2x: "/images/content/product-pic-3@2x.jpg",
  },
  {
    title: "Put your title here",
    content: "Small caption",
    image: "/images/content/product-pic-4.jpg",
    image2x: "/images/content/product-pic-4@2x.jpg",
  },
];

function Body() {
  return (
    <div className="absolute sm:-top-[12px] sm:-right-[12px] sm:-left-[12px] sm:p-[84px_12px_0px_12px] sm:border-transparent sm:shadow-[0px_0px_14px_-4px_rgba(0,0,0,0.05),0px_32px_48px_-8px_rgba(0,0,0,0.1)] sm:bg-secondary-n sm:rounded-[16px] sm:opacity-100 sm:transition-all top-[100%] left-0 right-0 max-h-[calc(100vh_-_152px)] p-[16px_8px] rounded-0 border-t-[1px] border-secondary-n3 shadow-[0_12px_32px_0px_rgba(17,19,21,0.05)] overflow-auto dark:bg-secondary-n7 dark:border-secondary-n6">
      <Box title="Recent search" />
    </div>
  );
}

const Box = ({ title }) => {
  return (
    <div className="sm:mb-[24px] sm:pb-[24px] mb-[16px] pb-[16px] dark:border-secondary-n6">
      <Title title={title} />
      <div>
        {result.map((x, index) => (
          <Item item={x} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Body;
