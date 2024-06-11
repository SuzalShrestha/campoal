import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserRound } from "lucide-react";
function CardCustom({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="bg-card-primary flex h-[300px] flex-col items-center justify-center rounded-2xl font-circularstdnormal text-white">
      <CardHeader>
        <CardTitle className="flex flex-col items-center justify-center gap-5">
          <div className="mt-5 flex w-[80px] items-center justify-center rounded-full bg-white text-slate-500">
            <UserRound width={50} height={80} className="px-1" />
          </div>
          <p>{title}</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center text-sm">
        <p className="text-[#CFCCE9]">{description}</p>
      </CardContent>
    </Card>
  );
}
export default CardCustom;
