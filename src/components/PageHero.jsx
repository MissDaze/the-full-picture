export default function PageHero({ title, subtitle }) {
  return (
    <section className="bg-[#111111] pt-32 pb-14">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#f5f0e8] leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[#888888] text-lg mt-4 max-w-xl">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
