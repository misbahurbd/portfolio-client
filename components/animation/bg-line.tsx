function BgLine() {
  return (
    <div className="absolute inset-0 flex justify-evenly -z-10 animate-pulse top-0 left-0 right-0 bottom-0 !m-0">
      <span className="w-[1px] bg-border" />
      <span className="w-[1px] bg-border" />
      <span className="w-[1px] bg-border" />
      <span className="w-[1px] bg-border hidden sm:inline" />
      <span className="w-[1px] bg-border hidden sm:inline" />
      <span className="w-[1px] bg-border hidden md:inline" />
      <span className="w-[1px] bg-border hidden md:inline" />
      <span className="w-[1px] bg-border hidden lg:inline" />
      <span className="w-[1px] bg-border hidden lg:inline" />
      <span className="w-[1px] bg-border hidden xl:inline" />
      <span className="w-[1px] bg-border hidden xl:inline" />
      <span className="w-[1px] bg-border hidden 2xl:inline" />
    </div>
  )
}

export default BgLine
