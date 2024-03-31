import { useTranslation } from "react-i18next";
import MoneyFormatStaying from "../../../../../components/Staying/MoneyFormatStaying";
import Title from "../../../../../components/Title/Title";
import PropTypes from "prop-types";

function PriceSummary({ data }) {
  const {t} = useTranslation();

  return (
    <div className='flex flex-col gap-2'>
      <Title title={t("Secure.Selection.priceSummary")} fontBold xxl />
      <div className='absolute top-[50px] right-0 left-0 bg-gray-200 w-full p-4'>
        <div className='flex flex-row justify-between'>
          <Title title={t("Secure.Selection.total")} fontBold extraLarge5 />
          <div className='flex flex-col items-end justify-end'>
            <MoneyFormatStaying
              price={data?.pricePromotion}
              decimalScale={0}
              className='font-bold gap-2 text-[22px]'
            />
            <Title title={t("Secure.Selection.taxesAndFees")} xl />
          </div>
        </div>
      </div>
      {/* <div className='mt-[100px]'>
        <Title className='' title='Price information' fontBold xxl />
      </div> */}
    </div>
  );
}

PriceSummary.propTypes = {
  data: PropTypes.object,
};

export default PriceSummary;
