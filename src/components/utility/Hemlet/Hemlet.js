const Hemlet = ({ title, children }) => {
  document.title = "M2-Market - " + title;

  return <div>{children}</div>;
};

export default Hemlet;
