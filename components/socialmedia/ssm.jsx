import {
    InstagramLogo,
    TwitterLogo,
    FacebookLogo,
    PinterestLogo,
    TiktokLogo,
    YoutubeLogo,
  } from "@phosphor-icons/react/dist/ssr";

export default function SocialMedia() {
  return (
    <div className="flex flex-col items-center pt-10">
      <h2 className="text-gray-50 font-inter font-semibold text-xl">
        Follow us
      </h2>
      <div className="flex space-x-10 max-sm:space-x-0 ">
        <div className="hover:bg-gray-700 cursor-pointer rounded-full p-2 max-sm:p-1">
          <InstagramLogo size={30} color="white" />
        </div>
        <div className="hover:bg-gray-700 cursor-pointer rounded-full p-2 max-sm:p-1">
          <TwitterLogo size={30} color="white" />
        </div>
        <div className="hover:bg-gray-700 cursor-pointer rounded-full p-2 max-sm:p-1">
          <FacebookLogo size={30} color="white" />
        </div>
        <div className="hover:bg-gray-700 cursor-pointer rounded-full p-2 max-sm:p-1">
          <PinterestLogo size={30} color="white" />
        </div>
        <div className="hover:bg-gray-700 cursor-pointer rounded-full p-2 max-sm:p-1">
          <TiktokLogo size={30} color="white" />
        </div>
        <div className="hover:bg-gray-700 cursor-pointer rounded-full p-2 max-sm:p-1">
          <YoutubeLogo size={30} color="white" />
        </div>
      </div>
    </div>
  );
}
