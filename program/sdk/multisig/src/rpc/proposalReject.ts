import {
  Connection,
  PublicKey,
  SendOptions,
  Signer,
  TransactionSignature,
} from "@solana/web3.js";
import * as transactions from "../transactions";
import { translateAndThrowAnchorError } from "../errors";

export async function proposalReject({
  connection,
  feePayer,
  member,
  multisigPda,
  transactionIndex,
  memo,
  sendOptions,
  programId,
}: {
  connection: Connection;
  feePayer: Signer;
  member: Signer;
  multisigPda: PublicKey;
  transactionIndex: bigint;
  memo?: string;
  sendOptions?: SendOptions;
  programId?: PublicKey;
}): Promise<TransactionSignature> {
  const blockhash = (await connection.getLatestBlockhash()).blockhash;

  const tx = transactions.proposalReject({
    blockhash,
    feePayer: feePayer.publicKey,
    multisigPda,
    transactionIndex,
    member: member.publicKey,
    memo,
    programId,
  });

  tx.sign([feePayer, member]);

  try {
    return await connection.sendTransaction(tx, sendOptions);
  } catch (err) {
    translateAndThrowAnchorError(err);
  }
}
