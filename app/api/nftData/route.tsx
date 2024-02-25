import { NextResponse } from "next/server";

const getNftData = async () => {
    //get sol nft collections from Magic Eden
    const nfts = await fetch('https://api-mainnet.magiceden.dev/v2/marketplace/popular_collections');
    return nfts.json();
}

export async function GET(request: Request) {
    const data = await getNftData()
    return NextResponse.json({data})
}