import "animate.css";
import { InfinitySpin } from "react-loader-spinner";
import "./MdLoader.scss";

function MdLoader({ loadText = "درحال بارگذاری دیتا" }) {
  return (
    <div className="loader">
      <h2>
        <InfinitySpin
          visible={true}
          width="200"
          color="var(--secondary-text-color-light)"
          ariaLabel="infinity-spin-loading"
        />
      </h2>
      {/* <h2>{loadText}</h2> */}
    </div>
  );
}

export default MdLoader;
