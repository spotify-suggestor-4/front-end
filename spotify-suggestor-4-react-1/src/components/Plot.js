import React from 'react';
import Plot from 'react-plotly.js';

const Plot = () => {
    return (
        <>
            <Plot 
            data={[
                {
                    type: 'scatterpolar',
                    theta: [
                        'acousticness',
                        'danceability',
                        'energy',
                        'instrumentalness',
                        'liveness',
                        'loudness',
                        'speechiness',
                        'tempo',
                    ],
                    r: [
                        // Graph data from axios request to DS/ML data
                    ],
                    fill: 'toself',
                },
            ]}
            
            />
        </>
    )
}