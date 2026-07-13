export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-transition" data-page-transition>
      {children}
    </div>
  );
}
