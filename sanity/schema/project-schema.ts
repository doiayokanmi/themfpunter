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
      name: "time",
      title: "Time",
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
    
          // Get the first 3 letters of both fields
          const firstThreeHome = homeTeam.substring(0, 3);
          const firstThreeAway = awayTeam.substring(0, 3);
    
          // Combine the first 3 letters and slugify
          const combined = `${firstThreeHome}-${firstThreeAway}`;
          return combined.toLowerCase().replace(/\s+/g, '-');
        },
        maxLength: 96,
      },
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
          { title: "1-0 H", value: "10" },
          { title: "2-0 H", value: "20" },
          { title: "3-0 H", value: "30" },
          { title: "4-0 H", value: "40" },
          { title: "0-1 A", value: "01" },
          { title: "0-2 A", value: "02" },
          { title: "0-3 A", value: "03" },
          { title: "0-4 A", value: "04" },
        ],
      },
    },
    
    {
      name: "date",
      title: "Select Date",
      type: "date",
      options: {
        dateFormat: "DD/MM/YYYY",
        placeholder: 'Select a date and time',
        calendarTodayLabel: 'Today',
      },
    },
  ],
};


export default project;
