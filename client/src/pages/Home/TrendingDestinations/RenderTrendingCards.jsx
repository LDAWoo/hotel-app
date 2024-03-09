import TrendingCard from "./TrendingCard";

function RenderTrendingCards({ data, startIndex, endIndex, maxImage }) {
  return data
    .slice(startIndex, endIndex)
    .map((card, index) => (
      <TrendingCard
        key={index}
        areaImage={card.areaImage}
        destination={card.destination}
        src={card.src}
        maxImage={maxImage}
        city={card.city}
      />
    ));
}

export default RenderTrendingCards;
