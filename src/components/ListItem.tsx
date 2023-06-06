import LoadImage from "./LoadImage";
function ListItem({ name, reference_image_id, life_span }) {
  return (
    <div className="h-full p-4 lg:w-1/3">
      <div className="bg-white px-8 pt-16 pb-16 relative">
        <div className="flex justify-between py-4">
          <h2>{name}</h2>
          <h2>{life_span}</h2>
        </div>
        <p className="mb-3">
          <LoadImage id={reference_image_id} name={name} />
        </p>
      </div>
    </div>
  );
}
export default ListItem;
