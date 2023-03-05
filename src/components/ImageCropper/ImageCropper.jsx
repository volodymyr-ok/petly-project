import Cropper from "react-easy-crop";
import React from "react";
// import getCroppedImg from "./cropService";
import { dataURLtoFile } from "./cropService";
import { getCroppedImgPrevue } from "./cropService";
import {ReactComponent as Add} from "../../assets/svg/Plus.svg"
import { CropBox, CropImgPrevue, CropContainer, CropControls, ControlsButtonBox, BtnAdd, ControllerBox, Boxik, ButtonCancel, BtnClose, Image } from "./ImageCropper.styled";
 import { useState, useRef  } from "react";
import { HiArrowLeftCircle } from "react-icons/hi2";

export const ImageCropper = ({setCroppedImageFor, avatar}) => {
  const inputRef = useRef();

  const triggerFileSelectPopup = () => inputRef.current.click();

  const [image, setImage] = useState(null || avatar);
  const [croppedArea, setCroppedArea] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [prevue, setPrevue] = useState(false);
  const [prevueUrl, setPrevueUrl] = useState(false);
  const [name, setName] = useState("example.jpg");


  const onCropComplete = async (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
	  // getPrevue(croppedAreaPixels)

  };

 
  const getPrevue= async(croppedAreaPixels)=>{
    try {
       const result = await getCroppedImgPrevue(image, croppedArea, 0, true)
       setPrevue(true)
        setPrevueUrl(result)
        const croppedImageUrl = await getCroppedImgPrevue(image, croppedArea || croppedAreaPixels);
        const canvasDataUrl = croppedImageUrl.toDataURL("image/jpeg");
        const [fileName,  ] = name.split(".")
        const convertedUrlToFile = dataURLtoFile(
          canvasDataUrl,
          `${fileName}.jpg`
        );
        setCroppedImageFor(convertedUrlToFile);
      } catch (error) {
        console.log(error);
      }
  };
  const onSelectFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => {
        setName(event.target.files[0].name)
        setImage(reader.result);
        event.target.value = "";
      });
    }
  };
  const onCancel = () => {
    setImage(null);
    setPrevue(false)
    // setPrevue(null)
  };


  return (
    <CropBox id="1">
		<CropImgPrevue id="2">
		{image && !prevue && (
        <Boxik id="3">
          <CropContainer id="4">
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
               <ButtonCancel type="button" onClick={onCancel}><HiArrowLeftCircle></HiArrowLeftCircle></ButtonCancel>
          </CropContainer>
       <CropControls id="5">

              <input
                type="range"
                min={0.7}
                max={2}
                step={0.1}
                value={zoom}
                onInput={(e) => setZoom(e.target.value)}
              />

            <ControlsButtonBox id="6">
           
              <BtnClose type="button" onClick={getPrevue}>Set image</BtnClose>
            </ControlsButtonBox>
          </CropControls>
        </Boxik>
      )}
   {prevue && (<><Image width={200} height={200} src={prevueUrl} alt="prevue"></Image>
   <ButtonCancel type="button" onClick={onCancel}><HiArrowLeftCircle></HiArrowLeftCircle></ButtonCancel></>)}
		</CropImgPrevue>

      <ControllerBox>
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={onSelectFile}
          style={{ display: "none" }}
        />
       {!image &&  <BtnAdd type="button" onClick={triggerFileSelectPopup}>
          <Add width={48} height={48}></Add>
        </BtnAdd>}
      </ControllerBox>
    </CropBox>
  );
};
