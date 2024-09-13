import React from 'react';
import { render, screen } from '@testing-library/react';
import { Starship } from '@/types/starship';
import StarshipsList from '../starshipList';


describe('StarshipsList', () => {
  const mockStarships: Starship[] = [
    {
      name: 'Millennium Falcon',
      model: 'YT-1300 light freighter',
      starship_class: 'Light Freighter',
      hyperdrive_rating: '0.5',
      max_atmosphering_speed: '1050',
      cargo_capacity: '100000',
    },
    {
      name: 'X-wing',
      model: 'T-65 X-wing',
      starship_class: 'Starfighter',
      hyperdrive_rating: '1.0',
      max_atmosphering_speed: '1050',
      cargo_capacity: '110',
    },
  ];

  it('renders starship items correctly', () => {
    render(<StarshipsList starships={mockStarships} />);

    // Check if starship names are rendered
    mockStarships.forEach((starship) => {
      expect(screen.getByText(starship.name)).toBeInTheDocument();
    });
  });

 
  it('renders fallback message when no starships are available', () => {
    render(<StarshipsList starships={[]} />);
    expect(screen.getByText('No starships information available')).toBeInTheDocument();
  });

  it('does not render list items for string values in starships', () => {
    const starshipsWithStrings = [...mockStarships, 'Some invalid string'] as (Starship | string)[];

    render(<StarshipsList starships={starshipsWithStrings} />);

    // Check that valid starships are rendered
    mockStarships.forEach((starship) => {
      expect(screen.getByText(starship.name)).toBeInTheDocument();
    });

    // Ensure invalid strings are not rendered
    expect(screen.queryByText('Some invalid string')).not.toBeInTheDocument();
  });
});
