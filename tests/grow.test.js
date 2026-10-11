// SPDX-License-Identifier: MIT
import test from 'node:test';
import assert from 'node:assert/strict';
import { GrowRewardsEngine, REWARD_ASSET_CATALOG } from '../dist/index.js';

test('1. REWARD_ASSET_CATALOG supports all 6 official Grow welcome assets', () => {
  const assets = Object.keys(REWARD_ASSET_CATALOG);
  assert.equal(assets.length, 6);
  assert.deepEqual(assets, ['AAPL', 'NVDA', 'TSLA', 'BTC', 'SOL', 'GOLD']);

  assets.forEach(sym => {
    const cfg = REWARD_ASSET_CATALOG[sym];
    assert.ok(cfg.baselineBonusUSD > 0);
    assert.ok(cfg.expectedAnnualYieldPct > 0);
  });
});

test('2. GrowRewardsEngine correctly projects 7-day trade unlock, referral earnings, and APY', () => {
  const projection = GrowRewardsEngine.simulateRewards('SOL', 100, 3, 20);

  assert.equal(projection.chosenAsset, 'SOL');
  assert.equal(projection.qualifyingInvestmentUSD, 100);
  assert.equal(projection.welcomeBonusUSD, 25);
  assert.equal(projection.lockupDays, 7);
  assert.equal(projection.referralInvitesCount, 3);
  assert.equal(projection.totalReferralBonusUSD, 60);
  assert.equal(projection.totalPortfolioValueUSD, 185); // 100 + 25 + 60
  assert.ok(projection.netAPY > 100);
});

test('3. Zero or negative investment properly rejected', () => {
  assert.throws(() => {
    GrowRewardsEngine.simulateRewards('NVDA', 0);
  }, /Qualifying investment must be greater than zero/);
});
