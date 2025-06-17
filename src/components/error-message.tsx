type Props = {
  message: string;
};

export function ErrorMessage({ message }: Props) {
  return (
    <div className="flex items-center justify-center bg-black p-4">
      <h1 className="text-2xl font-bold text-red-600">{message}</h1>
    </div>
  );
}
