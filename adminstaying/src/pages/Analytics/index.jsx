import { useSearchParams } from "react-router-dom";
import Title from "../../components/Title/Title";
import Report from "./Report";

function Analytics() {
  const [searchParams] = useSearchParams();

  const location = searchParams.get("report");

  const params = [{}];

  return (
    <div>
      <div className="mt-0 mb-0 ml-auto mr-auto max-w-[var(--max-width)] p-4 relative">
        <div className="mb-4 flex flex-col gap-1">
          <Title title="Analytics" fontBold extraLarge5 />
          <Title title="Analyse existing bookings to plan for the future" xxl nowrap={false} />
        </div>
        <div className="mb-4">
          <Report />
        </div>
      </div>
    </div>
  );
}

export default Analytics;
