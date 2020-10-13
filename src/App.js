import React, { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardGrid, Container, Header } from "./Elements";
import Modal from "./Modal";

import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";

import "./App.css";

const App = () => {
  const [value, setValue] = useState(0);
  const [isToggled, setToggle] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Header>
        <Menu />
        <h1>Header</h1>
      </Header>
      <Container>
        <AnimatePresence>
          {!!isToggled && (
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ x: Number(value) * 5, opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Super Cool
            </motion.h2>
          )}
        </AnimatePresence>
        <button onClick={() => setToggle((prev) => (prev === 1 ? 0 : 1))}>
          Toggle
        </button>
        <button onClick={() => setModalOpen((prev) => !prev)}>Modal</button>
        <input
          type="range"
          min="-100"
          max="100"
          value={value}
          onChange={(evt) => {
            setValue(evt.target.value);
          }}
        />

        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <Card style={{ background: "var(--purp)" }}>
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
        </Modal>
        <CardGrid>
          <Card style={{ background: "var(--purp)" }}>
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
          <Card style={{ background: "var(--blue)" }}>
            <h3>Some card</h3>
            <img src={blue} />
          </Card>
          <Card style={{ background: "var(--black)" }}>
            <h3>Some card</h3>
            <img src={black} />
          </Card>
          <Card style={{ background: "var(--green)" }}>
            <h3>Some card</h3>
            <img src={green} />
          </Card>
        </CardGrid>
      </Container>
    </motion.div>
  );
};

export default App;
