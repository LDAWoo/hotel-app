function Switcher({ checked, onChange, ...props }) {
  return (
    <>
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input {...props} type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
          <div className={`h-4 w-12 rounded-full ${checked ? "bg-[#E5E7EB]" : "bg-[#949494]"} shadow-inner`}></div>
          <div className={`${!checked ? "dot shadow-switch-1 left-0 -top-1 bg-white shadow-[0_0_4px_1px_rgba(0,0,0,.25)]" : "right-0 -top-1 bg-hotel-75"} absolute transition-transform duration-100 h-6 w-6 rounded-full`}></div>
        </div>
      </label>
    </>
  );
}

export default Switcher;
