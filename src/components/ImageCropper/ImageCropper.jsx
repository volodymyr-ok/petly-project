// import Cropper from "react-easy-crop";
// import React from "react";
// import getCroppedImg from "../cropImage";
// import { dataURLtoFile } from "../images/dataUrlTofile";
// import { getCroppedImgPrevue } from "../cropImage";
// import { CropBox, CropImgPrevue, CropContainer, CropControls, ControlsButtonBox  } from "./CroppedImg.styled";

// export const ImageCropper = () => {
//   const inputRef = React.useRef();

//   const triggerFileSelectPopup = () => inputRef.current.click();

//   const [image, setImage] = React.useState(null);
//   const [croppedArea, setCroppedArea] = React.useState(null);
//   const [crop, setCrop] = React.useState({ x: 0, y: 0 });
//   const [zoom, setZoom] = React.useState(1);
//   const [prevue, setPrevue] = React.useState(null);

//   const onCropComplete = async (croppedAreaPercentage, croppedAreaPixels) => {
//     setCroppedArea(croppedAreaPixels);
// 	getPrevue(croppedAreaPixels)

//   };

//   const getPrevue= async(croppedAreaPixels)=>{
// 	const result = await getCroppedImgPrevue(image, croppedAreaPixels)
// 	setPrevue(result)
//   };
//   const onSelectFile = (event) => {
//     if (event.target.files && event.target.files.length > 0) {
//       const reader = new FileReader();
//       reader.readAsDataURL(event.target.files[0]);
//       reader.addEventListener("load", () => {
//         setImage(reader.result);
//         event.target.value = "";
//       });
//     }
//   };
//   const onCancel = () => {
//     setImage(null);
//     setPrevue(null)
//   };
//   const onCrop = async () => {
//     try {
//       // const result = await generateDownload(image, croppedAreaPixels)
//       const croppedImageUrl = await getCroppedImg(image, croppedArea);
//       const canvasDataUrl = croppedImageUrl.toDataURL("image/jpeg");
//       const convertedUrlToFile = dataURLtoFile(
//         canvasDataUrl,
//         "cropped-image.jpeg"
//       );
//       console.log(convertedUrlToFile);


//       //setCroppedImageFor(convertedUrlToFile, croppedImageUrl, result);
//     } catch (error) {
//       console.log(error);
//     }
//   };


//   return (
//     <CropBox>
// 		<CropImgPrevue>
// 		{image && (
//         <div>
//           <CropContainer>
//             <Cropper
//               image={image}
//               crop={crop}
//               zoom={zoom}
//               aspect={1}
//               onCropChange={setCrop}
//               onZoomChange={setZoom}
//               onCropComplete={onCropComplete}
//             />
//           </CropContainer>
//           <CropControls>

//               <input
//                 type="range"
//                 min={1}
//                 max={3}
//                 step={0.1}
//                 value={zoom}
//                 onInput={(e) => setZoom(e.target.value)}
//               />

//             <ControlsButtonBox>
//               <button onClick={onCancel}>cancel</button>
//               <button onClick={onCrop}>crop</button>
//             </ControlsButtonBox>
//           </CropControls>
//         </div>
//       )}
//    {prevue && <img width={200} height={200} src={prevue} alt="prevue"></img>}
// 		</CropImgPrevue>

//       <div>
//         <input
//           type="file"
//           accept="image/*"
//           ref={inputRef}
//           onChange={onSelectFile}
//           style={{ display: "none" }}
//         />
//        {!image &&  <button onClick={triggerFileSelectPopup}>
//           Choose
//         </button>}
//       </div>
//     </CropBox>
//   );
// };
