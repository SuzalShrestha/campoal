import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
type FormCustomProps = {
  children: React.ReactNode;
  label: string;
  className?: string;
};
function FormCustom({ children, label, className }: FormCustomProps) {
  return (
    <FormItem className={cn("space-y-4", className)}>
      <FormLabel className="text-lg text-slate-700">{label}</FormLabel>
      <FormControl>{children}</FormControl>
      <FormMessage />
    </FormItem>
  );
}
export default FormCustom;
