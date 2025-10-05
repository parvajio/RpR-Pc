// just an async func with children properties
export default async function RsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="px-4 py-2">{children}</div>
    </div>
  );
}
