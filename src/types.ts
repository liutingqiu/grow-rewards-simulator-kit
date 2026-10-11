// SPDX-License-Identifier: MIT

export type WelcomeRewardAsset = 'AAPL' | 'NVDA' | 'TSLA' | 'BTC' | 'SOL' | 'GOLD';

export interface RewardAssetConfig {
  symbol: WelcomeRewardAsset;
  assetName: string;
  category: 'EQUITY' | 'CRYPTO' | 'COMMODITY';
  baselineBonusUSD: number;
  expectedAnnualYieldPct: number;
}

export interface UserRewardProjection {
  chosenAsset: WelcomeRewardAsset;
  qualifyingInvestmentUSD: number;
  welcomeBonusUSD: number;
  lockupDays: number; // 7 days tradable lock
  referralInvitesCount: number;
  referralBonusPerUserUSD: number;
  totalReferralBonusUSD: number;
  totalPortfolioValueUSD: number;
  netAPY: number;
}
