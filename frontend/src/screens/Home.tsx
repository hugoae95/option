import React from "react";
import Arrow from "../components/arrow/Arrow";
import Banner from "../components/banner/Banner";
import OurNumbers from "../components/layout/home/OurNumbers";
import Rows from "../components/rows/Rows";
import { Row } from "../types/enum/row";
import { organizations } from "../mocks/organizations";
import { causes } from "./../mocks/causes";
import { comunities } from "../mocks/comunity";
import { helpers } from "../mocks/helpers";
import { blog } from "../mocks/blog";

const Home = () => {
  return (
    <div>
      <Banner />
      <Arrow />
      <Rows
        type={Row.CAUSE}
        title={"Causas"}
        size={3}
        styles="rd-causas"
        body={
          "<p>Enamórate de las causas que nos mueven cada día y construyamos un mundo mejor.</p>"
        }
        items={causes}
      />
      <Arrow />
      <OurNumbers />
      <Arrow />
      <Rows
        type={Row.ORGANIZATION}
        title={"Organizaciones"}
        styles="rd-organizacion"
        size={4}
        body={
          "<p>Estas son las organizaciones que creen en nosotros y nos ayudan a construir un mundo mejor.</p>"
        }
        items={organizations}
      />
      <Arrow />
      <Rows
        type={Row.COMUNITY}
        title={"Comunidad"}
        styles="rd-organizacion"
        size={3}
        body={
          "<p>Esto es lo que dicen algunas personas que se identifican con nuestra filosofía y nos ayudan a construir un mundo mejor.</p>"
        }
        items={comunities}
      />
      <Arrow />
      <Rows
        type={Row.HELPERS}
        title={"Estas empresas también creen en nosotros..."}
        styles="rd-organizacion"
        size={4}
        body={"<p>...y nosotros creemos en ellas.</p>"}
        items={helpers}
      />
      <Arrow />
      <Rows
        type={Row.BLOG}
        title={"Blog"}
        styles="rd-blogs"
        size={3}
        body={"<p></p>"}
        items={blog}
      />
    </div>
  );
};

export default Home;
