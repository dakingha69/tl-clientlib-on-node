import { Amount, RawTxObject, Signature } from '../typings';
/**
 * Interface for different signer strategies.
 */
export interface TLSigner {
    getAddress(): Promise<string>;
    getBalance(): Promise<Amount>;
    signMsgHash(msgHash: string): Promise<Signature>;
    signMessage(message: string | ArrayLike<number>): Promise<Signature>;
    confirm(rawTx: RawTxObject): Promise<string>;
}
