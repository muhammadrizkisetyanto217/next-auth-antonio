import { BsCheckCircle } from "react-icons/bs";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;
  return (
    //* bg-destructive/15 adalah red
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-2 text-sm text-emerald-500">
      <BsCheckCircle />
      <p>{message}</p>
    </div>
  );
};
