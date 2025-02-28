# AidNet Frontend

AidNet is a disaster relief coordination platform designed to connect affected individuals, donors, and volunteers for efficient relief operations. This repository contains the frontend of AidNet, built with React, TypeScript, and Vite.

## Tech Stack

- **Frontend Framework**: React (TypeScript)
- **Bundler**: Vite
- **State Management**: Zustand
- **Data Fetching**: React Query
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Authentication**: Google Sign up Integration

## Features

- User authentication (Login, Sign up, Google OAuth)
- Request aid and track status
- Offer donations and manage resource availability
- Volunteer task assignments and relief campaign tracking
- Real-time notifications and updates
- WebSocket-based real-time chat system

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (latest LTS recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/aidnet-frontend.git
   cd aidnet-frontend
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```sh
   npm run dev
   # or
   yarn dev
   ```

The application will be available at `http://localhost:5173/`.

## Project Structure

```
├── src
│   ├── components   # Reusable UI components
│   ├── pages        # Page components
│   ├── services     # API service handlers
│   ├── store        # Zustand store for state management
│   ├── Mutations    # Mutation functions
│   ├── main.tsx     # Application entry point
│   ├── App.tsx      # Main app component
│
├── public           # Static assets
├── .env             # Environment variables
├── tsconfig.json    # TypeScript configuration
├── vite.config.ts   # Vite configuration
```

## Environment Variables

Create a `.env` file in the root directory and configure the following:

```env
VITE_API_BASE_URL=http://localhost:8000/api  # Backend API base URL
VITE_GOOGLE_CLIENT_ID=your-google-client-id
```

## Contributing

Contributions are welcome! Please follow the guidelines below:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or issues, feel free to reach out.

- **Email**: hashimrahmanrh@gmail.com
- **GitHub**: [Hashimrahman](https://github.com/Hashimrahman)

