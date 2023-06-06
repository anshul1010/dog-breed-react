import ListItem from "./ListItem";
function ListGroup({ items }) {
  return (
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      {items?.map((item) => (
        <ListItem key={item.id} {...item} />
      ))}
    </div>
  );
}
export default ListGroup;
