import React from 'react';
import imgOne from "../assets/image-11.jpeg";
import imgTwo from "../assets/image-3.webp";
import imgThree from "../assets/image-2.webp";
import imgFour from "../assets/image-7.webp";
import imgFive from "../assets/image-5.webp";
import imgSix from "../assets/image-9.webp";
import imgSeven from "../assets/image-10.jpeg";
import imgEight from "../assets/image-4.webp";
import imgNine from "../assets/image-8.webp";
import imgTen from "../assets/image-1.webp";
import imgEleven from "../assets/image-3.webp";
import { useState } from 'react';
import './Gallery.css';
const Gallery = () => {
    const ImgaesData = [
        {
            image: imgOne,
        },
        {
            image: imgTwo,
        },
        {
            image: imgThree,
        },
        {
            image: imgFour,
        },
        {
            image: imgFive,
        },
        {
            image: imgSix,
        },
        {
            image: imgSeven,
        },
        {
            image: imgEight,
        },
        {
            image: imgNine,
        },
        {
            image: imgTen,
        },
        {
            image: imgEleven,
        },
    ]
    const [count, setCount] = useState(0);
    const [imageClicked, setImageClicked] = useState([]);
    const handleClick = (images) => {
        setImageClicked([...imageClicked, images]);
        setCount(count + 1);
    };
    console.log(count);
    const [images, setImages] = useState([]);
    const handleFileUpload = (e) => {
        const files = e.target.files;
        for (let i = 0; i < files.length; i++) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImages([...images, reader.result]);
            };
            reader.readAsDataURL(files[i]);
        }
    };
    return (
        <div className="lg:w-3/4 mx-auto mt-12">
            {
                count ? <div className="flex flex-1 gap-4 items-center mb-4 ">
                    <input type="checkbox" className="checkbox checkbox-primary" checked />
                    <p className="text-black text-start text-semibold"> {count} File Selected </p>
                </div> : null
            }
            <hr />
            {/* <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4 mt-12"> */}
            <div className="gallery mt-12">
                {ImgaesData.map((images, index) => (
                    <div className="container">
                        <input type="checkbox" className="checkbox checkbox-primary container-checkboxx" onClick={() => handleClick(images)} />
                        <img
                            src={images.image}
                            alt="Placeholder"
                            layout="fill"
                            objectFit="cover"
                            className={`${index === 0 ? "h-96 w-full border " : "h-48 w-full border mt-4"}`}
                            key={index}
                        />
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4 mt-12">
                {images.map((image, index) => (
                    <img key={index} src={image} alt="" className={`${index === 0 ? "h-96 w-80 border mt-4" : "h-48 w-80 border mt-4"}`} />
                ))}
                {/* <input type="file" multiple onChange={handleFileUpload} /> */}
                <div>
                <label>
                    + Upload Images
                    <br />
                    <span>up to 10 images</span>
                    <input
                        type="file"
                        name="images"
                        //   onChange={onSelectFile}
                        multiple
                        onChange={handleFileUpload}
                        accept="image/png , image/jpeg, image/webp"
                    />
                </label>
                <br />


            </div>
            </div>
            {/* <div>
                <label>
                    + Add Images
                    <br />
                    <span>up to 10 images</span>
                    <input
                        type="file"
                        name="images"
                        //   onChange={onSelectFile}
                        multiple
                        accept="image/png , image/jpeg, image/webp"
                    />
                </label>
                <br />


            </div> */}
        </div>
    );
};

export default Gallery;