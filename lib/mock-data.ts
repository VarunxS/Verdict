// Mock data matching the new agent output format
// Investment agent output (first object in data array) — identified by quality_of_earnings
export const INVESTMENT_DATA = {
    data_quality: {
        status: "CLEAN",
        flags: [] as string[],
        impact_on_analysis: "The financial and audit data for FY21-FY25 is complete and internally consistent, allowing for high-conviction analysis of structural trends."
    },
    quality_of_earnings: {
        accruals_pattern: {
            flag: "PERSISTENT_ACCRUALS_CONCERN",
            analysis: "The OCF to Net Income ratio has remained below 0.5 for three of the last four fiscal years, plummeting to a negative -0.16 signal in FY25. This persistent gap indicates that reported profits are not converting to cash, driven by aggressive inventory positioning that has decoupled earnings from operational liquidity."
        },
        margin_story: {
            analysis: "Gross margin peaked at 25.1% in FY23 and has compressed by 370bps to 21.4% in FY25. This compression is occurring entirely at the gross line while S&G expenses remain controlled, confirming that the issue is rising input costs (gold) or pricing pressure rather than overhead inefficiency."
        },
        revenue_quality: {
            analysis: "Inventory turnover has deteriorated from 2.07x in FY24 to 1.68x in FY25, while inventory levels reached 376B in the most recent quarter. The combination of slowing turnover and ballooning inventory suggest that revenue growth is increasingly tied to stocking rather than end-consumer velocity."
        },
        section_finding: "Earnings quality is deteriorating as profit growth is increasingly fueled by non-cash accruals and inventory valuation rather than operational cash flow."
    },
    capital_structure: {
        leverage_story: {
            analysis: "Total debt has surged from 102B in FY24 to 285B in FY25, primarily to fund working capital. Interest coverage has consequently declined from 13.7x to 9.8x, signaling that while coverage remains safe, the pace of debt accumulation is significantly outstripping EBITDA growth."
        },
        debt_capacity: {
            current_ebitda: "4,137 cr (FY25 approx)",
            max_debt_3x: "12,411 cr",
            max_debt_4x: "16,548 cr",
            current_net_debt: "27,700 cr (Q2 FY26)",
            headroom_3x: "-15,289 cr",
            headroom_4x: "-11,152 cr",
            analysis: "The balance sheet is currently full, with net debt exceeding a conservative 3x EBITDA ceiling by over 150B. This level of leverage, typically reserved for capital-intensive industrials, severely restricts the company's ability to fund inorganic growth or further store expansions without equity dilution."
        },
        fcf_after_debt_service: {
            analysis: "Free cash flow has been negative in FY25 and FY22, failing to cover dividends in those periods. Dividend payments are effectively being funded by the accumulation of short-term debt, a pattern that is unsustainable if OCF does not normalize."
        },
        section_finding: "Titan's capital structure is overextended to fund inventory, leaving the company with zero debt headroom for strategic maneuvers."
    },
    returns_analysis: {
        dupont_story: {
            primary_driver: "LEVERAGE",
            analysis: "ROE remains high at ~28%, but this is increasingly driven by a financial leverage ratio that rose from 2.2x in FY21 to 3.5x in FY25. Stripping away the increased debt load, the return profile would show significant deterioration due to the 370bps gross margin compression."
        },
        roic_analysis: {
            analysis: "While ROIC remains above the 12% hurdle, the spread is contracting as capital employed (inventory and debt) grows faster than NOPAT. This indicates that incremental capital invested in new stores and inventory is yielding diminishing returns."
        },
        efficiency_story: {
            analysis: "The company is sweating its assets significantly worse over time, with asset turnover falling from 1.61x in FY24 to 1.48x in FY25. This decline, coupled with rising debt, is the most critical warning sign in the dataset, suggesting that the scale is now working against the business model."
        },
        section_finding: "Management is maintaining headline ROE through aggressive leverage, masking a fundamental decline in asset efficiency and core profitability."
    },
    variant_perception: {
        narratives: [
            {
                consensus_narrative: "Robust consumer demand is driving the 42% revenue growth.",
                what_data_shows: "Revenue growth is purely price-led; gold jewelry volumes in India fell 24% in 2025.",
                the_number_that_matters: "-24.0% (Volume growth)",
                verdict: "CONTRADICTED",
                implication: "Growth will evaporate if gold prices stabilize or retreat, as the underlying customer base is shrinking."
            },
            {
                consensus_narrative: "Titan is the undisputed leader in the organized jewelry shift.",
                what_data_shows: "Kalyan Jewellers is growing PAT at 90.3% vs Titan's 61%, indicating a loss of relative momentum.",
                the_number_that_matters: "2,930bps (PAT growth gap vs Kalyan)",
                verdict: "PARTIALLY TRUE",
                implication: "Competitive intensity from peers like Kalyan is eroding Titan's pricing power and margin profile."
            },
            {
                consensus_narrative: "High gold prices are a structural tailwind for the business.",
                what_data_shows: "Management explicitly stated that soaring prices are curbing customer growth and forcing a shift to lower-carat products.",
                the_number_that_matters: "21.4% (Gross Margin, 2-year low)",
                verdict: "CONTRADICTED",
                implication: "The business is facing an affordability crisis that exchange programs can only partially mitigate."
            }
        ],
        sharpest_contradiction: "The 42% YoY revenue growth is a price-driven illusion that masks a 24% collapse in actual gold volumes.",
        section_finding: "The market is overvaluing inflationary growth while ignoring a severe volumetric contraction and relative underperformance against peers."
    },
    peer_benchmarking: {
        analysis: "Titan is being structurally outcompeted on growth and efficiency by Kalyan Jewellers. While Titan's profit rose 61%, Kalyan's jumped 90.3% with superior EBITDA margin expansion (up to 7.3%) and a higher share of new customers (39%).",
        titan_leads: [
            "Absolute market capitalization",
            "Total revenue scale"
        ],
        titan_trails: [
            "Net profit growth rate (61% vs Kalyan's 90%)",
            "Volume growth stability",
            "Inventory turnover efficiency"
        ],
        section_finding: "Titan is losing its growth leadership to more agile peers who are better at capturing new customer segments in a high-price environment."
    },
    stress_test: {
        scenarios: [
            {
                title: "Gold Price Correction / Duty Hike",
                trigger: "A sudden 15% drop in gold prices or a significant import duty hike by the government.",
                pnl_impact: "Massive inventory write-downs and gross margin collapse to sub-15% levels.",
                balance_sheet_impact: "Current 277B net debt becomes unserviceable as EBITDA shrinks while debt remains fixed.",
                breaks_at: "Gross Margin < 16%",
                historical_precedent: "YES",
                precedent_detail: "Management noted the impact of customs duty reductions in previous quarters as a headwind to margins.",
                early_warning_indicators: [
                    "Import duty policy announcements",
                    "Rising trade deficit data"
                ]
            }
        ],
        section_finding: "A sharp gold price correction is the most dangerous scenario, as Titan's massive debt-funded inventory has no buffer against valuation losses."
    },
    management_questions: {
        context: "Focus on the disconnect between high revenue and negative cash flows.",
        questions: [
            {
                question: "With gold volumes down 24% industry-wide, what is Titan's specific volume growth excluding price appreciation?",
                targets: "Revenue Quality",
                good_answer: "Any positive volume growth showing market share gains.",
                bad_answer: "Deflecting to 'total value growth' or 'festive demand' without volume metrics."
            },
            {
                question: "How do you justify a Net Debt/EBITDA position that has clearly exceeded historical norms to fund inventory?",
                targets: "Capital Structure",
                good_answer: "A clear plan to liquidate inventory and reduce short-term debt by 100B+.",
                bad_answer: "Claiming the debt level is a 'new normal' for the business model."
            },
            {
                question: "Why has OCF remained negative/low despite record net income for the last two reporting cycles?",
                targets: "Quality of Earnings",
                good_answer: "Detailed breakdown of specific inventory timing that will reverse in Q4.",
                bad_answer: "Vague comments on 'supporting the growth momentum'."
            },
            {
                question: "Kalyan is growing profit at 90% with higher new customer acquisition; what structural advantage do they have that Titan is currently missing?",
                targets: "Peer Benchmarking",
                good_answer: "Admission of competitive gap in Tier 2/3 and a specific counter-strategy.",
                bad_answer: "Dismissing peers as 'not comparable' due to Titan's scale."
            },
            {
                question: "At what gold price level do exchange programs fail to bridge the affordability gap for your core customer?",
                targets: "Stress Test",
                good_answer: "Quantified sensitivity analysis of customer footfalls vs gold price levels.",
                bad_answer: "General statements about the 'resilience of the Indian wedding market'."
            }
        ],
        reasoning: "Titan is exhibiting classic late-cycle behavior: masking volume declines with price hikes and masking margin pressure with leverage."
    },
    ic_briefing: {
        situation: "Titan is the dominant Indian lifestyle retailer, currently showing record revenue of 25,416 cr in Q3 FY26, but facing a critical pivot as gold prices reach record highs.",
        complication: "Beneath the headline 61% profit jump, the company is facing a volumetric collapse, persistent negative operating cash flow, and a balance sheet that is now fully levered at 277B net debt.",
        resolution: "Management must provide a credible path to volume-led growth and debt reduction; until then, the 'growth' is an inflationary mirage.",
        three_things_to_own: [
            "Titan is over-leveraged relative to its cash-generation ability.",
            "Volume growth is negative, making the current P/E multiple unsustainable.",
            "Peers (Kalyan) are significantly outperforming Titan on a growth-adjusted basis."
        ],
        biggest_risk: "A sharp correction in gold prices would trigger massive inventory write-downs on a balance sheet with zero headroom.",
        open_question: "Can the Titan brand maintain its premium positioning if consumers continue to down-trade to lower-carat jewelry?"
    }
}

// Consulting agent output (second object in data array) — identified by problem_definition
export const MANAGEMENT_DATA = {
    company: "Titan Company Ltd",
    ticker: "TITAN",
    sector: "Consumer Discretionary - Jewellery & Watches",
    period: "Q3 FY2025-26",
    generated_on: "February 16, 2026",
    data_quality: {
        status: "PARTIAL",
        impact_on_analysis: "Reporting discrepancies in jewelry growth figures (245% vs. 42% YoY) require caution in assessing exact segment-level market share. However, consolidated growth of 43% and net income growth of 61% are consistent across sources and provide a reliable basis for strategic diagnosis."
    },
    problem_definition: {
        central_problem: "Titan's current profit surge is primarily an inflationary windfall from record gold prices masking a 24% structural decline in demand volumes.",
        issue_tree: [
            {
                branch: "Revenue Quality",
                diagnostic_questions: [
                    "Is the revenue growth driven by customer acquisition or purely by ticket size inflation?",
                    "Can exchange programs sustain growth if gold prices stabilize or retreat?"
                ]
            },
            {
                branch: "Competitive Resilience",
                diagnostic_questions: [
                    "Is the shift to organized retail benefiting Titan's margins more than its competitors?",
                    "Does the lab-grown diamond (LGD) pivot provide a defensive moat against gold price sensitivity?"
                ]
            }
        ],
        section_finding: "The business is currently 'addicted' to gold price appreciation; without a shift to volume-led growth or higher value-add segments like LGD, margins are vulnerable to a price correction."
    },
    industry_structure: {
        competitive_rivalry: {
            rating: "UNFAVORABLE",
            analysis: "Intensity is increasing as organized peers like Kalyan Jewellers achieve 90% profit growth and 7.3% EBITDA margins. Competition is shifting from brand presence to procurement efficiency and franchisee-led (FOCO) scaling."
        },
        buyer_power: {
            rating: "NEUTRAL",
            analysis: "While Titan commands a brand premium, buyers are demonstrating high price elasticity with a 24% drop in gold volumes. Customers are switching to lower-carat alternatives or gold exchange programs to manage fixed budgets."
        },
        supplier_power: {
            rating: "UNFAVORABLE",
            analysis: "Titan is a price-taker in the global bullion market, and potential government import duty hikes create a non-controllable cost floor. The reliance on physical gold imports remains a structural macro risk."
        },
        threat_of_entrants: {
            rating: "FAVORABLE",
            analysis: "High capital requirements and the necessity of consumer trust create significant barriers. Mandatory hallmarking and GST compliance continue to decimate the unorganized sector, favoring incumbents."
        },
        threat_of_substitutes: {
            rating: "NEUTRAL",
            analysis: "Gold is increasingly viewed as an investment asset (ETF inflows up 283%) rather than just jewelry. This shifts demand from high-margin finished goods to low-margin bullion/bars."
        },
        overall_attractiveness: "MIXED",
        section_finding: "The industry is benefiting from forced formalization, but profitability is becoming a function of macro-economic volatility rather than operational excellence."
    },
    competitive_position: {
        generic_strategy: "DIFFERENTIATION",
        strategy_execution: "Titan is successfully leveraging its 'Tata' trust to capture the organized shift, but is being outpaced by peers in bottom-line expansion (Kalyan profit +90% vs Titan +61%).",
        advantage_durability: "Narrowing; Titan's premium position is challenged by 'value-based luxury' competitors who are scaling faster in Tier II/III cities.",
        market_share_trajectory: "Stable to slightly declining in volume, though gaining in value share due to higher ASPs.",
        primary_competitive_threat: "Kalyan Jewellers, due to their superior operating leverage (75% EBITDA growth) and faster store-level metric improvement.",
        section_finding: "Titan is 'stuck' in a high-overhead premium model while more agile competitors are capturing the bulk of the 'newly-organized' consumer base."
    },
    value_chain: {
        primary_activities: [
            {
                activity: "Marketing & Sales",
                position: "ADVANTAGE",
                analysis: "Exchange programs and festive bundled offers are successfully keeping customers engaged despite record prices."
            },
            {
                activity: "Inbound Logistics",
                position: "WEAKNESS",
                analysis: "High exposure to bullion price volatility and import duties creates a margin leak during price corrections."
            },
            {
                activity: "Operations",
                position: "COMMODITY",
                analysis: "Manufacturing is increasingly standardized; differentiation is moving to retail experience rather than production."
            }
        ],
        margin_leak: "Margin is leaking through 'Other Operating Expenses' (+20% YoY) and the high cost of maintaining a premium retail footprint in a low-volume environment.",
        highest_leverage_activity: "Procurement & Gold Hedging; effectively managing the cost of carry and inventory turns is now more critical than design.",
        section_finding: "The value chain is optimized for high-volume growth, making it structurally inefficient for the current 'high-price, low-volume' market reality."
    },
    full_potential_gap: {
        gap_type: "EXECUTIONAL",
        performance_drags: [
            {
                type: "COST",
                magnitude: "HIGH",
                analysis: "Total expenses rose 40% YoY; the business has not yet adjusted its overhead to the lower volume throughput."
            },
            {
                type: "PRICING",
                magnitude: "MEDIUM",
                analysis: "Over-reliance on gold-linked pricing reduces 'design-premium' capture; margin is too closely tied to metal weight."
            },
            {
                type: "PORTFOLIO",
                magnitude: "LOW",
                analysis: "Non-jewelry segments (Watches +14%, Eyecare +18%) are growing but remain too small to offset jewelry volatility."
            }
        ],
        section_finding: "Titan is operating below potential because it has failed to decouple its margin from gold prices, unlike global luxury peers who price on brand and design."
    },
    growth_architecture: {
        horizon_1: {
            status: "STABLE",
            core_threat: "Volume stagnation due to gold prices exceeding consumer 'psychological' limits.",
            investment_adequacy: "OVERINVESTED"
        },
        horizon_2: {
            initiatives: [
                "beYon Lab-Grown Diamonds",
                "International expansion",
                "Helios Luxe"
            ],
            funding_status: "ADEQUATE",
            path_to_h1: "LGD must transition from a niche offering to a primary margin driver to reduce bullion risk."
        },
        horizon_3: {
            options_visible: "PARTIAL",
            analysis: "Evidence of disruption in wearables and digital jewelry platforms exists but lacks the scale to move the needle for a 4-trillion-cap company."
        },
        portfolio_balance: "H1-HEAVY",
        section_finding: "Titan is defending its core with massive capex while its future growth engines (LGD, International) remain under-scaled."
    },
    strategic_options: [
        {
            option: "Pivot to Design-First Pricing",
            requires: "Aggressive shift to LGD and high-carat non-gold materials; re-training sales staff to sell 'art' not 'asset'.",
            sacrifices: "Short-term revenue volume from the 'investment-heavy' buyer segment.",
            wins_when: "Gold prices remain above ₹80,000/10g, making traditional jewelry unaffordable for the middle class.",
            risk_if_wrong: "Loss of the 'safe haven' buyer who underpins the current revenue base."
        },
        {
            option: "Operational Efficiency Sprint",
            requires: "Adoption of FOCO (Franchisee Owned, Company Operated) model to match Kalyan's margin expansion; 15% reduction in non-sales overhead.",
            sacrifices: "Direct control over the retail experience and some brand exclusivity.",
            wins_when: "The market remains in a price-driven consolidation phase where efficiency is the primary differentiator.",
            risk_if_wrong: "Brand dilution and loss of premium status."
        }
    ],
    organizational_readiness: {
        strategy_clarity: "MEDIUM",
        structure_alignment: "PARTIAL",
        systems_alignment: "MISALIGNED",
        critical_misalignment: "Incentive systems are likely tied to revenue/GMV (inflated by gold price) rather than volume or design-margin, discouraging the pivot to LGD.",
        section_finding: "The organization is built for a 'rising tide' gold market and lacks the lean cost-structure required for a high-efficiency competition."
    },
    board_recommendation: {
        situation: "Titan is delivering record financial results (+61% profit) driven by festive demand and a 43% revenue surge, primarily fueled by record-high gold prices.",
        complication: "This growth is 'hollow' as physical volumes have dropped by 24%, and more efficient competitors are expanding margins faster by capturing the organized-market shift.",
        resolution: "Titan must decide if it is a 'bullion retailer' or a 'luxury brand' and immediately move to decouple its profitability from gold price fluctuations.",
        priority_actions: [
            {
                action: "Accelerate beYon (LGD) Store-in-Store Rollout",
                addresses: "Volume decline and bullion price sensitivity",
                owner: "Jewellery Division CEO",
                milestone_90_days: "Launch LGD collections in 50% of Tanishq Tier-I stores",
                milestone_12_months: "LGD to contribute 10% of total jewelry EBIT"
            },
            {
                action: "Fixed-Cost Rationalization Program",
                addresses: "40% increase in total expenses",
                owner: "CFO",
                milestone_90_days: "Identify ₹200cr in non-core operational redundancies",
                milestone_12_months: "Improve operating margin by 150bps through efficiency alone"
            },
            {
                action: "Tier II/III Expansion via FOCO Model",
                addresses: "Competitive threat from Kalyan/Senco",
                owner: "Retail Operations",
                milestone_90_days: "Identify 20 new locations for asset-light expansion",
                milestone_12_months: "Open 50 new FOCO stores to regain volume share"
            }
        ],
        the_board_question: "If gold prices drop 20% tomorrow, does Titan have a business model that can sustain its ₹4 trillion valuation through volume and design-margin alone?"
    }
}
