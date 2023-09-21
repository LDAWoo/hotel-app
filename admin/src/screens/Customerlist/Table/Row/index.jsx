import Balance from "../../../../components/Balance";
import Title from "../../../../components/Title";
import Col from "./Col";

function Row({ item, value, onChange, activeTable, setActiveTable, activeId, setActiveId }) {
  return (
    <>
      <div className="flex justify-between xl:justify-start xl:table-row transition-all items-center mb-[16px] pb-[16px] border-b-[1px] xl:rounded-lg border-secondary-n3 dark:border-secondary-n6 xl:hover:bg-secondary-n2 dark:bg-secondary-n7 xl:dark:hover:bg-secondary-n6">
        <Col>
          <div className="flex items-center cursor-pointer transition-all hover:text-primary-p1">
            <div className="flex-shrink-0 w-[48px] h-[48px] mr-[12px] rounded-[50%] overflow-hidden">
              <img src={item.avatar} className="w-full h-full object-cover" />
            </div>

            <Title title={item.user} xxl fontBold />
          </div>
        </Col>
        <Col hidden>
          <Title title={item.email} xl fontBold className="text-secondary-n4" />
        </Col>
        <Col hidden>
          <Title title="0123456789" xl fontBold className="text-secondary-n4" />
        </Col>
        <Col>
          <div className="flex xl:flex-row flex-col items-center gap-2">
            <Title title={item.price} xl fontBold background />
            <Balance value={item.balance} />
          </div>
        </Col>
        <Col hidden>
          <Title title={item.comments} xl fontBold />
        </Col>
        <Col hidden>
          <Title title={item.likes} xl fontBold />
        </Col>
      </div>
    </>
  );
}

export default Row;
