import BN from 'bn.js'

export default class Torus {
    constructor();
    retrieveShares(endpoints: String[], indexes: Number[], verifier: 'google' | 'facebook' | 'twitch' | 'reddit' | 'discord', verifierParams: VerifierParams, idToken: String): Promise<ShareResponse>;
    lagrangeInterpolation(shares: BN[], nodeIndex: BN[]): BN
    generateAddressFromPrivKey(privateKey: BN): String;
    getPubKeyAsync(endpoints: String[], verifierArgs: VerifierArgs): String;
}

interface ShareResponse {
    ethAddress: String;
    privKey: String;
}

interface VerifierArgs {
    verifier: 'google' | 'facebook' | 'twitch' | 'reddit' | 'discord';
    verifierId: String;
}

interface VerifierParams {
    verifier_id: String;
}