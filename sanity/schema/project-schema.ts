const project = {
  name: "project",
  title: "Best Tips",
  type: "document",
  fields: [
    {
      name: "homeTeam",
      title: "Home Team",
      type: "string",
    },
    {
      name: "awayTeam",
      title: "Away Team",
      type: "string",
    },
    {
      name: "league",
      title: "League",
      type: "string",
    },
    {
      name: "time",
      title: "Time",
      type: "string",
    },
    {
      name: "correctScore",
      title: "Correct Score",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (document: any) => {
          const homeTeam = document.homeTeam;
          const awayTeam = document.awayTeam;
    
          const firstThreeHome = homeTeam.substring(0, 3);
          const firstThreeAway = awayTeam.substring(0, 3);
    
          const combined = `${firstThreeHome}-${firstThreeAway}`;
          return combined.toLowerCase().replace(/\s+/g, '-');
        },
        maxLength: 96,
      },
    },    
    {
      name: "outcome",
      title: "Outcome",
      type: 'string',
      options: {
        list: [
          'not started', 'ongoing', 'won', 'loss', 'void'
        ]
      }
    },
    {
      name: "prediction",
      title: "Select Prediction",
      type: "string",
      options: {
        list: [
          { title: "1", value: "1" },
          { title: "2", value: "2" },
          { title: "X", value: "X" },
          { title: "1X", value: "1X" },
          { title: "X2", value: "X2" },
          { title: "12", value: "12" },
          { title: "Over 1.5", value: "over1.5" },
          { title: "Over 2.5", value: "Over2.5" },
          { title: "Home 0.5", value: "h0.5" },
          { title: "Away 0.5", value: "a0.5" },
          { title: "HWEH", value: "HWEH" },
          { title: "AWEH", value: "AWEH" },
          { title: "1-0 H", value: "1-0 H" },
          { title: "2-0 H", value: "2-0 H" },
          { title: "3-0 H", value: "3-0 H" },
          { title: "4-0 H", value: "4-0 H" },
          { title: "0-1 A", value: "0-1 A" },
          { title: "0-2 A", value: "0-2 A" },
          { title: "0-3 A", value: "0-3 A" },
          { title: "0-4 A", value: "0-4 A" },
        ],
      },
    },
    
  ],
};


export default project;
