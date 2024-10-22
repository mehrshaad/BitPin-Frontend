import { Flex, Progress } from "antd";
import "./MdProgress.scss";

function MdProgress({ percent = 99, mode = "buy" }) {
  return (
    <Flex gap="small" vertical>
      <Progress
        percent={percent}
        percentPosition={{
          align: "center",
          type: "outer",
        }}
        strokeColor={`var(--progress-${mode}-background-color)`}
        format={() => {
          return "done";
        }}
        strokeLinecap={"square"}
        size={["100%", 30]}
      />
    </Flex>
  );
}
export default MdProgress;
