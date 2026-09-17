export default function Logo({ className = '', invert = false }) {
  return (
    <span className={`flex items-center gap-2 text-white ${className}`}>
      <img
        src="/assets/wisnotech-logo.png"
        alt="Wisnotech logo"
        loading="eager"
        className={`h-7 w-auto object-contain sm:h-8 ${invert ? 'invert' : ''}`}
        onError={e => { e.currentTarget.style.display = 'none'; const fb = e.currentTarget.nextElementSibling; if (fb) fb.style.display = 'flex' }}
      />
      <span className="hidden h-8 items-center justify-center rounded-lg bg-white px-2 font-bold text-sm text-[#080808]" style={{ display: 'none' }}>W</span>
      <span className="text-[17px] font-semibold tracking-tight">WISNOTECH</span>
    </span>
  )
}
