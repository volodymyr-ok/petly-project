import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { updateAvatars } from "../../redux/user/user-operations";
import { UploadBtn, UploadWrap } from "./UploadFile.styled";
import { ReactComponent as Plus } from "../../assets/svg/plusUpload.svg";

export const UploadFile = ({ setFile }) => {
  const filePicker = useRef(null);
  const [selectedFile, setSelecetedFile] = useState(null);
  const [uploaded, setUploaded] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log("inpuyt", e.target.files);
    setSelecetedFile(e.target.files[0]);
    // dispatch(updateAvatars(selectedFile));
  };

  const handleUpload = async (e) => {
    console.log("inpuyt", e.target.files);
    if (!selectedFile) {
      alert("Please select file");
      return;
    }

    console.log("selectedFile", selectedFile);
    dispatch(updateAvatars(selectedFile));
  };

  const handlePick = async (e) => {
    filePicker.current.click();
  };

  return (
    <UploadWrap>
      {/* <Plus onClick={handlePick} /> */}
      {selectedFile ? (
        <UploadBtn onClick={handleUpload}>Upload file</UploadBtn>
      ) : (
        <Plus onClick={handlePick} />
      )}

      {/* <button onClick={handlePick}>Pick File</button> */}
      <input
        type="file"
        onChange={handleChange}
        ref={filePicker}
        accept="image/*,.png,.jpg,.gif,.web,"
      />

      {/* <UploadBtn onClick={handleUpload}>Upload now!</UploadBtn> */}
    </UploadWrap>
  );
};
