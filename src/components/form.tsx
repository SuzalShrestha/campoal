"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FormCustom from "./ui/form-custom";
import ButtonCustom from "./ui/button-custom";
import { Textarea } from "./ui/textarea";
const formSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long." }),
  companyname: z
    .string()
    .min(3, { message: "Company name must be at least 3 characters long." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters long." })
    .max(50, { message: "Subject must be at most 50 characters long." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long." })
    .max(500, { message: "Message must be at most 500 characters long." }),
});
export function ProfileForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = form.handleSubmit((data) => {
    console.log(data);
  });
  return (
    <div className="h-[70%] w-[50%] rounded-xl bg-white px-20 py-20 font-circularstd shadow-md">
      <Form {...form}>
        <form onSubmit={onSubmit} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormCustom label="Username">
                <Input {...field} placeholder="" />
              </FormCustom>
            )}
          />
          <FormField
            control={form.control}
            name="companyname"
            render={({ field }) => (
              <FormCustom label="Company Name">
                <Input {...field} placeholder="" />
              </FormCustom>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormCustom label="Email">
                <Input {...field} placeholder="" />
              </FormCustom>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormCustom label="Subject">
                <Input {...field} placeholder="" />
              </FormCustom>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormCustom label="Message">
                <Textarea {...field} placeholder="" className="resize-none" />
              </FormCustom>
            )}
          />
          <ButtonCustom className="w-full bg-card-primary py-6 text-lg text-slate-400">
            Send
          </ButtonCustom>
        </form>
      </Form>
    </div>
  );
}
function FormHeadings() {
  return (
    <>
      <h1 className="font-circularstd text-5xl text-white">
        Feel free to contact us.
      </h1>
      <h1 className="font-circularstd text-5xl text-white">
        We&apos;ll glad to hear from you.
      </h1>
    </>
  );
}
function FormPage() {
  return (
    <div className="flex h-[1250px] w-full flex-col items-center justify-center gap-10 bg-waveform">
      <FormHeadings />
      <ProfileForm />
    </div>
  );
}
export default FormPage;
