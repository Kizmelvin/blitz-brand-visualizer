import { useState } from "react";
import axios from "axios";
import { Col, Row, Container } from "react-bootstrap";

const Home = () => {
  const [coffeBrand, setCoffeeBrand] = useState("");
  const [notepadBrand, setNotepadBrand] = useState("");
  const [hoodieBrand, setHoodieBrand] = useState("");
  const [cardBrand, setCardBrand] = useState("");

  console.log(coffeBrand);

  const handleClick = (e) => {
    let logoId = e.target.id;

    let img = axios.post(`/api/cloudinary?id=${logoId}`);
    img.then((res) => {
      const { mug, notepad, hoodie, card } = res.data;
      setCoffeeBrand(mug);
      setNotepadBrand(notepad);
      setHoodieBrand(hoodie);
      setCardBrand(card);
    });
  };

  return (
    <Container md={8} className="p-3">
      <h1 className="text-center mb-5">
        {" "}
        <strong>Brand Visualizer</strong>{" "}
      </h1>
      <div>
        <div className="container">
          {" "}
          <h5 className="mt-2 fs-5">Select a logo to preview on the items</h5>
          <Row className="logo">
            <Col xs={4}>
              <img
                id="birdwings"
                src="/birdwings.svg"
                width={50}
                height={50}
                alt="birdwings brand"
                onClick={handleClick}
              />
            </Col>
            <Col xs={4}>
              <img
                id="phoenix"
                src="/phoenix.svg"
                width={50}
                height={50}
                alt="phoenix brand"
                onClick={handleClick}
              />
            </Col>
            <Col x={4}>
              <img
                id="butterfly"
                src="/butterfly.svg"
                width={50}
                height={50}
                alt="butterfly brand"
                onClick={handleClick}
              />
            </Col>
          </Row>
        </div>

        <Row className="mt-5 branded">
          <Col className="p-4">
            <img
              src={`${!coffeBrand ? "/mug.png" : coffeBrand}`}
              alt="branded coffee mug"
              width={320}
              height={300}
              style={{
                filter: `${!coffeBrand ? "grayscale(100%)" : "none"}`
              }}
            />
          </Col>
          <Col className="p-4">
            <img
              src={`${!notepadBrand ? "/notepad.jpg" : notepadBrand}`}
              alt="branded notepad"
              width={320}
              height={300}
              style={{
                filter: `${!notepadBrand ? "grayscale(100%)" : "none"}`
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col className="p-4">
            <img
              src={`${!hoodieBrand ? "/hoodie.jpg" : hoodieBrand}`}
              alt="branded hoodie"
              width={320}
              height={300}
              style={{
                filter: `${!hoodieBrand ? "grayscale(100%)" : "none"}`
              }}
            />
          </Col>
          <Col className="p-4">
            <img
              src={`${!cardBrand ? "/card.png" : cardBrand}`}
              alt="branded hoodie"
              width={320}
              height={380}
              style={{ filter: `${!cardBrand ? "grayscale(100%)" : "none"}` }}
            />
          </Col>
        </Row>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;700&display=swap");

        html,
        body {
          padding: 0;
          margin: 0;
          background: violet;
          font-family: "Libre Franklin", -apple-system, BlinkMacSystemFont,
            Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
        }

        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          box-sizing: border-box;
        }
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .logo img {
          cursor: pointer;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </Container>
  );
};

Home.suppressFirstRenderFlicker = true;
export default Home;
