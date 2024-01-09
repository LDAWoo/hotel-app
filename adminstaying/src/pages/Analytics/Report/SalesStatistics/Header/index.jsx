import Title from "../../../../../components/Title/Title";

function Header() {
  return (
    <header className="bg-white p-4">
      <div className="flex flex-col gap-2">
        <Title title="Sales Statistics" fontMedium xxxl nowrap={false} />
        <Title title="Analyse your past sales to improve your business" xxl nowrap={false} />
      </div>
    </header>
  );
}

export default Header;
