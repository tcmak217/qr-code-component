import React from "react"
import QrCodeImage from "../images/image-qr-code.png"

function QrCode() {
  return (
    <div className="bg-light-gray h-screen w-full">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-5/6 max-w-[312.5px] h-[500px] bg-white rounded-3xl">
          <div className="h-full flex flex-col">
            <div className="w-full flex justify-center mt-4">
              <div className="w-[90%] max-w-[280px]">
                <img className="rounded-xl" src={QrCodeImage} alt="qr code" />
              </div>
            </div>
            <div className="font-black text-dark-blue text-xl px-10 pt-6 text-center grow">
              Improve your front-end skills by building projects
            </div>
            <div className="text-grayish-blue text-sm px-10 pt-4 text-center grow">
              Scan the QR code to visit Frontend Mentor and take your coding skills to the next
              level
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QrCode
