/**
 *  About INFURA
 *
 *  @_subsection: api/providers/thirdparty:INFURA  [infura]
 */
import { FetchRequest } from "../utils/index.js";
import { Network } from "./network.js";
import { JsonRpcProvider } from "./provider-jsonrpc.js";
import { WebSocketProvider } from "./provider-websocket.js";
import type { AbstractProvider } from "./abstract-provider.js";
import type { CommunityResourcable } from "./community.js";
import type { Networkish } from "./network.js";
/**
 *  INFURA...
 */
export declare class InfuraWebSocketProvider extends WebSocketProvider implements CommunityResourcable {
    readonly projectId: string;
    readonly projectSecret: null | string;
    constructor(network?: Networkish, projectId?: string);
    isCommunityResource(): boolean;
}
/**
 *  Aboud Cloudflare...
 */
export declare class InfuraProvider extends JsonRpcProvider implements CommunityResourcable {
    readonly projectId: string;
    readonly projectSecret: null | string;
    constructor(_network?: Networkish, projectId?: null | string, projectSecret?: null | string);
    _getProvider(chainId: number): AbstractProvider;
    isCommunityResource(): boolean;
    static getWebSocketProvider(network?: Networkish, projectId?: string): InfuraWebSocketProvider;
    static getRequest(network: Network, projectId?: null | string, projectSecret?: null | string): FetchRequest;
}
//# sourceMappingURL=provider-infura.d.ts.map