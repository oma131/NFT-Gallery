import { DocumentDuplicateIcon } from "@heroicons/react/solid";

const truncate = (str) => {
  if (str.length > 10) {
    return `${str.substring(0, 4)}...${str.substring(str.length - 4)}`;
  } else {
    return str;
  }
};

export default function NFTCard({ nft }) {
  const splitGateway = nft.media[0].gateway.split(".");
  const fileType = splitGateway.slice(-1)[0];

  const copyAddressToClipboard = () => {
    navigator.clipboard.writeText(nft.contract.address);
    alert("Copied");
  };

  return (
    <div className="flex flex-col bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 rounded-xl overflow-hidden">
      <div>
        {fileType === "mp4" ? (
          <video loop autoPlay muted className="object-cover h-128 w-full">
            <source src={nft.media[0].gateway} type="video/mp4" />
          </video>
        ) : (
          <img className="object-cover h-128 w-full" src={nft.media[0].gateway}></img>
        )}
      </div>

      <div className="flex flex-col y-gap-2 px-2 py-3 rounded-b-md">
        <div className="mb-2">
          <h2 className="text-xl text-white font-bold mb-3">{nft.title}</h2>
          <p className="text-white">Id: {truncate(nft.id.tokenId)}</p>
          <p className="text-white flex items-center">
            {`${truncate(nft.contract.address)}`}{" "}
            <DocumentDuplicateIcon
              className="h-4 pl-1 cursor-pointer"
              onClick={copyAddressToClipboard}
            />
          </p>
        </div>

        <div className="my-3 flex justify-center items-center w-full">
          <a
            className="inline-block p-[2px] rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
            hover:text-white active:text-opacity-75 focus:outline-none focus:ring"
            target="_blank"
            rel="noreferrer"
            href={`https://etherscan.io/token/${nft.contract.address}`}
          >
            <span className="block px-8 py-3 text-sm font-medium bg-white rounded-full hover:bg-transparent">
              View on Etherscan
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
