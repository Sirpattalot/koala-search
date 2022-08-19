import { Typography, Box, Slider } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { getProbabilityText } from '../global/utilities';

type FilterPanelProps = {
  onChangeProbablity: Dispatch<SetStateAction<number>>;
  onChangeResultCount: Dispatch<SetStateAction<number>>;
  onChangeDistance: Dispatch<SetStateAction<number>>;
  minProbability: number;
  maxDistance: number;
  maxResults: number;
};

const FilterPanel = ({
  onChangeProbablity,
  onChangeResultCount,
  onChangeDistance,
  minProbability,
  maxDistance,
  maxResults,
}: FilterPanelProps) => {
  const handleDistanceFilterChange = (
    event: Event,
    newValue: number | Number[]
  ) => {
    const distance = newValue as number;
    onChangeDistance(distance);
  };

  const handleResultsFilterChange = (
    event: Event,
    newValue: number | Number[]
  ) => {
    const resultCount = newValue as number;
    onChangeResultCount(resultCount);
  };

  const handleProbabilityFilterChange = (
    event: Event,
    newValue: number | Number[]
  ) => {
    const probability = newValue as number;
    onChangeProbablity(probability);
  };

  return (
    <div className="search-panel">
      <Box sx={{ width: '100%', paddingTop: '20px' }}>
        <Typography id="input-slider" gutterBottom>
          Min Likelihood
        </Typography>

        <Slider
          sx={{ width: '80%', margin: '0 auto 2rem auto', display: 'block' }}
          aria-label="Likelihood"
          value={minProbability}
          onChange={handleProbabilityFilterChange}
          step={0.2}
          marks={[
            {
              value: 0.2,
              label: getProbabilityText(0.2, true),
            },
            {
              value: 0.4,
              label: getProbabilityText(0.4, true),
            },
            {
              value: 0.6,
              label: getProbabilityText(0.6, true),
            },
            {
              value: 0.8,
              label: getProbabilityText(0.8, true),
            },
          ]}
          min={0.2}
          max={0.8}
        />
      </Box>

      <Box sx={{ width: '100%' }}>
        <Typography id="input-slider" gutterBottom>
          Max Distance (km)
        </Typography>
        <Slider
          aria-label="Distance"
          value={maxDistance}
          onChange={handleDistanceFilterChange}
          valueLabelDisplay="auto"
          step={25}
          marks
          min={25}
          max={250}
        />
      </Box>

      <Box sx={{ width: '100%' }}>
        <Typography id="input-slider" gutterBottom>
          Max Results
        </Typography>
        <Slider
          aria-label="Number of Koalas"
          value={maxResults}
          onChange={handleResultsFilterChange}
          valueLabelDisplay="auto"
          step={5}
          marks
          min={5}
          max={50}
        />
      </Box>
    </div>
  );
};

export default FilterPanel;
