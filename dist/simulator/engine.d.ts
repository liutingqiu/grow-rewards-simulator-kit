import { WelcomeRewardAsset, RewardAssetConfig, UserRewardProjection } from '../types.js';
export declare const REWARD_ASSET_CATALOG: Record<WelcomeRewardAsset, RewardAssetConfig>;
export declare class GrowRewardsEngine {
    static simulateRewards(chosenAsset: WelcomeRewardAsset, qualifyingInvestmentUSD: number, referralInvitesCount?: number, referralBonusPerUserUSD?: number): UserRewardProjection;
}
