import { useState } from "react";
import Card from "../../components/Card";
import Table from "./Table";
import Form from "../../components/Form";
import Filter from "../../components/Filter";
import useRegisterFilter from "../../hooks/Customer/useRegisterFilter";
import Title from "../../components/Title";
const navigation = ["Active", "UnActive"];

function CustomerList() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [search, setSearch] = useState("");
  const { isOpen, onOpen, onClose } = useRegisterFilter();
  const handleSubmit = () => {};

  const handleShowFilter = () => {
    onOpen();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <Card
        className=""
        classCardHead={``}
        classTitle="mr-5"
        head={
          <div className="flex flex-col 2md:flex-row gap-2 flex-1 w-full">
            <Form className="mr-auto" classInput="font-medium" value={search} setValue={setSearch} onSubmit={() => handleSubmit()} placeholder="Search by name or email" type="text" name="search" icon="search" />
            <div className="flex w-full md:w-auto">
              {navigation.map((item, index) => (
                <button className={`${activeIndex === index ? "text-secondary-n7 dark:text-secondary-n1 bg-secondary-n3 dark:bg-secondary-n6" : "text-secondary-n4"} rounded-lg pt-[8px] pb-[8px] pl-[16px] pr-[16px] w-full  transition-all `} key={index} onClick={() => setActiveIndex(index)}>
                  <Title title={item} fontMedium xxl />
                </button>
              ))}
            </div>
            <Filter visible={isOpen} title="Showing 10 of 24 customer" onClick={handleShowFilter} onClickOutSide={handleClose} onClose={handleClose} />
          </div>
        }
        title="Customer"
      >
        <div>
          {/* Table */}
          <Table />
        </div>
      </Card>
    </>
  );
}

export default CustomerList;
