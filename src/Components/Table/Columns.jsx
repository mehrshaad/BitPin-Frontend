import notFound from "../../Assets/not-found.svg";
import images from "../../Assets/image.svg";
const Columns = [
  {
    title: "Ico",
    dataIndex: "image",
    key: "image",
    align: "center",
    // render: (image) =>
    //   image ? (
    //     <img
    //       src={image}
    //       alt=""
    //       style={{
    //         width: "var(--table-icon-size)",
    //         height: "var(--table-icon-size)",
    //       }}
    //     />
    //   ) : (
    //     <img
    //       src={notFound}
    //       alt=""
    //       style={{
    //         width: "var(--table-icon-size)",
    //         height: "var(--table-icon-size)",
    //       }}
    //     />
    //   ),
  },
  {
    title: "Name",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

export default Columns;
