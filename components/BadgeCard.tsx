const BadgeCard = () => {
  return (
    <div className="w-[354px] h-[534px] bg-stone-700 rounded-lg font-mono p-4 gap-8 text-stone-200 flex flex-col justify-between">
      <div className="gap-4 flex flex-col">
        <div className="w-full flex items-center justify-center">
          <div className="w-16 h-2 bg-stone-200 rounded-full"></div>
        </div>
        <p className="text-center tracking-wider">TIER 1 ACCESS</p>
      </div>
      <div className="flex justify-between gap-4 items-center flex-grow">
        <div className="w-full h-full bg-stone-300"></div>
        <div className="flex flex-col justify-between h-full">
          <div className="h-12 w-12 bg-stone-300"></div>
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
