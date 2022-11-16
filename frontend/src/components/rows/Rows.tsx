import "./Rows.scss";
import { Row } from "../../types/enum/row";
import Items from "./Items";
import parse from "html-react-parser";

interface IProps {
  title: string;
  body: string;
  type: Row;
  items: Array<any>;
  size: number;
  styles: string;
}

const Rows = (props: IProps) => {
  const { title, body, type, items, size, styles } = props;
  return (
    <>
      <div className={"rows-now " + styles}>
        <h2>{title}</h2>
        {parse(body)}
        <Items type={type} items={items} size={size} />
      </div>
    </>
  );
};

export default Rows;
