import { EC } from "elliptic";
import SHA256 from "crypto-js/sha256";
import uuidV1 from "uuid/v1";

const ec = new EC("secp256k1");

export default class ChainUtil {
	static genKeyPair() {
		return ec.genKeyPair();
	}

	static id() {
		return uuidV1();
	}

	static hash(data) {
		return SHA256(JSON.stringify(data)).toString();
	}

	static verifySignature(publicKey, signature, dataHash) {
		return ec.keyFromPublic(publicKey, "hex").verify(dataHash, signature);
	}
}
