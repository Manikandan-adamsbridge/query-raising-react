import React from 'react';
import { Modal as BootstrapModal, Button } from 'react-bootstrap';

const ModalComponent = ({ isOpen, onClose, heading, children }) => {
  if (!isOpen) return null;

  return (
    <BootstrapModal show={isOpen} onHide={onClose} centered>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>{heading}</BootstrapModal.Title>
      </BootstrapModal.Header>

      <BootstrapModal.Body>{children}</BootstrapModal.Body>

      <BootstrapModal.Footer>
        <Button variant="danger" onClick={onClose}>
          Close
        </Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
};

export default ModalComponent;
