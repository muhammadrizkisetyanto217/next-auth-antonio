import { BsExclamationTriangle } from "react-icons/bs";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;
  return (
    //* bg-destructive/15 adalah red
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-2 text-sm text-destructive">
      <BsExclamationTriangle />
      <p>{message}</p>
    </div>
  );
};
