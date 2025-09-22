# Farm Produce Supply Management

A comprehensive web application built with Next.js 15 and Tailwind CSS for managing farm produce supply chain operations.

## Features

### Farm Dashboard
- **Overview Metrics**: Total farms, acreage, annual yield, and average yield per acre
- **Farm List**: Comprehensive table showing all farms with key information
- **Clickable Navigation**: Farm names link to detailed farm views
- **Real-time Updates**: ISR caching with 30-second revalidation

### Farm Detail Pages
- **Farm Profile**: Complete farm information including certifications
- **Status Cards**: Farm-specific metrics (annual yield, top crop, revenue, yield per acre)
- **Crops Table**: Detailed crop information with season, area, yields, and pricing
- **Cache Management**: Individual farm caching with refresh capabilities

### Technical Features
- **Next.js 15**: Latest version with App Router and Server Components
- **ISR Caching**: Incremental Static Regeneration for optimal performance
- **API Routes**: RESTful endpoints simulating backend integration
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type Safety**: Full TypeScript implementation

## Data Formatting

- **Currency**: GBP format with comma separators (£12,345)
- **Numbers**: British locale formatting (1,234)
- **Dates**: DD MMM YYYY format
- **Percentages**: Zero decimal places

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── farms/
│   │       ├── route.ts          # All farms endpoint
│   │       └── [id]/route.ts     # Individual farm endpoint
│   ├── farms/
│   │   └── [id]/
│   │       └── page.tsx          # Farm detail page
│   ├── actions.ts                # Server actions for cache invalidation
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Dashboard page
├── lib/
│   ├── mock-data.ts             # Mock data and utility functions
│   └── utils.ts                 # Formatting utilities
└── globals.css                  # Global styles
```

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Application**
   Navigate to [http://localhost:3000](http://localhost:3000)

## API Endpoints

- `GET /api/farms` - Retrieve all farms with aggregated metrics
- `GET /api/farms/[id]` - Retrieve specific farm details with metrics

## Caching Strategy

- **Dashboard**: ISR with 30-second revalidation
- **Farm Details**: Segment-level caching per farm
- **Cache Invalidation**: Server actions for manual refresh

## Mock Data

The application uses comprehensive mock data including:
- 5 sample farms across different UK regions
- Multiple crops per farm with realistic yield data
- Various certifications and farming practices
- Seasonal crop information

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Server Components** - Optimized rendering
- **ISR** - Incremental Static Regeneration
- **Server Actions** - Form handling and cache invalidation

## Development

The application is fully functional with mock data and demonstrates:
- Modern React patterns with Server Components
- Efficient caching strategies
- Responsive design principles
- Type-safe API development
- Professional UI/UX design

## Future Enhancements

- Real backend integration
- User authentication
- Advanced analytics and reporting
- Mobile application
- Real-time notifications
- Export functionality