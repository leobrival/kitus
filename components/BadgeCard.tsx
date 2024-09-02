const BadgeCard = () => {
  return (
    <div className="flex h-[534px] w-[354px] flex-col justify-between gap-8 rounded-lg bg-stone-700 p-4 font-mono text-stone-200">
      <div className="flex flex-col gap-4">
        <div className="flex w-full items-center justify-center">
          <div className="h-2 w-16 rounded-full bg-stone-200"></div>
        </div>
        <p className="text-center tracking-wider">TIER 1 ACCESS</p>
      </div>
      <div className="flex grow items-center justify-between gap-4">
        <div className="size-full bg-stone-300"></div>
        <div className="flex h-full flex-col justify-between">
          <div className="size-12 bg-stone-300"></div>
          <div className="flex flex-col items-center gap-1 text-[2.25rem]">
            <span>2</span>
            <span>0</span>
            <span>7</span>
          </div>
        </div>
      </div>
      <div className="text-[2.5rem]">
        Dr. E.
        <br />
        Kerning
      </div>
      <p className="text-[1rem]">Kitus Research Labs</p>
    </div>
  );
};

export default BadgeCard;
