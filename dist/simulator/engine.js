export const REWARD_ASSET_CATALOG = {
    AAPL: {
        symbol: 'AAPL',
        assetName: 'Apple Inc.',
        category: 'EQUITY',
        baselineBonusUSD: 15.0,
        expectedAnnualYieldPct: 18.5
    },
    NVDA: {
        symbol: 'NVDA',
        assetName: 'NVIDIA Corporation',
        category: 'EQUITY',
        baselineBonusUSD: 25.0,
        expectedAnnualYieldPct: 32.0
    },
    TSLA: {
        symbol: 'TSLA',
        assetName: 'Tesla, Inc.',
        category: 'EQUITY',
        baselineBonusUSD: 20.0,
        expectedAnnualYieldPct: 24.0
    },
    BTC: {
        symbol: 'BTC',
        assetName: 'Bitcoin',
        category: 'CRYPTO',
        baselineBonusUSD: 20.0,
        expectedAnnualYieldPct: 45.0
    },
    SOL: {
        symbol: 'SOL',
        assetName: 'Solana',
        category: 'CRYPTO',
        baselineBonusUSD: 25.0,
        expectedAnnualYieldPct: 65.0
    },
    GOLD: {
        symbol: 'GOLD',
        assetName: 'Pax Gold / Physical Gold ETF',
        category: 'COMMODITY',
        baselineBonusUSD: 10.0,
        expectedAnnualYieldPct: 12.0
    }
};
export class GrowRewardsEngine {
    static simulateRewards(chosenAsset, qualifyingInvestmentUSD, referralInvitesCount = 0, referralBonusPerUserUSD = 20.0) {
        if (qualifyingInvestmentUSD <= 0) {
            throw new Error('Qualifying investment must be greater than zero');
        }
        const assetConfig = REWARD_ASSET_CATALOG[chosenAsset];
        const welcomeBonus = assetConfig.baselineBonusUSD;
        const totalReferral = referralInvitesCount * referralBonusPerUserUSD;
        const totalPortfolio = qualifyingInvestmentUSD + welcomeBonus + totalReferral;
        // Effective Instant Yield % over 7-day maturation period
        const instantBonusReturn = ((welcomeBonus + totalReferral) / qualifyingInvestmentUSD) * 100;
        // Annualized APY based on 7-day unlock period (52.14 weeks)
        const annualizedAPY = Number((instantBonusReturn * (365 / 7)).toFixed(2));
        return {
            chosenAsset,
            qualifyingInvestmentUSD,
            welcomeBonusUSD: welcomeBonus,
            lockupDays: 7,
            referralInvitesCount,
            referralBonusPerUserUSD,
            totalReferralBonusUSD: totalReferral,
            totalPortfolioValueUSD: totalPortfolio,
            netAPY: annualizedAPY
        };
    }
}
