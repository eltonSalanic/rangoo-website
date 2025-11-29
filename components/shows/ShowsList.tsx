"use client";

import { useShows } from "@/hooks/useShows";
import { formatTime } from "@/lib/utils";
import { H3 } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";

export function ShowsList() {
  const { data: shows, isLoading, error } = useShows();

  if (isLoading) {
    return (
      <div className="section-container text-center">
        <div className="animate-pulse">
          <div className="h-12 bg-western-brown/20 rounded w-1/3 mx-auto mb-8"></div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 bg-western-brown/20 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="section-container text-center">
        <H3 className="text-western-brown mb-4">Error Loading Shows</H3>
        <p className="text-western-brown/70">
          Could not load show data. Please try again later.
        </p>
      </div>
    );
  }

  if (!shows || shows.length === 0) {
    return (
      <div className="section-container text-center">
        <H3 className="text-western-brown mb-4">No Upcoming Shows</H3>
        <p className="text-western-brown/70">
          Check back soon for new show announcements!
        </p>
      </div>
    );
  }

  return (
    <div className="section-container">
      <div className="space-y-6">
        {shows.map((show, index) => (
          <div
            key={show.id}
            className="group relative bg-white/80 backdrop-blur-sm border-4 border-western-brown rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fadeIn"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* decorative corner */}
            <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-western-amber opacity-50"></div>
            <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-western-amber opacity-50"></div>
            <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-western-amber opacity-50"></div>
            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-western-amber opacity-50"></div>

            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center">
              {/* show info */}
              <div className="flex items-start gap-6">
                {/* date */}
                <div className="flex-shrink-0 bg-western-brown text-western-beige p-4 rounded-lg text-center min-w-[80px] shadow-md">
                  <div className="text-3xl font-display font-bold">
                    {new Date(show.date).getDate()}
                  </div>
                  <div className="text-sm uppercase tracking-wide">
                    {new Date(show.date).toLocaleDateString("en-US", {
                      month: "short",
                    })}
                  </div>
                </div>

                {/* venue */}
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-bold text-western-darkBrown mb-2">
                    {show.venue}
                  </h3>
                  <p className="text-lg text-western-brown mb-1">
                    {show.city}
                    {show.state && `, ${show.state}`}
                    {show.country && show.country !== "USA" && `, ${show.country}`}
                  </p>
                  <p className="text-western-brown/70">
                    {formatTime(show.date)}
                  </p>
                </div>
              </div>

              {/* ticket button */}
              {show.ticketUrl && (
                <div className="md:flex-shrink-0">
                  <a
                    href={show.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary" className="w-full md:w-auto">
                      Get Tickets
                    </Button>
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
