import React from "react";
import { Button, Modal, Stack } from "react-bootstrap";
import { currencyFormatter } from "../utilities";

export function ViewCart({ productId, handleClose }) {
  const [viewCartClicked, setViewCartClicked] = useState(null);
  return (
    <>
      {/* <AnimatePresence>
        {viewCartClicked && (
          <motion.div
            className="view-cart-modal"
            onClick={() => setViewCartClicked(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              src={viewCartClicked}
              className="view-cart"
              layoutId={viewCartClicked}
            />
          </motion.div>
        )}
      </AnimatePresence> */}

      <Modal>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stack direction="vertical">
            {items.map((item) => {
              <Stack direction="horizontal" key={item.id}>
                <div>{item.name}</div>
                <div>{item.img}</div>
                <div>{item.description}</div>
                <div>{currencyFormatter.format(item.price)}</div>
                <div>
                  <Button
                    className="btn btn-danger remove-btn"
                    onclick={deleteItemFromCart}
                  >
                    Remove
                  </Button>
                </div>
              </Stack>;
            })}
          </Stack>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ViewCart;
