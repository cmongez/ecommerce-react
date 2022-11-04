export const Item = ({ title, description, price, pictureUrl }) => {
  return (
    <div>
      <img src={pictureUrl} alt='' />
      <div>{title}</div>
    </div>
  );
};
