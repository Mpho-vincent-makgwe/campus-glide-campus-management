// components/WelcomeBanner.jsx
const WelcomeBanner = () => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#3AC204] to-green-500 text-white px-6 py-6">
      {/* subtle diagonal accents like the screenshot */}
      <div className="pointer-events-none absolute -right-20 -top-24 h-48 w-96 rotate-[20deg] rounded-3xl bg-white/10" />
      <div className="pointer-events-none absolute right-10 -bottom-20 h-56 w-96 rotate-[25deg] rounded-3xl bg-white/10" />

      <div className="relative">
        <h2 className="text-lg font-semibold">Hello Ann Grob</h2>
        <p className="text-sm opacity-90">
          Welcome back to the Campus Glide Dashboard System
        </p>
      </div>
    </div>
  );
};

export default WelcomeBanner;
