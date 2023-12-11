import LogoSection from "./(dashboard)/_components/LogoSection";
import FindOut from "./(dashboard)/_components/FindOut";
import CardSection from "./(dashboard)/_components/CardSection";
export default function Home() {
  return (
    <div>
      <div>
        <LogoSection />
      </div>
      <div>
        <FindOut />
      </div>
      <div>
        <CardSection />
      </div>
    </div>
  );
}
