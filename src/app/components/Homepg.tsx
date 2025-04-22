import React from 'react'
import Image from 'next/image'

export default function Homepg() {
  return (
    <div
      className="max-h-screen grid grid-cols-2 bg-no-repeat bg-cover font-inter "
      style={{
        backgroundImage: `url(https://s3-alpha-sig.figma.com/img/3afa/9208/5721cf0b5c25480ceffa1ced4013daab?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XAIRCAnWDduP~0d4Wb1Ja10B1Zt~aNTwI3mFsv1BSGpu4UonEafR9AAILkOFwZqNebsS2dzU4q0zJUPGHvriMR253wXppgdr3W8u8Xe9BG-vwKwIGqckg-xFu8sDm4iJ3a-qbIIx~Fqls~sGqJcntzaZNHVcpz5c7ddlN52FrruFiX1Ag2OUkDZ6SCOA~agYLjiyS3oxsjhe0XD3PArt5~OSlZqwawHd3USsZGjpdNmGs0IdokhD7SXep7DLVeX~jovypdjhQHXAH6yfTBGHHGP4O426mEKsoaHchbeeQwSKmE1dPim93idklIKu8I-TRAtHHhuTwvm2fFM1okGmKQ__)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '721.612px',
        transform: 'rotate(0.098deg)',
        flexShrink: 0,
      }}
    >
      <div className="w-[890.843px] h-[428.612px] rotate-[0.098deg] flex-shrink-0 mt-10">
        <div className="ml-18 max-w-3xl inline-grid mx-6 mt-19">
            <h5 className="text-black text-[76.21px] font-inter font-semibold leading-tight">Supercharge Your</h5>
            <span className="text-black text-[76.21px] font-inter font-semibold leading-tight">
            Email{" "}
            <span className="text-blue-500 text-text-[76.21px] font-inter font-semibold">Deliverability</span>
            </span>
          <div className="my-4 font-inter text-gray-600 text-xl">
            <p> Boost your cold outreach with Autowarm –<br/> personalized emails, high deliverability, and smart<br/> analytics.</p>
          </div>
          <div className="flex space-x-4 my-8">
            <button className="bg-blue-500 text-white py-1 px-8 w-[170px] h-[64px] rounded-2xl font-inter">
              Get Started
            </button>
            <button className="flex items-center space-x-2 text-blue-500 bg-white py-1 px-7 w-auto rounded-2xl border font-inter">
                <span className="flex items-center justify-center  w-6 h-6 rounded-full bg-blue-500 text-white text-[10px]">
                ▶
                </span>
              <span>Watch Demo</span>
            </button>
          </div>
          <div className="flex items-center space-x-4 py-3">
            <div className="flex items-center space-x-2">
            <span className="flex items-center justify-center  w-4 h-4 rounded-full bg-blue-500 text-white text-[10px]">
                ✔
                </span>
              
              <span>On-Demand Support</span>
            </div>
            <div className="flex items-center space-x-2">
            <span className="flex items-center justify-center  w-4 h-4 rounded-full bg-blue-500 text-white text-[10px]">
                ✔
                </span>
              <span>Seamless Email Technology</span>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-38 mr-10 mt-22 pt-7">
        <Image
          src="/images/ladyimg.png"
          alt="Lady Image"
          width={550}
          height={620}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
