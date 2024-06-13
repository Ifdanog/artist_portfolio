import React from "react";

const Hero = () => {
  return (
    <div className="p-6 bg-black flex justify-center items-center">
      <div className="w-full md:w-2/3">
        <div className="w-full h-[30rem] bg-heroimage"></div>
        <h1 className="font-black text-5xl p-2 text-center">Oniosun Obafemi</h1>
        <p className="leading-8 text-xs md:text-normal">
          Oniosun Obafemi is an open minded individual with great social skills.
          He is a trained actor, screenwriter, make up artist, decorator and
          certified filmmaker. He is a graduate of ekiti state university
          (English Education)
        </p>
        <p className="leading-8 text-xs md:text-normal">
          He had his first training at Apex produktion studio where he learned
          the rudiments and basics of screenwriting, dialogue directing, acting
          and directing.
        </p>
      </div>
    </div>
  );
};

export default Hero;
