import LogoSection from "./(dashboard)/_components/LogoSection";
import FindOut from "./(dashboard)/_components/FindOut";
import CardSection from "./(dashboard)/_components/CardSection";
import Message from "./(dashboard)/_components/Message";
import About from "./(dashboard)/_components/About";
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
      <div>
        <Message />
      </div>
      <div>
        <About />
      </div>
    </div>
  );
}
