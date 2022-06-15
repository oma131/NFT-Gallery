import Head from "next/head";

export default function Layout({ title, keywords, description, children, className = "" }) {
  return (
    <div className="font-poppins min-h-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <div
        className={`text-darkgrey overflow-x-hidden min-h-screen w-full mx-auto shadow-lg ${className}`}
      >
        {children}
      </div>
    </div>
  );
}

Layout.defaultProps = {
  title: "OMA NFT Gallery",
  description: "View View NFTs from Your Address or Collection",
  keywords: "blockchain, nft, roadtoweb3, web3",
};