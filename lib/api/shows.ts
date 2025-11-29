import axios from "axios";

export interface Show {
  id: string;
  venue: string;
  city: string;
  state?: string;
  country: string;
  date: string;
  ticketUrl?: string;
}

// Dummy show data for development
const DUMMY_SHOWS: Show[] = [
  {
    id: "1",
    venue: "Show 1",
    city: "Phoenix",
    state: "AZ",
    country: "USA",
    date: "2024-12-15T20:00:00",
    ticketUrl: "https://example.com/tickets/1",
  },
  {
    id: "2",
    venue: "Show 2",
    city: "Tucson",
    state: "AZ",
    country: "USA",
    date: "2024-12-20T21:00:00",
    ticketUrl: "https://example.com/tickets/2",
  },
  {
    id: "3",
    venue: "Show 3",
    city: "Albuquerque",
    state: "NM",
    country: "USA",
    date: "2024-12-28T19:30:00",
    ticketUrl: "https://example.com/tickets/3",
  },
  {
    id: "4",
    venue: "Show 4",
    city: "Austin",
    state: "TX",
    country: "USA",
    date: "2025-01-05T20:00:00",
    ticketUrl: "https://example.com/tickets/4",
  },
];

/**
 * Fetches show data for the band.
 * 
 * Currently returns dummy data. To integrate with BandsInTown API:
 * 1. Uncomment the API call code below
 * 2. Set NEXT_PUBLIC_BANDSINTOWN_APP_ID in .env.local
 * 3. Set NEXT_PUBLIC_BANDSINTOWN_ARTIST_NAME in .env.local
 * 4. Remove the DUMMY_SHOWS return statement
 */
export async function getShows(): Promise<Show[]> {
  // For development, return dummy data
  // React Query handles caching automatically, no need for lscache
  return DUMMY_SHOWS;

  /* 
  // Uncomment this to use BandsInTown API:
  
  const appId = process.env.NEXT_PUBLIC_BANDSINTOWN_APP_ID;
  const artistName = process.env.NEXT_PUBLIC_BANDSINTOWN_ARTIST_NAME;

  if (!appId || !artistName) {
    throw new Error("BandsInTown API credentials not configured");
  }

  try {
    const response = await axios.get(
      `https://rest.bandsintown.com/artists/${artistName}/events`,
      {
        params: {
          app_id: appId,
        },
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to fetch show data");
    }

    // Transform BandsInTown response to our Show interface
    return response.data.map((event: any) => ({
      id: event.id,
      venue: event.venue.name,
      city: event.venue.city,
      state: event.venue.region,
      country: event.venue.country,
      date: event.datetime,
      ticketUrl: event.url,
    }));
  } catch (err) {
    throw new Error("Error fetching show data");
  }
  */
}
