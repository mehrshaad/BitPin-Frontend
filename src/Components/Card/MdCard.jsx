import "./MdCard.scss";

function MdCard({ children, mode, market = false }) {
  return (
    <div className={`dashboard-card${market ? "-market" : ""} ${mode}`}>
      {children}
    </div>
  );
}

export default MdCard;
