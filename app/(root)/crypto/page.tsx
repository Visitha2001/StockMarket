import TradingViewWidget from "@/components/TradingViewWidget";
import { 
  CRYPTO_MARKET_OVERVIEW_WIDGET_CONFIG, 
  CRYPTO_HEATMAP_WIDGET_CONFIG, 
  CRYPTO_TOP_STORIES_WIDGET_CONFIG, 
  CRYPTO_MARKET_DATA_WIDGET_CONFIG,
  CRYPTO_CANDLE_CHART_WIDGET_CONFIG
} from "@/lib/constants";

export default function Crypto() {
  const scriptUrl = "https://s3.tradingview.com/external-embedding/embed-widget-";
  return (
    <div className="flex min-h-screen home-wrapper my-8">
      <section className="grid gap-8 home-section">
        <div className="md:col-span-1 xl:col-span-3">
          <TradingViewWidget
            title="Crypto Market Overview"
            scriptUrl={`${scriptUrl}advanced-chart.js`}
            config={CRYPTO_CANDLE_CHART_WIDGET_CONFIG("BINANCE:BTCUSDT")}
            className="custom-chart"
            height={800}
          />
        </div>
      </section>
      <section className="grid gap-8 home-section">
        <div className="md:col-span-1 xl:col-span-1">
          <TradingViewWidget
            title="Crypto Market Overview"
            scriptUrl={`${scriptUrl}market-overview.js`}
            config={CRYPTO_MARKET_OVERVIEW_WIDGET_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>
        <div className="md:col-span-1 xl:col-span-2">
          <TradingViewWidget
            title="Crypto Heatmap"
            scriptUrl={`${scriptUrl}crypto-coins-heatmap.js`}
            config={CRYPTO_HEATMAP_WIDGET_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>
      </section>
      <section className="grid gap-8 home-section">
        <div className="h-full md:col-span-1 xl:col-span-1">
          <TradingViewWidget
            title="Crypto Top Stories"
            scriptUrl={`${scriptUrl}timeline.js`}
            config={CRYPTO_TOP_STORIES_WIDGET_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>
        <div className="h-full md:col-span-1 xl:col-span-2">
          <TradingViewWidget
            title="Crypto Market Quotes"
            scriptUrl={`${scriptUrl}market-quotes.js`}
            config={CRYPTO_MARKET_DATA_WIDGET_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>
      </section>
    </div>
  );
}
