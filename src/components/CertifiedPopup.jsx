import Modal from "react-modal";
import React from "react";
import "../styled-components/certifiedPopup.css"
const CertifiedPopup=({showCertified, setShowshowCertified,srcCertificate})=>{

    return(
        <div style={{ zIndex: 5, overflow: "scroll", textAlign: "center" }}>
          <Modal
            isOpen={showCertified}
            ariaHideApp={false}
            contentLabel="Video demostracion"
            onRequestClose={() => {
                setShowshowCertified(false);
            }}
            style={{
              content: {
                width: "60vw",
                height: "fit-content",
                margin: "auto",
                left: "0px",
              },
            }}
          >
            <img id="img-certified" src={`${process.env.PUBLIC_URL}/${srcCertificate}`} alt="" />
          </Modal>
        </div>
    )
}
export default CertifiedPopup;