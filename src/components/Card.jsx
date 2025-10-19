export default function Card({ title, children }) {
  return (
    <div className="border p-4 rounded shadow-md bg-white dark:bg-gray-700">
      <h2 className="font-bold mb-2">{title}</h2>
      {children}
    </div>
  );
}
