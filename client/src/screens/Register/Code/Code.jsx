import { useTranslation } from "react-i18next";
import Button from "../../../components/Buttons/Button";
import CodeInput from "./CodeInput";

function Code() {
  const { t } = useTranslation();

  return (
    <div className='min-w[296px] w-full sm:w-[446px] md:w-[310px]'>
      <div className='text-[32px] sm:text-[40px] md:text-[48px] font-bold dark:text-white mb-5'>
        {t("Register.title")}
      </div>
      <div className='pb-8'>
        <div className='dark:text-white font-medium'>{t("Register.checkCodeEmail")}</div>
      </div>
      <div className='flex w-full gap-2 pb-2'>
        <CodeInput name='number1' type='tel' autoComplete='off' required />
        <CodeInput name='number2' type='tel' autoComplete='off' required />
        <CodeInput name='number3' type='tel' autoComplete='off' required />
        <CodeInput name='number4' type='tel' autoComplete='off' required />
      </div>
      <div className='text-red-500 text-[12px] pb-5'>{t("Register.errorCode")}</div>
      <div className=''>
        <Button
          className='p-2 bg-blue-500 rounded-lg flex items-center justify-center w-full font-medium text-white text-[18px] hover:bg-blue-600 cursor-pointer duration-200'
          title={t("Register.continue")}
        />
      </div>
    </div>
  );
}

export default Code;
