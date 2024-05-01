import * as React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import { CgClose } from 'react-icons/cg';
import { IconBase } from 'react-icons';

const Modal = ({ open, onClose, title, children, fullScreen, isClosed, icon, ...props }) => {
  return (
    <Dialog fullScreen={fullScreen} open={open} onClose={onClose} fullWidth {...props}>
      {(isClosed || title) && (
        <DialogTitle display="flex" justifyContent="space-between">
          <div>
            {icon && <IconBase />}
            <span>{title}</span>
          </div>
          {isClosed && <CgClose onClick={(event) => onClose?.(event, 'backdropClick')} />}
        </DialogTitle>
      )}
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
