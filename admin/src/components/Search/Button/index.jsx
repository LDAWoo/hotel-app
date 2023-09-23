function Button({ children, className, onClick }) {
  return (
    <button
      className={`absolute top-[50%] -translate-y-[50%] transition-all 
        ${className}
        `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
