# Frontend Documentation

## Overview

The frontend of the project is designed to interact with the backend server to fetch, display, and visualize data. The primary components in this part of the project are `DataList.js`, `DataList.css`, and `DataVisualization.js`.

## Components

### `DataList.js`

**Description:**

`DataList.js` is the main component responsible for managing and displaying the data list. It performs the following tasks:

- **Data Fetching:** Retrieves data from the backend API.
- **Data Filtering and Sorting:** Allows users to filter and sort the displayed data based on various criteria.
- **Search Functionality:** Provides a search input for users to filter data based on text input.
- **CSV Export:** Allows users to export the filtered data as a CSV file.
- **Data Visualization:** Includes a button to toggle the display of data visualizations in a modal.

**Features:**
- Fetches data from a specified API endpoint.
- Implements filtering and sorting logic based on user input.
- Displays data in a table format.
- Includes a button to export data to CSV.
- Provides a modal to view data visualizations using charts.

### `DataList.css`

**Description:**

`DataList.css` contains the styling rules for the `DataList` component. It is used to ensure that the component is visually appealing and organized.

**Key Styles:**
- **Container Styling:** Adds margin and spacing around the container.
- **Table Styling:** Defines the appearance of the table, including borders, padding, and alignment.
- **Button Styling:** Ensures buttons are appropriately spaced and styled.
- **Modal Styling:** Includes styles for displaying the modal with a background overlay and centered content.
- **Responsive Design:** Ensures the layout is responsive and looks good on different screen sizes.

### `DataVisualization.js`

**Description:**

`DataVisualization.js` is responsible for rendering data visualizations using charts. It provides a visual representation of the data through various types of charts.

**Features:**
- **Bar Chart:** Displays data using a bar chart, showing different metrics.
- **Pie Chart:** Provides a pie chart representation of data distribution across categories.
- **Modal Toggle:** Includes a button to toggle the visibility of the modal that contains the charts.

**Functionality:**
- **Charts:** Uses `react-chartjs-2` and `chart.js` to render bar and pie charts based on the data passed from `DataList.js`.
- **Modal:** Opens a modal to display the charts and includes a close button to hide the modal.

## Setup Instructions

1. **Install Dependencies:**
   Make sure you have all required dependencies installed. Run the following command in the `frontend` directory:
   ```sh
   npm install
   ```

2. **Run the Frontend:**
   To start the development server for the frontend, navigate to the `frontend` directory and run:
   ```sh
   npm start
   ```

3. **Access the Application:**
   Open your web browser and go to `http://localhost:3000` to view the frontend application.

## Notes

- Ensure the backend server is running and accessible at `http://localhost:5000` for data fetching.
- The application uses Bootstrap for styling and `react-chartjs-2` for charting functionalities.

For any issues or further customization, refer to the relevant component files and modify as needed.

---