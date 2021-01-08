function DefaultContainer({ bg, children }) {
  return (
    <div className={bg}>
      <div className="container max-w-4xl mx-auto p-3">{children}</div>
    </div>
  );
}
export default DefaultContainer;
