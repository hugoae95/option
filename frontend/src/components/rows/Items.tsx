import Slider from "react-slick";
import { Row } from "../../types/enum/row";
import Cause from "./Cause";
import Helpers from "./Helpers";
import Organization from "./Organization";
import Testimonials from "./Testimonials";
import Blog from "./Blog";

interface IProps {
  type: Row;
  items: Array<any>;
  size: number;
}

const Items = (props: IProps) => {
  const { type, items, size } = props;
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    fade: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  settings.slidesToShow = size;
  return (
    <div className="grid_slider_now container">
      <Slider {...settings}>
        {items.map((item, index) => {
          switch (type) {
            case Row.CAUSE:
              return <Cause key={"c-" + index} {...item} />;
            case Row.ORGANIZATION:
              return <Organization key={"o-" + index} {...item} />;
            case Row.COMUNITY:
              return <Testimonials key={item.id} {...item} />;
            case Row.HELPERS:
              return <Helpers key={"h-" + index} {...item} />;
            case Row.BLOG:
              return <Blog key={"b-" + index} {...item} />;
            default:
              return <Cause key={"c-" + index} {...item} />;
          }
        })}
      </Slider>
    </div>
  );
};

export default Items;
