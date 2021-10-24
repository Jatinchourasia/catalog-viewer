import "./App.css";
import ImageSlider from "./Components/ImageSlider";
import { SliderData } from "./Components/SliderData";

function App() {
  return <ImageSlider slides={SliderData} />;
}

export default App;
