import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect, useState } from "react";
import { APIService } from "../service/index";

function LoadImage({ id, name }) {
  const [url, setImgUrl] = useState();
  // const refPlaceholder = useRef();
  // const removePlaceholder = useCallback(
  //   () => refPlaceholder.current.remove(),
  //   []
  // );
  useEffect(() => {
    async function getUrl() {
      await APIService(`images/${id}`).then((res) => {
        setImgUrl(res?.url);
      });
    }
    if (id) getUrl();
  }, [id]);

  if (!id) {
    return (
      <img
        src="./src/assets/no-photos.png"
        title="Image not available"
        alt="no-img"
        width="300px"
        height="300px"
      />
    );
  }
  return (
    <LazyLoadImage
      key={id}
      src={url}
      alt={name}
      title={name}
      className="img-lazy"
      width={500}
      height={500}
    />
  );
}

export default LoadImage;
