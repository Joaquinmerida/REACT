import React from "react";
import ItemList from "./ItemList";
import Landing from "./Landing"
import { Route, Routes, Link } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";
import CatVegan from "./CatVegan";
import CatDelivery from "./CatDelivery";
import CatBajasCal from "./CatBajasCal"

const Main = () => {

  
  const lista = [
    {
      id: 1,
      name: "nulla",
      price: 412,
      description:
        "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      cal: 1039,
      vegan: false,
      delivery: false,
    },
    {
      id: 2,
      name: "augue luctus tincidunt",
      price: 664,
      description:
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      cal: 652,
      vegan: true,
      delivery: false,
    },
    {
      id: 3,
      name: "eleifend luctus",
      price: 1098,
      description:
        "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      cal: 1229,
      vegan: true,
      delivery: false,
    },
    {
      id: 4,
      name: "neque sapien placerat",
      price: 909,
      description:
        "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      cal: 1167,
      vegan: true,
      delivery: true,
    },
    {
      id: 5,
      name: "commodo vulputate",
      price: 660,
      description:
        "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      cal: 974,
      vegan: true,
      delivery: false,
    },
    {
      id: 6,
      name: "magna vulputate",
      price: 1136,
      description:
        "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      cal: 698,
      vegan: false,
      delivery: true,
    },
    {
      id: 7,
      name: "amet",
      price: 1276,
      description:
        "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      cal: 1041,
      vegan: true,
      delivery: false,
    },
    {
      id: 8,
      name: "sapien varius ut",
      price: 860,
      description:
        "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      cal: 1481,
      vegan: false,
      delivery: false,
    },
    {
      id: 9,
      name: "vivamus metus",
      price: 592,
      description: "Fusce consequat. Nulla nisl. Nunc nisl.",
      cal: 604,
      vegan: true,
      delivery: false,
    },
    {
      id: 10,
      name: "nibh",
      price: 808,
      description:
        "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      cal: 1381,
      vegan: false,
      delivery: false,
    },
    {
      id: 11,
      name: "sed interdum",
      price: 1001,
      description:
        "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      cal: 712,
      vegan: true,
      delivery: true,
    },
    {
      id: 12,
      name: "eros viverra",
      price: 435,
      description:
        "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      cal: 1287,
      vegan: false,
      delivery: false,
    },
    {
      id: 13,
      name: "proin eu",
      price: 733,
      description:
        "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      cal: 1466,
      vegan: true,
      delivery: true,
    },
    {
      id: 14,
      name: "id",
      price: 696,
      description:
        "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      cal: 707,
      vegan: true,
      delivery: true,
    },
    {
      id: 15,
      name: "mi in",
      price: 1111,
      description:
        "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      cal: 862,
      vegan: true,
      delivery: true,
    },
    {
      id: 16,
      name: "nisl ut volutpat",
      price: 749,
      description:
        "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      cal: 465,
      vegan: false,
      delivery: false,
    },
    {
      id: 17,
      name: "ligula sit amet",
      price: 1186,
      description:
        "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      cal: 946,
      vegan: true,
      delivery: false,
    },
  ];

  return (
    <>
      <Routes>
        <Route
          path="/" element={
          <>
            <div className="main__items">
              <ItemList producto={lista} />
            </div>
            <div className="main__categorias">
            <Link to="/categoria/light"> Bajas Calorias </Link>
            <Link to="/categoria/delivery"> Envio Gratis </Link>
            <Link to="/categoria/vegan"> Platos vegetarianos </Link>
            </div>
          </>
          }
        />

        <Route path="/inicio" element={<Landing />} />

        <Route
          path="/producto/:"
          element={<ItemDetailContainer listaa={lista} />}
        />

        <Route path="/categoria/vegan" element={<CatVegan categoria = "para vegetarianos" listaa={lista}/>}/>

        <Route path="/categoria/delivery" element={<CatDelivery categoria = "con envio gratis" listaa={lista}/>}/>

        <Route path="/categoria/light" element={<CatBajasCal categoria = "con bajas calorias" listaa={lista}/>}/>

        <Route
          path="/producto/:id"
          element={<ItemDetailContainer listaa={lista[0]} />}
        />
      </Routes>
    </>
  );
};

export default Main;
