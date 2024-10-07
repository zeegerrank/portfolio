import HomeBlock from "../../components/HomeBlock";
import InfoBlock from "../../components/infoBlocks/InfoBlocks";
import SelectedBlock from "../../components/infoBlocks/SelectedBlock";

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <InfoBlock />
        <HomeBlock />
        <SelectedBlock />
      </section>
    </>
  );
}

export default Home;
