import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { buildChart, langColors, backgroundColor, borderColor } from '../utils';
import ChartStyles from './styles/ChartStyles';
import { Section } from '../styles';

const Charts = ({ langData, repoData }) => {
  // Create chart with langData
  const [topLangChartData, setTopLangChartData] = useState(null);

  const initTopLangChart = useCallback(() => {
    const ctx = document.getElementById('langChart');
    const labels = langData.map(lang => lang.label);
    const data = langData.map(lang => lang.value);

    setTopLangChartData(data);

    if (data.length > 0) {
      const backgroundColor = langData.map(
        ({ color }) =>
          `#${color.length > 4 ? color.slice(1) : color.slice(1).repeat(2)}B3`
      );
      const borderColor = langData.map(lang => `${lang.color}`);
      const chartType = 'pie';
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
  }, [langData]);

  // Create Most Starred chart
  const [starChartData, setStarChartData] = useState(null);
  const initStarChart = useCallback(() => {
    const ctx = document.getElementById('starChart');
    const LIMIT = 5;
    const sortProperty = 'stargazers_count';
    const mostStarredRepos = repoData
      .filter(repo => !repo.fork)
      .sort((a, b) => b[sortProperty] - a[sortProperty])
      .slice(0, LIMIT);
    const labels = mostStarredRepos.map(repo => repo.name);
    const data = mostStarredRepos.map(repo => repo[sortProperty]);

    setStarChartData(data);

    if (data.length > 0) {
      const chartType = 'bar';
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
  }, [repoData]);

  // Create Stars per language chart
  const [starLangChart, setStarLangChartData] = useState(null);
  const initStarLangChart = useCallback(() => {
    const ctx = document.getElementById('starLangChart');
    const filteredRepos = repoData.filter(
      repo => !repo.fork && repo.stargazers_count > 0
    );
    const uniqueLangs = new Set(filteredRepos.map(repo => repo.language));
    const labels = Array.from(uniqueLangs.values()).filter(l => l);
    const data = labels.map(lang => {
      return filteredRepos
        .filter(repo => repo.language === lang)
        .map(repo => repo.stargazers_count)
        .reduce((a, b) => a + b, 0);
    });

    setStarLangChartData(data);

    if (data.length > 0) {
      const chartType = 'doughnut';
      const axes = false;
      const legend = true;
      const borderColor = labels.map(label => langColors[label]);
      const backgroundColor = borderColor.map(color => `${color}B3`);
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
  }, [repoData]);

  useEffect(() => {
    if (langData.length && repoData.length) {
      initTopLangChart();
      initStarChart();
      initStarLangChart();
    }
  }, [
    initTopLangChart,
    initStarChart,
    initStarLangChart,
    langData.length,
    repoData.length
  ]);

  const chartSize = 300;
  const topLangChartError = !(topLangChartData && topLangChartData.length > 0);
  const starChartError = !(starChartData && starChartData.length > 0);
  const starLangChartError = !(starLangChart && starLangChart.length > 0);

  return (
    <Section>
      <ChartStyles>
        <div className="chart">
          <h2>Top Languages</h2>
          <div className="chart-container">
            {topLangChartError && <p>Nothing to see here!</p>}
            <canvas id="langChart" width={chartSize} height={chartSize} />
          </div>
        </div>

        <div className="chart">
          <h2>Most Starred</h2>
          <div className="chart-container">
            {starChartError && <p>Nothing to see here!</p>}
            <canvas id="starChart" width={chartSize} height={chartSize} />
          </div>
        </div>

        <div className="chart">
          <h2>Stars per Language</h2>
          <div className="chart-container">
            {starLangChartError && <p>Nothing to see here!</p>}
            <canvas id="starLangChart" width={chartSize} height={chartSize} />
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
