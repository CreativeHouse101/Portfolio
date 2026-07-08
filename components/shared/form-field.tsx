import { cn } from "@/lib/utils";

type FormFieldProps = {
  label: string;
  name: string;
  onChange: (value: string) => void;
  textarea?: boolean;
  type?: string;
  value: string;
};

export function FormField({ label, name, onChange, textarea = false, type = "text", value }: FormFieldProps) {
  const id = `field-${name}`;
  const controlClass =
    "mt-2 w-full rounded-[8px] border border-line bg-paper px-4 py-3 text-base outline-none transition placeholder:text-muted/70 focus:border-signal focus:ring-2 focus:ring-signal/20";

  return (
    <label className="block" htmlFor={id}>
      <span className="text-sm font-semibold uppercase tracking-normal text-muted">{label}</span>
      {textarea ? (
        <textarea className={cn(controlClass, "min-h-40 resize-y")} id={id} name={name} onChange={(event) => onChange(event.target.value)} value={value} />
      ) : (
        <input className={controlClass} id={id} name={name} onChange={(event) => onChange(event.target.value)} type={type} value={value} />
      )}
    </label>
  );
}
