import "animate.css";
import { InfinitySpin } from "react-loader-spinner";
import "./MdLoader.scss";

function MdLoader({ loadText }) {
  return (
    <div className="loader animate__animated animate__fadeIn">
      <h2>
        <InfinitySpin
          visible={true}
          width="200"
          color="var(--secondary-text-color)"
          ariaLabel="infinity-spin-loading"
        />
      </h2>
      <h2>{loadText}</h2>
    </div>
  );
}

export default MdLoader;
