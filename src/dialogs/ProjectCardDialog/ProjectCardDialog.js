import React, { forwardRef, useState } from "react";

import styled from "styled-components";
import { spacing, palette, typography } from "@material-ui/system";
import media from "styled-media-query";
import { Dialog, DialogTitle } from "@material-ui/core";

const ProjectCardDialog = (props) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    props.handleCloseDialog();
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{props.item.title}</DialogTitle>
      </Dialog>
    </div>
  );
};

export default ProjectCardDialog;
