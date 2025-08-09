import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

const TradingChart = () => {
  const chartContainerRef = useRef(null);
  const chartInstanceRef = useRef(null); // Prevent multiple charts

  useEffect(() => {
    if (chartInstanceRef.current) return; // Prevent duplicate

    const chart = createChart(chartContainerRef.current, {
      width: 500,
      height: 650,
      layout: {
        background: { color: "transparent" },
        textColor: "#000",
      },
      grid: {
        vertLines: { color: "transparent" },
        horzLines: { color: "transparent" },
      },
      priceScale: {
        borderVisible: true,
      },
      timeScale: {
        borderVisible: false,
        timeVisible: true,
        secondsVisible: false,
      },
    });

    const candleSeries = chart.addCandlestickSeries(); // ✅ Make sure lightweight-charts is v4+
    candleSeries.setData([
      { time: '2024-07-01', open: 100, high: 110, low: 90, close: 105 },
      { time: '2024-07-02', open: 105, high: 120, low: 100, close: 115 },
      { time: '2024-07-03', open: 115, high: 125, low: 110, close: 120 },
    ]);

    chartInstanceRef.current = chart;

    // Cleanup on unmount
    return () => {
      if (chartInstanceRef.current) {
        chart.remove();
        chartInstanceRef.current = null;
      }
    };
  }, []);

  return <div ref={chartContainerRef} />;
};

export default TradingChart;
