import React from "react";

const Monologue = () => {
  return (
    <div className="w-4/5 md:w-2/3 mx-auto">
      <p className="leading-8 text-xs md:text-normal text-center">
        Oniosun Obafemi is a lover of opportunities and a fast learners who
        believes his dexterity as an actor/screenwriter can take him to the next
        level in every facet of life. He is also keen in imparting the audience
        with high level of positivity and hope.
      </p>
      <p className="leading-8 text-xs md:text-normal text-center">
        He is a versatile actor who is ready to collaborate and learn more. Here
        are some of his monologues.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <video src="/VID1.mp4" controls></video>
        <video src="/VID2.mp4" controls></video>
        <video src="/VID3.mp4" controls></video>
        <video src="/VID4.mp4" controls></video>
        <video src="/VID5.mp4" controls></video>
        <video src="/VID6.mp4" controls></video>
      </div>
    </div>
  );
};

export default Monologue;
