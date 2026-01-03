export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#fdfdff] overflow-hidden">
      {/* Big blue orb */}
      <div
        className="absolute -top-40 -left-40 w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, #bfdbfe 0%, #dbeafe 40%, transparent 70%)"
        }}
      />
      {/* Purple orb on top */}
      <div
        className="absolute top-20 left-20 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, #ddd6fe 0%, #ede9fe 40%, transparent 70%)"
        }}
      />
      {/* Bottom right purple-blue */}
      <div
        className="absolute -bottom-60 -right-40 w-[900px] h-[900px] rounded-full"
        style={{
          background: "radial-gradient(circle, #c7d2fe 0%, #e0e7ff 40%, transparent 70%)"
        }}
      />
    </div>
  );
}