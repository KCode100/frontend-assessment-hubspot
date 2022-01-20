import Media from "./components/media/Media";
import Heading from "./components/Heading";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <Heading text="Exercise 1 - Testimonial Block" />
      <Testimonial />
      <Heading text="Exercise 2 - Filterable Content" />
      <Media />
    </>
  );
}

export default App;
