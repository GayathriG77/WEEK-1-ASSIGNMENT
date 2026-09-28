import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Card from "./components/Card";
import Form from "./components/Form";


function App() {
  return (
    <>
      <Header />

      <Button text="Login" />
      <Button text="Register" />
      <Button text="Contact" />

      <Card
        title="React"
        description="Learning React components"
      />

      <Card
        title="JavaScript"
        description="Learning JavaScript basics"
      />
      <Form />
      <Footer />
    </>
  );
}

export default App;