const List = ({ data, styleList = "list-none", classname }) => {
  return (
    <ul className={`text-base lg:h-full lg:text-lg ${classname}`}>
      {data.map((el, i) => {
        return (
          <li className={`${styleList}`} key={i}>
            {el}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
