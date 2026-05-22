export function GridBackdrop() {
  return (
    // <div className="relative w-full flex items-center justify-center flex-col overflow-hidden rounded-high ">
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
    // </div>
  );
}
