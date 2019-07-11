import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { buildChart, backgroundColor, borderColor } from "../utils";
import ChartStyles from "./styles/ChartStyles";
import { Section } from "../styles";

const Charts = ({ langData, repoData }) => {
  // Create chart with langData
  const [langChartData, setLangChartData] = useState(null);
  const initLangChart = () => {
    const ctx = document.getElementById("langChart");
    const labels = langData.map(lang => lang.label);
    const data = langData.map(lang => lang.value);

    setLangChartData(data);

    if (data.length > 0) {
      const backgroundColor = langData.map(
        ({ color }) =>
          `#${color.length > 4 ? color.slice(1) : color.slice(1).repeat(2)}B3`
      );
      const borderColor = langData.map(lang => `${lang.color}`);
      const chartType = "pie";
      const axes = false;
      const legend = true;
      const config = {
        ctx,
        chartType,
        labels,
        data,
        backgroundColor,
        borderColor,
        axes,
        legend
      };
      buildChart(config);
    }
  };

  // Create Most Starred chart
  const [starChartData, setStarChartData] = useState(null);
  const initStarChart = () => {
    const ctx = document.getElementById("starChart");
    const LIMIT = 5;
    const sortProperty = "stargazers_count";
    const mostStarredRepos = repoData
      .filter(repo => !repo.fork)
      .sort((a, b) => b[sortProperty] - a[sortProperty])
      .slice(0, LIMIT);
    const labels = mostStarredRepos.map(repo => repo.name);
    const data = mostStarredRepos.map(repo => repo[sortProperty]);

    setStarChartData(data);

    if (data.length > 0) {
      const chartType = "bar";
      const axes = true;
      const legend = false;
      const config = {
        ctx,
        chartType,
        labels,
        data,
        backgroundColor,
        borderColor,
        axes,
        legend
      };
      buildChart(config);
    }
  };

  useEffect(() => {
    if (langData.length && repoData.length) {
      initLangChart();
      initStarChart();
    }
  }, []);

  const chartSize = 300;

  return (
    <Section>
      <ChartStyles>
        <div className="chart">
          <header>
            <h2>Top Languages</h2>
          </header>

          <div className="chart-container">
            <canvas id="langChart" width={chartSize} height={chartSize} />
          </div>
        </div>

        <div className="chart">
          <header>
            <h2>Most Starred</h2>
          </header>
          <div className="chart-container">
            <canvas id="starChart" width={chartSize} height={chartSize} />
          </div>
        </div>
      </ChartStyles>
    </Section>
  );
};

Charts.propTypes = {
  langData: PropTypes.array.isRequired,
  repoData: PropTypes.array.isRequired
};

export default Charts;
