# Grow Rewards: Welcome Bonus & Referral APY Simulator 🌱📈

> **Submitted to Superteam Earn • Grow Rewards: Make Your First Move ($500 USDG Bounty)**  
> **Target Platform:** Grow Global Investing Platform (Equities, ETFs, Crypto, Pre-IPO, Commodities)  
> **Interactive Live Calculator:** [https://liutingqiu.github.io/grow-rewards-simulator-kit/](https://liutingqiu.github.io/grow-rewards-simulator-kit/)  
> **GitHub Repository:** [https://github.com/liutingqiu/grow-rewards-simulator-kit](https://github.com/liutingqiu/grow-rewards-simulator-kit)  
> **Author & Lead Engineer:** Tingqiu Liu (`@liutingqiu`, `tianqi689@gmail.com`)

---

## 💡 Executive Summary & The Problem

Traditional fintech onboarding experiences suffer from confusing reward terms, hidden minimum balances, and opaque vesting schedules. Users frequently abandon apps before completing their first trade because they cannot calculate the exact tangible return on their initial investment.

**Grow** introduces a user-centric reward architecture:
1. **Welcome Rewards:** Pick from 6 high-demand assets (`NVDA`, `SOL`, `BTC`, `TSLA`, `AAPL`, `GOLD`) upon account creation.
2. **7-Day Maturation:** Assets become fully tradable exactly 7 days after the first qualifying investment.
3. **Multi-Tier Invite Rewards:** Transparent asset bonuses awarded when referred friends complete their initial trade.

The **Grow Rewards Simulator Kit** provides an open-source mathematical modeling engine and live browser tool for users and creators to visualize their exact portfolio returns and APY.

---

## 🧮 Mathematical Modeling Engine

Let:
- $I_{init}$: Qualifying First Investment ($ USD)
- $B_{welcome}$: Baseline Welcome Bonus ($ USD) for chosen asset $A \in \{\text{AAPL}, \text{NVDA}, \text{TSLA}, \text{BTC}, \text{SOL}, \text{GOLD}\}$
- $N_{invites}$: Number of successful referral invites
- $B_{invite}$: Bonus per invite ($ USD)
- $T_{unlock}$: Maturation period = 7 days ($0.01918$ years)

Total initial portfolio value $V_{total}$ is computed as:
$$V_{total} = I_{init} + B_{welcome} + (N_{invites} \times B_{invite})$$

The instant 7-day rate of return $R_{7d}$ and annualized percentage yield $\text{APY}$ are:
$$R_{7d} = \frac{B_{welcome} + (N_{invites} \times B_{invite})}{I_{init}}$$
$$\text{APY} = R_{7d} \times \left(\frac{365}{7}\right) \times 100\%$$

For a standard $100 investment with a $25 Solana welcome bonus and 3 friends invited:
- $V_{total} = \$100 + \$25 + \$60 = \$185$
- $\text{APY} = \frac{85}{100} \times 52.14 = 4,432\%$ annualized liquidity bonus.

---

## 🧪 Automated Test Verification

```bash
node --test tests/grow.test.js
```

```text
✔ 1. REWARD_ASSET_CATALOG supports all 6 official Grow welcome assets (1.5ms)
✔ 2. GrowRewardsEngine correctly projects 7-day trade unlock, referral earnings, and APY (0.2ms)
✔ 3. Zero or negative investment properly rejected (0.4ms)

ℹ pass 3
ℹ fail 0
```

---

## 🔗 Live Interactive Links

- **Interactive Calculator:** [https://liutingqiu.github.io/grow-rewards-simulator-kit/](https://liutingqiu.github.io/grow-rewards-simulator-kit/)
- **GitHub Repository:** [https://github.com/liutingqiu/grow-rewards-simulator-kit](https://github.com/liutingqiu/grow-rewards-simulator-kit)
