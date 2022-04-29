import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText
} from '@mui/material';

import { Button } from '../Button';

interface ConfirmComponentProps {
  open: boolean;
  handleRemove: () => void;
  title: string;
  handleClose: () => void;
}

const ConfirmComponent = ({
  open,
  handleRemove,
  title,
  handleClose
}: ConfirmComponentProps) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent sx={{ padding: '2.5rem' }}>
        <DialogContentText id="alert-dialog-description">
          {title}
        </DialogContentText>
      </DialogContent>
      <DialogActions
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Button data-testid="closeConfirm" onClick={handleClose}>
          Cancelar
        </Button>
        <Button size="runt" onClick={handleRemove}>
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export { ConfirmComponent };
