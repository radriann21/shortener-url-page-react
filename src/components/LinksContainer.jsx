import { LinksInput } from "./LinksInput";
import { DisplayLinks } from "./DisplayLinks";

export const LinksContainer = () => {
  return (
    <section className="w-full sm:w-[60%] flex flex-col items-center mx-auto -translate-y-10 sm:-translate-y-16">
      <LinksInput />
      <DisplayLinks />
    </section>
  );
};
