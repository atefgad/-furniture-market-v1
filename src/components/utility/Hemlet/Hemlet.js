const Hemlet = ({ title, children }) => {
  document.title = "MultiMart - " + title;

  return <div>{children}</div>;
};

export default Hemlet;
