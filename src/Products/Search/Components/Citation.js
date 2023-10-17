import React, { useState } from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalOverflow from "@mui/joy/ModalOverflow";

import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

const Cite = require("citation-js");

export default function Citation(props) {
  const [htmlCitation, setHtmlCitation] = useState();
  const [layout, setLayout] = React.useState(undefined);

  const citation = new Cite(props.citationStyles.bibtex);

  const handleChange = (event, newValue) => {
    event.preventDefault();

    // Get the HTML citation
    setHtmlCitation(
      citation.format("bibliography", {
        format: "html",
        template: newValue,
        lang: "en-US",
      })
    );

    setLayout("fullscreen");
  };

  return (
    <React.Fragment>
      <Select
        sx={{
          mx: 1,
          borderRadius: 28,
          textTransform: "capitalize",
          fontSize: 13,
          height: "100%",
        }}
        variant="outlined"
        color="success"
        placeholder="Cite"
        onChange={handleChange}
      >
        <Option value="ieee">IEEE</Option>
        <Option value="apa">APA 7</Option>
        <Option value="mla">MLA 9</Option>
        <Option value="harvard">Harvard</Option>
      </Select>

      <Modal
        open={!!layout}
        onClose={() => {
          setLayout(undefined);
        }}
      >
        <ModalOverflow>
          <ModalDialog aria-labelledby="modal-dialog-overflow" layout={layout}>
            <ModalClose />
            <div dangerouslySetInnerHTML={{ __html: htmlCitation }} />
          </ModalDialog>
        </ModalOverflow>
      </Modal>
    </React.Fragment>
  );
}
